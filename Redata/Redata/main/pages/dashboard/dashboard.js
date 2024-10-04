import '../../global.css';
import '../../components/navbar/navbar.css';
import '../../components/slide/slide.css';
import '../../components/carousel/carousel.css';
import './dashboard.css';

import Navbar from '../../components/navbar/navbar';
import { createCarousel } from '../../components/carousel/carousel';
import { authorizeUser } from "../../utils/authorizeUser";

authorizeUser();

const dashboardHeader = document.querySelector('header');

const navbar = new Navbar(dashboardHeader, 'Moto');

navbar.init();

const newsTray = document.querySelector('.news-tray');

createCarousel(
  newsTray,
  newsMock.map(news => (
    {
      id: news.newsId,
      title: news.newsTitle,
      description: news.content,
    }
  )));

const slides = document.querySelectorAll('.slide');

slides.forEach((slide)=> {
  slide.style.display = 'none';
});

let currentSlide = 0;
slides[currentSlide].style.display = 'flex';

document.getElementById('#next').addEventListener('click', () => {
  slides[currentSlide].style.display = 'none';
  currentSlide = currentSlide === slides.length -1 ? 0 : currentSlide + 1;
  slides[currentSlide].style.display = 'flex';
});

document.getElementById('#prev').addEventListener('click', () => {
  slides[currentSlide].style.display = 'none';
  currentSlide = currentSlide ===  0 ? slides.length - 1 : currentSlide -1;
  slides[currentSlide].style.display = 'flex';
});
