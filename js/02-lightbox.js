import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulEl = document.querySelector(".gallery");

function galleryImg(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

ulEl.insertAdjacentHTML("beforeend", galleryImg(galleryItems));

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
