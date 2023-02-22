import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

/*
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> 
*/

// //  --------- Get Link To Gallery Container------
const container = document.querySelector(".gallery");

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
container.insertAdjacentHTML("afterbegin", galleryMockup.slice(",").join(""));

// ======   callback Functions
// const imgDescr = event.target.attributes.alt.nodeValue;

//  ====== SimpleLightBox Inicialisation

let gallery = new SimpleLightbox(".gallery a");


gallery.on("show.simplelightbox", function (event) {
	// console.dir(event.target.attributes);
    window.addEventListener("keypress", event => {
        if(event.key === 'ArrowRight'){
            gallery.next()
        } else if (event.key === "ArrowLeft"){
            gallery.prev()
        }
    });
    gallery.options.captionsData = "alt"
    gallery.options.captionDelay = 250
    gallery.options.overlayOpacity = 0.1
    gallery.options.showCounter =  false

    console.dir(gallery.captionsData)
    console.dir(gallery)
   


})

/**
 * 3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery.
 *      Для этого ознакомься с документацией SimpleLightbox
 *       (https://simplelightbox.com/)- в первую очередь секции «Usage» и «Markup».
 * 4. Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt.
 *      Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.
 */



// ArrowRight
// ArrowLeft'
