const slider = document.getElementById('slider-range');
const inputMin = document.getElementById('price-min');
const inputMax = document.getElementById('price-max');

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

nouiSlider.create(slider, {
  start: [0, 900],
  connect: true,
  range: {
    'min': 0,
    'max': 1000
  }
});


slider.nouiSlider.on('update', (values, handle) => {
  if (handle === 0) {
    inputMin.value = Math.round(values[0]);
  } else {
    inputMax.value = Math.round(values[1]);
  }
});

function setSliderValues() {
  const min = parseInt(inputMin.value, 10);
  const max = parseInt(inputMax.value, 10);

  if (min >= 0 && max <= 1000 && min <= max) {
    slider.nouiSlider.set([min, max]);
  }
}

inputMin.addEventListener('change', setSliderValues);
inputMax.addEventListener('change', setSliderValues);
