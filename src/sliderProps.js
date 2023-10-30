import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper";
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
]);

function Arrow({ className, extraClass, onClick, icon }) {
  return (
    <button className={`${className}  ${extraClass}`} onClick={onClick}>
      <i className={icon}></i>
    </button>
  );
}

export const sliderProps = {
  mainSlider: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
  },
  galleryFiveActive: {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 500,
    rewind: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".work-gallery-dots",
      clickable: true,
    },
    navigation: {
      nextEl: ".work-gallery-next",
      prevEl: ".work-gallery-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  },
  testimonialsThreeActive: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    appendDots: (dots) => {
      return (
        <div>
          <ul>
            {dots.map((item, index) => {
              return <li key={index}>{item.props.children}</li>;
            })}
          </ul>
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  testimonialsTwoActive: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    arrows: true,
    dots: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    prevArrow: <Arrow extraClass={"prev-arrow"} icon={"fal fa-chevron-left"} />,
    nextArrow: (
      <Arrow extraClass={"next-arrow"} icon={"fal fa-chevron-right"} />
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  testimonialsThreeActiveSwiper: {
    loop: true,
    spaceBetween: 30,
    speed: 500,
    rewind: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonial-three-dots .slick-dots",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonial-three-next",
      prevEl: ".testimonial-three-prev",
    },
  },
  testimonialsActiveSwiper: {
    loop: true,
    spaceBetween: 30,
    speed: 500,
    rewind: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonial-dots .slick-dots",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev",
    },
  },
  projectSliderActiveSwiper: {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 500,
    rewind: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".project-next",
      prevEl: ".project-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  },
  workGallerySliderActiveSwiper: {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 500,
    rewind: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".work-gallery-next",
      prevEl: ".work-gallery-prev",
    },
    pagination: {
      el: ".work-gallery-dots .slick-dots",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  },
};
