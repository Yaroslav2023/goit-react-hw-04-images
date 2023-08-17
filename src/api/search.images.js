const API_KEY = '38704557-50a9fed92ee40471d32e5bbee';
const BASE_URL = 'https://pixabay.com/api';


export const getImages = async ({ searchQuery, page, perPage }) => {
    const response = await fetch(`${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`);

    if (!response.ok) {
        throw new Error('Error!!!')
    }

     
    return response.json();
}