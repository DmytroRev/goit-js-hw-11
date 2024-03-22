import { refs, lightbox} from "../main";
export function createMarcup(arr) {
    if (arr.length === 0) {
        iziToast.error({
    position: 'topRight',
    message: "Sorry, there are no images matching your search query. Please try again!"
});
    } else {
const createMarkup = arr.map((image) => {
  return `<li class="img-blok">
        <a href="${image.largeImageURL}">     
    <img  src="${image.webformatURL}"
    data-source="${image.largeImageURL}"
    alt="${image.tags}">
    <ul class="photo-information-container">
            <li class="item-photo-information-container"><p><span class="accent">Likes</span></br>${image.likes}</p></li>
            <li class="item-photo-information-container"><p><span class="accent">Views</span></br>${image.views}</p></li>
            <li class="item-photo-information-container"><p><span class="accent">Comments</span></br>${image.comments}</p></li>
            <li class="item-photo-information-container"><p><span class="accent">Downloads</span></br>${image.downloads}</p></li>
            </ul>`
    
   
}) .join("")  
    }
    gallery.insertAdjacentHTML("beforeend", createMarcup);
    lightbox.refresh();
}

