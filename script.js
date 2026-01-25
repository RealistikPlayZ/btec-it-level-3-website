/* Interactive Map */
window.addEventListener("load", () => {
  document.getElementById("map-frame").src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.117120613766!2d-1.8852510235992762!3d52.46488047204739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd685ad0bcb5%3A0xe34cb3d4d820b0be!2sJoseph%20Chamberlain%20College!5e0!3m2!1sen!2suk!4v1700000000000";
});

/* Font Enlarger + Controls */
document.addEventListener("DOMContentLoaded", () => {
  let fontSize = parseInt(localStorage.getItem("fontSize")) || 16;

  function updateFont() {
    document.documentElement.style.fontSize = fontSize + "px";
    localStorage.setItem("fontSize", fontSize);
  }

  updateFont();

  document.getElementById("IncreaseFont").onclick = () => {
    fontSize = Math.min(fontSize + 2, 32);
    updateFont();
  };

  document.getElementById("DecreaseFont").onclick = () => {
    fontSize = Math.max(fontSize - 2, 10);
    updateFont();
  };

  document.getElementById("DefaultFont").onclick = () => {
    fontSize = 16;
    updateFont();
  };
});

/* Images Slideshow */
let slideIndex = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
});

/* Live Clock */
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

// update every second
setInterval(updateClock, 1000);
updateClock(); // run immediately

/* Image Enlarger + Custom Background */
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".enlarge-img");
  const popup = document.getElementById("imgPopup");
  const popupImage = document.getElementById("popupImage");
  const bgMotion = document.getElementById("bgMotionOverlay");

  images.forEach(img => {
    img.addEventListener("click", () => {
      popup.style.display = "flex";
      popupImage.src = img.src;

      // Turn off background
      bgMotion.classList.add("active");
    });
  });

  popup.addEventListener("click", () => {
    popup.style.display = "none";

    // Turn off background
    bgMotion.classList.remove("active");
  });
});
