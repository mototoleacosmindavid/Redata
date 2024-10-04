function initSlide(id) {
  const slide = document.createElement('div');

  slide.id = id;
  slide.className = 'slide fade';

  return slide;
}

function setSlideTitle(title = '') {
  const slideTitle = document.createElement('div');

  slideTitle.className = 'slide-title';
  slideTitle.innerText = title;

  return slideTitle;
}

function setSlidePosterImage(src) {
  const slidePosterImage = document.createElement('div');

  if(src) {
    slidePosterImage.style.background = `url('${src}')`;
  }

  slidePosterImage.className = 'slide-posterImage';

  return slidePosterImage;
}

function setSlideDescription(description = '') {
  const slideDescription = document.createElement('div');
  slideDescription.className = 'slide-description';
  slideDescription.innerText = description;

  return slideDescription;
}

export function createSlide ({
  id,
  title,
  posterImage= '',
  description= '',
}) {

  const slide = initSlide(id);
  const slideTitle = setSlideTitle(title);
  const slidePosterImage = setSlidePosterImage(posterImage, title);
  const slideDescription = setSlideDescription(description);

  slide.append(slideTitle,slidePosterImage,slideDescription);

  return slide;
}

