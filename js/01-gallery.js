import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
/*
<div class="gallery__item">
  <a class="gallery__link" href=${el.original}>
    <img
      class="gallery__image"
      src=${el.preview}
      data-source=${el.original}
      alt=${el.description}
    />
  </a>
</div>*/

//  --------- Get Link To Gallery Container------ 
const container = document.querySelector(".gallery");

// ======  event listener
container.addEventListener("click", onClick);

// ======  gallery layout function
function createGallery(object) {
	return object.map(
		el =>
			`<div class="gallery__item">
      <a class="gallery__link" href=${el.original}>
        <img
            class="gallery__image"
            src=${el.preview}
            data-source=${el.original}
            alt='${el.description}'
        />
      </a>
    </div>`,
	);
}

// ======   inserting a layout into the DOM
const createMackup = createGallery(galleryItems);
container.insertAdjacentHTML("afterbegin", createMackup.slice(",").join(" "));

// ======   callback Functions
function onClick(event) {
	event.preventDefault();
	if (event.target.className !== "gallery__image") {
		return;
	}
	basicLightbox.create(`<img src="${event.target.dataset.source}" width="1280">`).show(onClose);
}

function onClose(click) {
	window.addEventListener("keydown", event => {
		if (event.key === "Escape") {
			return click.close();
		}
	});
}

