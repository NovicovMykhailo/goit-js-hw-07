import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
/*
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>*/

const container = document.querySelector(".gallery");
container.addEventListener("click", onClick);


function createGallery(object) {
	let galleryList = [];
	for (let el of object) {
		let listEl;
		listEl = `<div class="gallery__item">
            <a class="gallery__link" href=${el.original}>
            <img class="gallery__image" src=${el.preview} 
            data-source="${el.original}" alt=${el.description}/>
            </a>
        </div>`;
		galleryList.push(listEl);
	}
	return galleryList;
}
const createMackup = createGallery(galleryItems)
container.insertAdjacentHTML("afterbegin", createMackup.slice(",").join(" "));

function onClick(event) {
	event.preventDefault();
}
