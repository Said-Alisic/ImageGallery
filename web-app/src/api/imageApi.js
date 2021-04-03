import { createClient } from 'pexels';

const client = createClient(process.env.REACT_APP_PEXELS_AUTH);

export const getPhotosByQuery = (query) => {
    try {
        return client.photos.search({ 
            query: query, per_page: 80
        });
    } catch (e) {
        console.log(e);
    }
}

export const getPhotosCurated = () => {
    try { 
        return client.photos.curated({ 
            per_page: 80
        });
    } catch (e) {
        console.log(e);
    }
}

// Add a button for getting random images
export const getPhotoRandom = () => {
    try { 
        return client.photos.random();
    } catch (e) {
        console.log(e);
    }
}