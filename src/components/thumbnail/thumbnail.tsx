import styles from './thumbnail.module.css';

type ThumbnailProps = {
    imageLink: string;
    description: string;
}

export default function Thumbnail({imageLink, description}: ThumbnailProps){

    const customizeThumbnail = {
        backgroundImage: `url(${imageLink})`
    }

    const shortDescription = description?.length > 100 ? description.slice(0, 100) + '...' : description;

     return (
        <div className={styles.thumbnail}>
            <div className={styles.image} style={customizeThumbnail}></div>
            <div className={styles.description}>{shortDescription}</div>
        </div>
     )
}