import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getUrl } from "./js/pixabay-api";
import { createMarcup } from './js/render-functions';

export const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
})

const preloader = document.querySelector('.loader');
preloader.style.display = 'none';

export const showLoader = () => {
    preloader.style.display = 'flex';
    
};
const hideLoader = () => {
    preloader.style.display = 'none';
};

export const gallery = document.querySelector(".gallery")

const form = document.querySelector(".form")
export const inputSearch = form.elements.query;


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const query = event.target.elements.query.value.trim()
if (query !== "") {
    gallery.innerHTML = "";
    getUrl(query)
        .then((images) => {
            createMarcup(images.hits);
            form.reset(); 
            hideLoader();
        })
        .catch((error) => {
            console.log(error);
            hideLoader();
            iziToast.error({
                message: 'Sorry, an error occurred while loading. Please try again!',
                theme: 'dark',
                progressBarColor: '#FFFFFF',
                color: '#EF4040',
                position: 'topRight',
            });
        });
} else {
    iziToast.show({
        message: 'Please complete the field!',
        theme: 'dark',
        progressBarColor: '#FFFFFF',
        color: '#EF4040',
        position: 'topRight',
    });
}
}


