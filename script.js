//countdown sale

let totalSeconds = 10 * 3600 + 20 * 60 + 5;
function updateCountdown() {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    clearInterval(countdownInterval);
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

//carousel

let currentIndex = 0;
const itemsPerView = 4;

function updateCarousel() {
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const itemWidth = items[0].clientWidth;
  const totalItems = items.length;

  const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

  if (currentIndex > maxIndex) currentIndex = maxIndex;
  if (currentIndex < 0) currentIndex = 0;

  track.style.transform = `translateX(-${
    currentIndex * itemWidth * itemsPerView
  }px)`;
}

function nextSlide() {
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex =
      Math.ceil(
        document.querySelectorAll(".carousel-item").length / itemsPerView
      ) - 1;
  }

  updateCarousel();
}

$(document).ready(function () {
  $(".your-slider").slick({
    dots: true, // Shows dots at the bottom
    infinite: true, // Infinite loop sliding
    speed: 500, // Slide speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Automatically plays the slides
    autoplaySpeed: 2000, // Auto play speed in milliseconds
    arrows: true, // Show next/prev arrows
  });
});

$(".filtering4").slick({
  slidesToShow: 4, //hiển thị bao nhiêu slider
  slidesToScroll: 1, // click chạy đổi bao nhiêu slider
  infinite: true, //chạy vô tận
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true, //làm mất nút next prev
  prevArrow:
    "<button id='prevButton' type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left'></i></button>",
  nextArrow:
    "<button id='nextButton' type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right'></i></button>",
  draggable: true, //kéo hình ảnh đi được hay không?
  dots: false, //hiện icon dấu chấm ko?
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
