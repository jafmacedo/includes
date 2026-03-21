// script01.js
  const images = [
    "https://jafmacedo.github.io/includes/CuidadosInvisiveis/01.jpg",
    "https://jafmacedo.github.io/includes/CuidadosInvisiveis/02.jpg",
	"https://jafmacedo.github.io/includes/CuidadosInvisiveis/03.jpg",
	"https://jafmacedo.github.io/includes/CuidadosInvisiveis/04.jpg",
	"https://jafmacedo.github.io/includes/CuidadosInvisiveis/05.jpg",
	"https://jafmacedo.github.io/includes/CuidadosInvisiveis/06.jpg",
	"https://jafmacedo.github.io/includes/CuidadosInvisiveis/07.jpg"
    
  ];

  let current = 0;
  let startX = 0;

  const gallery = document.getElementById("gallery");
  const wrapper = document.getElementById("slider-wrapper");

  // criar thumbnails
  images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.onclick = () => {
      current = index;
      showSlider();
    };
    gallery.appendChild(img);

    // criar slides
    const slide = document.createElement("div");
    slide.className = "slide";
    const slideImg = document.createElement("img");
    slideImg.src = src;
    slide.appendChild(slideImg);
    wrapper.appendChild(slide);
  });

  function showGrid() {
    gallery.style.display = "grid";
    document.getElementById("slider").style.display = "none";
  }

  function showSlider() {
    gallery.style.display = "none";
    document.getElementById("slider").style.display = "flex";
    updateSlide();
  }

  function updateSlide() {
    wrapper.style.transform = `translateX(-${current * 100}%)`;
  }

  function next() {
    current = (current + 1) % images.length;
    updateSlide();
  }

  function prev() {
    current = (current - 1 + images.length) % images.length;
    updateSlide();
  }

  // swipe touch
  wrapper.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  wrapper.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;

    if (diff > 50) next();
    if (diff < -50) prev();
  });

  // iniciar em slider
showSlider();
