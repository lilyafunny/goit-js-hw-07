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

  const img = event.target.closest(".gallery__image");
  console.log(img);
  img.setAttribute("src", img.dataset.source);

  const instance = basicLightbox.create(`
    <div class="modal">
        <img
            class="gallery__image"
             src="${img.preview}"
            data-source="${img.original}"
            alt="${img.description}"
          />
    </div>
`);

  instance.show();
}

ulEl.insertAdjacentHTML("beforeend", galleryImg(galleryItems));
