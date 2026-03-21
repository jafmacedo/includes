// script01.js
  const images = [
    "https://1drv.ms/i/c/a722cc594cbf4e7e/IQRtft0mnuFZRZFgZ6OpK7hRAWCokgO71xQ1TrTzxZoJ_ME",
    "https://1drv.ms/i/c/a722cc594cbf4e7e/IQTV1zaswN4tSZkJhpDYTCogAZXMZFM6z-yymagCSeJ9DrI",
    "https://1drv.ms/i/c/a722cc594cbf4e7e/IQRmIXyuMSQ7QoB1s1YmMiXgAW8AazsJ851wnXbJ_7XNDHw",
    "https://1drv.ms/i/c/a722cc594cbf4e7e/IQQiT-X2gRZMQYTphnW-9SgxAVT-HLtHk-C49R2Nt2iCsEE",
    "https://1drv.ms/i/c/a722cc594cbf4e7e/IQTkK3pFD10YSaNwRzs-_9m1Ab5HNdj8lvPo9iXsdWYF-Vg",
    "https://1drv.ms/i/c/a722cc594cbf4e7e/IQRSLWBZjCRmSof9GYY55goaASsjtmKn29Yrau0fCiB95qM",
    "https://1drv.ms/i/c/a722cc594cbf4e7e/IQS2vqFS2oP9SYOzd8DAAZO1AQnW1O_mHtUVFFkGpkfwVTI"
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