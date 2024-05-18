
const button = document.getElementById('menu_button');
const myElement = document.getElementById('menu');

button.addEventListener('click', function() {
    console.log("The button Worked!");
    myElement.classList.toggle('hide');
});

// function handleResize() {
//     const menu = document.querySelector(".menu");
//     // This grabs the menu class from the html
//     if (window.innerWidth > 1000) {
//         // if the width of the html is less than 1000px it will remove the hide class
//       menu.classList.remove("hide");
//     } else {
//         // will hide the menu with the hide class
//       menu.classList.add("hide");
//     }
//   }
  
//   //calls the function when the javascript is loaded
//   handleResize();
//   // waits until the the window is resized to call the funciton again
//   window.addEventListener("resize", handleResize);

const closeButton = document.querySelector(".close-viewer");
closeButton.addEventListener("click", closeViewer);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
    </div>`;
  }

function closeViewer() {
    console.log("closeViewer function called");
    const viewer = document.querySelector(".viewer");
    viewer.remove();
  }

function viewHandler(event) {
    const clickedElement = event.target;
    const src = clickedElement.src.split('-');
    const largerImgSrc = `${src[0]}-full.jpeg`;
  
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(largerImgSrc, clickedElement.alt));
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
  }

const gallerySection = document.querySelector(".gallery");
gallerySection.addEventListener("click", viewHandler);
