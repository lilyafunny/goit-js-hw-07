import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulEl = document.querySelector(".gallery");
ulEl.addEventListener("click", handleClick);

function galleryImg(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  const img = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img
             src="${img}"
            alt="${img}"
          />
    </div>
`
  );

  instance.show();
}

ulEl.insertAdjacentHTML("beforeend", galleryImg(galleryItems));
