let slideIndex = 0;

const slides = [];
slides[0] = new Image();
slides[1] = new Image();
slides[2] = new Image();
slides[3] = new Image();
slides[4] = new Image();

slides[0].src = 'asset/slide1.jpg';
slides[1].src = 'asset/slide2.jpg';
slides[2].src = 'asset/slide3.jpg';
slides[3].src = 'asset/slide4.jpg';
slides[4].src = 'asset/slide5.jpg';

function showSlides(n) {
  if (n === 1) {
    slideIndex += 1;

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
  } else {
    slideIndex -= 1;

    if (slideIndex <= -1) {
      slideIndex = slides.length - 1;
    }
  }

  document.images[0].src = slides[slideIndex].src;
}

function next() {
  showSlides(1);
}

function past() {
  showSlides(0);
}

function addclass() {
  document.querySelector('.item').classList.add('item-animated');
}

function delclass() {
  document.querySelector('.item').classList.remove('item-animated');
}

document.querySelector('.prev').onclick = function getAnimation() {
  past();
  addclass();
  setTimeout(delclass, 800);
};

document.querySelector('.next').onclick = function getAnimation() {
  next();
  addclass();
  setTimeout(delclass, 800);
};
