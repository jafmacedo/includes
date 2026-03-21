// script01.js
  const images = [
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQTYDaeaS8i4TrnxN1AXsK-4AUZ_BYE91SdirBTJC7YJWFc",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQQLe-tFpBbWSaaDUdDWiWCgAQbQ9I_tLjmTbs5Vl7_S014",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQRz8nnW1lJnTJsr5viEtjrKAVVMJ4MrtSk5CwhTHEpIWW4",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQRxOrKSwWbMTKd8lIMmQde9AZsFeYo3_WUcGpGE4Dhvil0",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQTKmD_rfO-uS59OsNSkd5BNAUeObHFFYUXIXLZG2XAgwic",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQRBFt-CtTqIRLkNb2s_97uCAcvUT5vFsdzs5h7fCcHbwVA",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQRFICXGr0OpRZjL2ypwBi3UAac78u5SwTtOY7YR9ZDQs18",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQTeS2g6rl1NTYP7xowI-z2FAWLeH1GILowNk2npl8sF-PQ",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQTsrp7zJBaCTIhjG4smNMwmAbAvzXSQ8bZRIvFxz3FcxmA",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQR1flCEM-DMSaibY4MDRAzJAS212ReIMFuP3KXr9G6ZGjU",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQRXukptJ_DESKY7ekUjBHA-AYTDKTtJLibC0-OuE8RMCaY",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQRZiBgUR9sJQ6Q8b-Rspws2Ad5KrwvrUTag0gW19qOej78",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQRrbXl6EJiTTYfFpSHkw4JjATtnyoRXI8hjYdy58O0g_NA"
    
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