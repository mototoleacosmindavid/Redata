  import { createSlide } from '../slide/slide';

function createCarouselContainer(className = '') {
  const carouselContainer = document.createElement('div');

  carouselContainer.className = className;

  return carouselContainer;
}

function createPrevButton() {
  const prev = document.createElement('span');

  prev.id = '#prev';
  prev.className = 'prev';
  prev.innerHTML = '&#10094;';

  return prev;
}

function createNextButton() {
  const next = document.createElement('span');

  next.id = '#next';
  next.className = 'next';
  next.innerHTML = '&#10095;';

  return next;
}

export function createCarousel (parent, elements= []) {
  const carouselContainer = createCarouselContainer('carousel');

  elements.forEach(element => {
    const { id, title, description, posterImage } = element;

    const slide = createSlide({
      id,
      title,
      posterImage,
      description,
    });

    carouselContainer.appendChild(slide);
  });

  const prev = createPrevButton();

  const next = createNextButton();

  carouselContainer.append(prev, next);

  parent.appendChild(carouselContainer);
}

