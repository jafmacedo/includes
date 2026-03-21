// script01.js
  const images = [
    "https://1drv.ms/i/c/a722cc594cbf4e7e/IQTmWH7eXeEJT43av0zPpdjwAWID9M4mi156SF7NROQsi3A",
    "https://1drv.ms/i/c/a722cc594cbf4e7e/IQRCexjnR4f1TY1Sf_HEXG2PAc0fSQoVDyf5QGo9ZuoMG1E",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQRlZZVCnHn4S5u7MjTskIQRASEVDqY3y-07V7iKXMgkBHQ",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQQy-7lL4aoCQr-o780QBCUMAYnTLWgiNOkIK314fLFIwtI",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQRdYn1sN6kHS4D5SUJEDztXAUa8Iswi9-F5ztjc6IZfXq0",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQRKhCOc_yvWQJSWoMWMZHiNAaBxaPfQhK5__v-SZgO_8uc",
	"https://1drv.ms/i/c/a722cc594cbf4e7e/IQR_g3cO0phST4eGtzJHqNVqAWzAuZ9RlKLlrbVUSKhlwHE"
    
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