import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
// import './styles.scss';
const IMAGE_PARTS = 4;
const AUTOCHANGE_TIME = 40000;
const slides = [
  {
    city: 'Paris',
    country: 'France',
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    city: 'Singapore',
    img: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
  },
  {
    city: 'Prague',
    country: 'Czech Republic',
    img: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    img: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
  },
  {
    city: '12345678910',
    country: 'Russia',
    img: 'https://st2.depositphotos.com/3651191/7990/i/450/depositphotos_79908576-stock-photo-sunrise-on-the-vorderer-gosausee.jpg',
  },
];
export default function CitiesSlider(props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(true);
  const len = slides?.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderReady(true);
      setActiveSlide(activeSlide === len ? 0 : activeSlide + 1);
    }, AUTOCHANGE_TIME);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const changeSlides = (change) => {
    const { length } = slides;
    const prevSlide = activeSlide;
    let activeSlideNew = prevSlide + change;
    if (activeSlideNew < 0) activeSlideNew = length - 1;
    if (activeSlideNew >= length) activeSlideNew = 0;
    setActiveSlide(activeSlideNew);
    setPrevSlide(prevSlide);
  };

  return (
    <div className={clsx('slider', { 's--ready': sliderReady })}>
      <p className='slider__top-heading'>Travelers</p>
      <div className='slider__slides'>
        {slides.map((slide, index) => (
          <div
            className={clsx('slider__slide', {
              's--active': activeSlide === index,
              's--prev': prevSlide === index,
            })}
            key={index}
          >
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">
                {slide.country || slide.city}
              </h3>
              <h2 className="slider__slide-heading">
                {slide.city.split("").map((e, i) => (
                  <span key={i}>{e}</span>
                ))}
              </h2>
              <p className="slider__slide-readmore">read more</p>
            </div>
            <div className='slider__slide-parts'>
              {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                <div className='slider__slide-part' key={i}>
                  <div
                    className='slider__slide-part-inner'
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='slider__control' onClick={() => changeSlides(-1)} />
      <div
        className='slider__control slider__control--right'
        onClick={() => changeSlides(1)}
      />
    </div>
  );
}
