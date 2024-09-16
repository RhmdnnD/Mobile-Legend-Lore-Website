let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

setInterval(nextSlide, 3000);

function playAudio() {
  console.log("playAudio function called");
  var audio = document.getElementById("myAudio");
  if (audio) {
      console.log("Audio element found:", audio);
      audio.play().then(() => {
          console.log("Audio is playing");
      }).catch((error) => {
          console.error("Error playing audio:", error);
      });
  } else {
      console.error("Audio element not found");
  }
}

