import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getUrl } from "./js/pixabay-api";
import { createMarcup } from './js/render-functions';

const loader = document.querySelector(".loader");
loader.style.display = "none";

const input = document.querySelector("#input-search");
input.addEventListener("input", handleInput);
function handleInput() {
    const value = input.value
    console.log(value);
}


const button = document.querySelector(".button-search");

export const gallery = document.querySelector(".gallery");


export const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
})