import { inputSearch, showLoader } from '../main';

export function getUrl(query) {
    const BASE_URL = "https://pixabay.com/api/";
    const params = new URLSearchParams({
        key: "43014445-2d3e2fe82a6f953d204684055",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    })
    showLoader();
    const url = `${BASE_URL}?${params}`;
     return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}