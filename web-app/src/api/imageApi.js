import { createClient } from 'pexels';

const client = createClient(process.env.REACT_APP_PEXELS_AUTH);

// Gets list of photos from Pexels by a certian query
export const getPhotosByQuery = (query) => {
    try {
        return client.photos.search({ 
            query: query, per_page: 80
        });
    } catch (e) {
        console.log(e);
    }
}

// Gets randomized list of photos from Pexels
export const getPhotosCurated = () => {
    try { 
        return client.photos.curated({ 
            per_page: 80
        });
    } catch (e) {
        console.log(e);
    }
}