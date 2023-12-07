'use client'
import { useMemo, useState } from 'react';

import { useFilterContext } from '@/contexts/FilterContext';
import Thumbnail from '../thumbnail/thumbnail';

import getImgurGallery from '@/services/IMGURSerivce';

import styles from './thumbnails.module.css';
import axios from 'axios';

export default function Thumbnails(){
    const { filter } = useFilterContext();
    const [images, setImages] = useState<any[] | undefined>();
 
    useMemo(() => {
        
        const getGalleryImages = async () => {
            const images = await getImgurGallery(filter.section?.toLowerCase(), filter.sort?.toLowerCase(), filter.sort?.toLowerCase());
            setImages(images?.slice(0, filter.number));
        }
        getGalleryImages();
    }, [filter]); 


    return (
        <div className={styles.thumbnails}>
            {images?.map((image, index) => (
                <Thumbnail key={index} imageLink={image.link} description={image.description} />
            ))}
        </div>
    )
}