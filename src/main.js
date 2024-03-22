import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getUrl } from "./js/pixabay-api";
import { createMarcup } from './js/render-functions';

const loader = document.querySelector(".loader");
loader.style.display = "none";

export const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
})

export const refs = {
    form: document.querySelector(".form"),
    button: document.querySelector(".button-search"),
    gallery: document.querySelector(".gallery")
}

refs.form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const query = refs.form.elements.query.value;
   console.log(query);
}


