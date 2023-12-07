

import axios from 'axios';

import { mockHotViral } from './Mock/hot-viral';
import { mockHotTop } from './Mock/hot-top';
import { mockHotTime } from './Mock/hot-time';
import { mockTopViral } from './Mock/top-viral';
import { mockTopTop } from './Mock/top-top';
import { mockTopTime } from './Mock/top-time';
import { mockUserViral } from './Mock/user-viral';
import { mockUserTop } from './Mock/user-top';
import { mockUserTime } from './Mock/user-time';


const requestHeaders = {
    headers: {
        'Authorization': 'Bearer f62c594f0e05e336ec3f4465e5b96bac97dbf401',
    }
};

export default async function getImgurGallery(section?: string, sort?: string, window?: string){
    
    const requestSection = section !== undefined ? section : 'hot';
    const requestSort = sort !== undefined ? sort : 'viral';

    try {

        //const requestUrl = !window ? 'https://api.imgur.com/3/gallery/' + requestSection + '/' + requestSort : 'https://api.imgur.com/3/gallery/' + requestSection + '/' + requestSort + '/' + window ;
        //const { data } = await axios.get(requestUrl, requestHeaders);

        const data: any = await getMockData(requestSection, requestSort);

        const response = data.data;
        const images: any[] = [];

        response.forEach((album: any) => {
            const albumImages = album.images;
            if(albumImages !== undefined){
                albumImages.map((image: any) => {
                    if(image.type === 'image/jpeg' || image.type === 'image/png'){

                        const imageObject = {
                            link: image.link,
                            description: image.description, 
                        };

                        images.push(imageObject);
                    }
                })
            }
        });

        return images;

    } catch (error) {
        console.error(error);
    }
}

async function getMockData(section: string, sort: string){

    //hot
    if(section === 'hot' && sort === 'viral'){
        return mockHotViral;
    }
    if(section === 'hot' && sort === 'top'){
        return mockHotTop;
    }
    if(section === 'hot' && sort === 'time'){
        return mockHotTime;
    }

    //top
    if(section === 'top' && sort === 'viral'){
        return mockTopViral;
    }
    if(section === 'top' && sort === 'top'){
        return mockTopTop;
    }
    if(section === 'top' && sort === 'time'){
        return mockTopTime;
    }

    //user
    if(section === 'user' && sort === 'viral'){
        return mockUserViral;
    }
    if(section === 'user' && sort === 'top'){
        return mockUserTop;
    }
    if(section === 'user' && sort === 'time'){
        return mockUserTime;
    }
}



