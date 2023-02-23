import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// DOM Layout Template
/*
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> 
*/

//  --------- Get Link To Gallery Container------

const containerEl = document.querySelector(".gallery");

// ======  creation gallery layout function

function createGalleryLayout(object) {
	return object.map(({ preview, original, description }) => {
		return `<a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt='${description}' />
      </a> `;
	});
}

// ======   inserting a layout into the DOM

const galleryMockup = createGalleryLayout(galleryItems);
containerEl.insertAdjacentHTML("afterbegin", galleryMockup.slice(",").join(""));

//  ====== SimpleLightBox Initialisation

let gallery = new SimpleLightbox(".gallery a");

gallery.on("show.simplelightbox", function (event) {
    // add keyboard navigation
    window.addEventListener("keypress", event => {
        if(event.key === 'ArrowRight'){
            gallery.next()
        } else if (event.key === "ArrowLeft"){
            gallery.prev()
        }
    });
    // add setting simplelightbox options
    gallery.options.captionsData = "alt"
    gallery.options.captionDelay = 250
    gallery.options.overlayOpacity = 0.1
    gallery.options.showCounter =  true

})

