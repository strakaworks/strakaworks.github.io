const pos = 0
let isDragging = false
let canMove = true
let dragRight = false
let infoShow = false

const infoLink = document.getElementById("info-link");
const information = document.getElementById("information");
const grid = document.getElementById("grid");
const slider = document.getElementById("myRange");
const slidecontainer = document.getElementById("slidecontainer")

infoLink.addEventListener("click", function( event ) {
console.log('info click')
if (infoShow) {
	information.classList.remove("show")
	information.classList.add("hide")
	infoShow = false
	infoLink.innerHTML = "Info"
	slidecontainer.classList.remove("hide")
	slidecontainer.classList.add("show")
} else {
	information.classList.remove("hide")
	information.classList.add("show")
	infoShow = true
	infoLink.innerHTML = "Works"
	slidecontainer.classList.remove("show")
	slidecontainer.classList.add("hide")
}
}, false);


let gridItems = document.querySelectorAll('.grid_item');
let gridSize = grid.className;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
	let v = this.value
	console.log(v)

	if (v == 20) {
		console.log("s")
		grid.className = ''
		grid.classList.add("size-s")
		updateSource(gridItems, grid.className); 
	} else if (v == 40) {
		console.log("m")
		grid.className = ''
		grid.classList.add("size-m")
		updateSource(gridItems, grid.className); 
	} else if (v == 60) {
		console.log("l")
		grid.className = ''
		grid.classList.add("size-l")
		updateSource(gridItems, grid.className); 
	} else if (v ==  80) {
		console.log("xl")
		grid.className = ''
		grid.classList.add("size-xl")
		updateSource(gridItems, grid.className); 
	} else if (v == 100) {
		console.log("xxl")
		grid.className = ''
		grid.classList.add("size-xxl")
		updateSource(gridItems, grid.className); 
	}		
}

function updateSource(gridItems, gridSize) {
	gridItems.forEach(parent => {
	  const className = gridSize;
	  const image = parent.querySelector('img');
    const originalSrc = image.src;
    const extensionIndex = originalSrc.lastIndexOf('.');
    const imageNameWithDashes = originalSrc.substring(0, extensionIndex);
    const separatorIndex = imageNameWithDashes.lastIndexOf('---');
    const imageName = imageNameWithDashes.substring(0, separatorIndex);
    const imageExtension = originalSrc.substring(extensionIndex);
    const updatedSrc = `${imageName}---${className}${imageExtension}`;
    image.src = updatedSrc;
	});
};








const lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

const SimpleLightbox = window.SimpleLightbox;
new SimpleLightbox({elements: '.grid_item a'});