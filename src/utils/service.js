
export function fetchImages (query, page=1) {

    const KEY = '32967764-6cff543b680aa07e982292422';
    const MAIN_URL = `https://pixabay.com/api/`;
    return fetch(`${MAIN_URL}?key=${KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`).then(response => response.json());
}
