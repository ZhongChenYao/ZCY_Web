import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index3 = () => {
  return (
    <Layout header={2} footer={3}>
      {/* Hero Section Start */}
      <section className="hero-area-three pt-250 rpt-115 rel z-1">
        <div className="container rel z-1">
          <div className="row pt-35">
            <div className="col-lg-8">
              <div className="hero-three-content wow fadeInLeft delay-0-2s">
                <h1>
                  Design &amp; <i>creativity</i>
                </h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  emey accusantium doloremque laudantium totam aperiam
                </p>
                <Link legacyBehavior href="/contact">
                  <a className="read-more">
                    Get Stated <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 mx-lg-auto">
              <div className="hero-three-image mt-50 wow fadeInRight delay-0-2s">
                <img src="assets/images/hero/hero-three.jpg" alt="Hero" />
              </div>
            </div>
          </div>
          <div className="hero-three-shape">
            <img src="assets/images/hero/hero-three-shape.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Headline area start */}
      <div className="headline-area pt-110 rpt-85 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee pb-20 style-two">
            <span>
              <span>Creative Design Studio</span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* About Us Area start */}
      <section className="about-area-three pt-120 rpt-80 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title style-two mb-85 rmb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">About Agency</span>
                <h2>
                  We are Awards Winning &amp; Affordable Website Design and
                  Development agency Based on <i>New Work City</i>
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 align-self-center">
              <div className="about-three-image rmb-55 wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/about/about-three.jpg"
                  alt="Circle Text"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 offset-xl-1">
              <div className="about-three-content wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/circle-text.svg"
                  alt="Circle Text"
                />
                <h4>
                  Agency <i>Mission</i>
                </h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sitesy
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis
                  architecto beatae vitae dicta sunt explicabo
                </p>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn style-two mt-35">
                    Learn More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about-three-shapes">
          <span className="year">1990</span>
          <img
            className="shape leaf"
            src="assets/images/about/leaf.png"
            alt="Leaf"
          />
        </div>
      </section>
      {/* About Us Area end */}
      {/* What We Provide start */}
      <section className="what-we-provide-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 wow fadeInUp delay-0-2s">
              <div className="section-title style-two text-center mb-70">
                <span className="sub-title mb-15">What We Provide</span>
                <h2>
                  Quality Service For Growth Your Branding <i>Identity</i>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="we-provide-item wow fadeInUp delay-0-2s">
                <span className="serial-number">01</span>
                <h3>
                  <Link legacyBehavior href="/service-details">
                    <a>
                      Digital Product <span>Design</span>
                    </a>
                  </Link>
                </h3>
                <p>
                  Sed perspiciatis unde omnis natus error sitesy voluptatem
                  accusantium doloremque laudantium totam
                </p>
                <div className="tags">
                  <Link legacyBehavior href="/services">
                    Website
                  </Link>
                  <Link legacyBehavior href="/services">
                    Graphics
                  </Link>
                  <Link legacyBehavior href="/services">
                    Logo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="we-provide-item wow fadeInUp delay-0-4s">
                <span className="serial-number">02</span>
                <h3>
                  <Link legacyBehavior href="/service-details">
                    <a>
                      Graphics Design &amp; <span>Branding</span>
                    </a>
                  </Link>
                </h3>
                <p>
                  Quis autem vel eum repreh enderit eui in ea voluptate velit
                  esse quame nihil molestiae consequature
                </p>
                <div className="tags">
                  <Link legacyBehavior href="/services">
                    Website
                  </Link>
                  <Link legacyBehavior href="/services">
                    Graphics
                  </Link>
                  <Link legacyBehavior href="/services">
                    Logo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="we-provide-item wow fadeInUp delay-0-6s">
                <span className="serial-number">03</span>
                <h3>
                  <Link legacyBehavior href="/service-details">
                    <a>
                      Digital Product <span>Development</span>
                    </a>
                  </Link>
                </h3>
                <p>
                  At vero eos et accusamus et iustoe odioe dignissimos ducimus
                  blanditiis praesentium voluptatum delenite
                </p>
                <div className="tags">
                  <Link legacyBehavior href="/services">
                    Apps
                  </Link>
                  <Link legacyBehavior href="/services">
                    Website
                  </Link>
                  <Link legacyBehavior href="/services">
                    Graphics
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Provide end */}
      {/* Project Slider Area start */}
      <section className="project-slider-section pt-100 rpt-70">
        <div className="container">
          <div className="row justify-content-between align-items-end pb-45 rpb-25">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title style-two mb-25 wow fadeInRight delay-0-2s">
                <span className="sub-title mb-15">Project Gallery</span>
                <h2>
                  Let’s Take A Look Popular Digital Projects <i>Gallery</i>
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="slider-arrow-btns mb-35 text-lg-end wow fadeInLeft delay-0-2s">
                <button className="project-prev slick-arrow">
                  <i className="far fa-arrow-left" />
                </button>
                <button className="project-next slick-arrow">
                  <i className="far fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
          <Swiper
            {...sliderProps.projectSliderActiveSwiper}
            className="project-slider-active"
          >
            <SwiperSlide className="project-item style-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-slider1.jpg"
                  alt="Project Slider"
                />
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">Creative Work</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    <a>
                      Task Management <i>Dashboard</i>
                    </a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="read-more">
                    Project Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-item style-three wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src="assets/images/projects/project-slider2.jpg"
                  alt="Project Slider"
                />
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">Digital Product</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    <a>
                      Mobile Application <i>Development</i>
                    </a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="read-more">
                    Project Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-item style-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-slider1.jpg"
                  alt="Project Slider"
                />
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">Creative Work</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    <a>
                      Task Management <i>Dashboard</i>
                    </a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="read-more">
                    Project Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-item style-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-slider2.jpg"
                  alt="Project Slider"
                />
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">Digital Product</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    <a>
                      Mobile Application <i>Development</i>
                    </a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="read-more">
                    Project Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Project Slider Area end */}
      {/* Headline area start */}
      <div className="headline-area rel z-1 move-top">
        <div className="container-fluid">
          <div className="headline-text marquee pb-20 style-two">
            <span>
              <span>Our Popular Projects</span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Work Process Area start */}
      <section className="work-process-three-area pt-115 rpt-80 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title style-two text-center mb-25 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Working Process</span>
                <h2>
                  Simple Step Follow To Complete Work, <i>How It Work</i>
                </h2>
              </div>
            </div>
          </div>
          <div className="row gap-70">
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-three wow fadeInUp delay-0-2s">
                <span className="step-number">Step 01</span>
                <h4 className="title">Idea Generate</h4>
                <div className="content">
                  <p>Vero eos et accusamus iusto odio disimos</p>
                </div>
                <div className="image">
                  <img
                    src="assets/images/about/work-step-image1.jpg"
                    alt="Work Step Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item bg-shape-none wow fadeInUp delay-0-3s">
                <span className="step-number">Step 02</span>
                <h4 className="title">Plan &amp; Design</h4>
                <div className="content">
                  <p>Quis autems eum iures reprehen voluptate</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-three wow fadeInUp delay-0-4s">
                <span className="step-number">Step 03</span>
                <h4 className="title">Project Testing</h4>
                <div className="content">
                  <p>To take example which ever undertakes</p>
                </div>
                <div className="image">
                  <img
                    src="assets/images/about/work-step-image1.jpg"
                    alt="Work Step Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item bg-shape-none arrow-none wow fadeInUp delay-0-5s">
                <span className="step-number">Step 04</span>
                <h4 className="title">Got Results</h4>
                <div className="content">
                  <p>Avoids paine produces resultant pleasure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Video Area start */}
      <section className="video-area pt-100 rpt-70 rel z-1">
        <div className="container-fluid">
          <div className="row gap-60 align-items-center">
            <div className="col-xl-9">
              <div className="video-part mb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/video/video-bg.jpg" alt="Video" />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
                <span className="bg-text">Videos</span>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="video-content-part mb-55 rel z-3 wow fadeInRight delay-0-2s">
                <div className="section-title mb-45">
                  <h2>
                    We design and develop outstanding Digital Products and
                    digital-<i>first Brands.</i>
                  </h2>
                </div>
                <p>
                  Unde omnis iste natus sitesy voluptat accusantium doloremue
                  laudantiu totey rem aperiam eaque abillo inventore
                </p>
                <Link legacyBehavior href="/about">
                  <a className="read-more mt-25">
                    Learn More Us <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Area end */}
      {/* Statistics Area start */}
      <section className="statistics-area-two pt-75 rpt-45 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title style-two text-center mb-25 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Agency Fun Fact</span>
                <h2>
                  Great Achievement For Our Global <i>Contributions</i>
                </h2>
              </div>
            </div>
          </div>
          <div className="row no-gap justify-content-between">
            <div className="col-xl-3 col-sm-6">
              <div className="counter-item style-two bordered-top counter-text-wrap wow fadeInUp delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={25} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="counter-item style-two bordered-bottom counter-text-wrap wow fadeInUp delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={3} extraClass={"k"} />
                <span className="counter-title">Project’s Complete</span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="counter-item style-two bordered-top counter-text-wrap wow fadeInUp delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={48} />
                <span className="counter-title">Professionals Team Member</span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="counter-item style-two bordered-bottom bordered-right counter-text-wrap wow fadeInUp delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={92} />
                <span className="counter-title">Awards Winning</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}
      {/* Pricing style three start */}
      <section className="pricing-area-three pt-80 rpt-50">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title style-two text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Pricing Package</span>
                <h2>
                  Best Pricing Package For All Web Design <i>Solutions</i>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="pricing-plan-item style-two wow fadeInUp delay-0-2s">
                <div className="icon-title-price">
                  <div className="icon">
                    <i className="flaticon-abstract" />
                  </div>
                  <div className="right-part">
                    <h5>Regular Package</h5>
                    <span className="price-text">
                      <span className="before">$</span>
                      <span className="price">18.3</span>{" "}
                      <span className="after">/per month</span>
                    </span>
                  </div>
                </div>
                <ul className="list-style-one two-column">
                  <li>Website Design</li>
                  <li>Mobile Applications</li>
                  <li>Web Development</li>
                  <li>Quality Assurance</li>
                  <li>SEO Optimizations</li>
                  <li>Customs Services</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-plan-item style-two wow fadeInUp delay-0-4s">
                <span className="badge">
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                  popular package
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                </span>
                <div className="icon-title-price">
                  <div className="icon">
                    <i className="flaticon-liquid" />
                  </div>
                  <div className="right-part">
                    <h5>Premium Package</h5>
                    <span className="price-text">
                      <span className="before">$</span>
                      <span className="price">98.3</span>{" "}
                      <span className="after">/per month</span>
                    </span>
                  </div>
                </div>
                <ul className="list-style-one two-column">
                  <li>Website Design</li>
                  <li>Mobile Applications</li>
                  <li>Web Development</li>
                  <li>Quality Assurance</li>
                  <li>SEO Optimizations</li>
                  <li>Customs Services</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing style three end */}
      {/* Headline area start */}
      <div className="headline-area pt-60 rpt-45 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee pb-20 style-two">
            <span>
              <span>What Customer Say</span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Testimonial Two Area start */}
      <section className="testimonials-two-area pt-70 rpt-50">
        <div className="container">
          <div className="testimonial-two-part">
            <div className="circle-text text-center mb-75">
              <img
                src="assets/images/testimonials/circle-text.png"
                alt="Circle Text"
              />
            </div>
            <Slider
              {...sliderProps.testimonialsTwoActive}
              className="testimonials-two-active"
            >
              <div className="testimonial-item style-two">
                <div className="author-speech">
                  <p>
                    <span className="quote">“</span> On the other hand we
                    denounce with righteous indignation and dislike men beguiled
                    demoralized charms offset pleasure moments line desire that
                    they cannot foresee pain and trouble that boon
                    <span className="quote right-quote">“</span>
                  </p>
                </div>
                <hr />
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img
                        src="assets/images/testimonials/author1.png"
                        alt="Author Image"
                      />
                    </div>
                    <div className="author-info">
                      <h4>James N. Johnson</h4>
                      <span className="designation">CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="ratting style-two">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
              <div className="testimonial-item style-two">
                <div className="author-speech">
                  <p>
                    <span className="quote">“</span> On the other hand we
                    denounce with righteous indignation and dislike men beguiled
                    demoralized charms offset pleasure moments line desire that
                    they cannot foresee pain and trouble that boon{" "}
                    <span className="quote right-quote">“</span>
                  </p>
                </div>
                <hr />
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img
                        src="assets/images/testimonials/author1.png"
                        alt="Author Image"
                      />
                    </div>
                    <div className="author-info">
                      <h4>James N. Johnson</h4>
                      <span className="designation">CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="ratting style-two">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
              <div className="testimonial-item style-two">
                <div className="author-speech">
                  <p>
                    <span className="quote">“</span> On the other hand we
                    denounce with righteous indignation and dislike men beguiled
                    demoralized charms offset pleasure moments line desire that
                    they cannot foresee pain and trouble that boon{" "}
                    <span className="quote right-quote">“</span>
                  </p>
                </div>
                <hr />
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img
                        src="assets/images/testimonials/author1.png"
                        alt="Author Image"
                      />
                    </div>
                    <div className="author-info">
                      <h4>James N. Johnson</h4>
                      <span className="designation">CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="ratting style-two">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
              <div className="testimonial-item style-two">
                <div className="author-speech">
                  <p>
                    <span className="quote">“</span> On the other hand we
                    denounce with righteous indignation and dislike men beguiled
                    demoralized charms offset pleasure moments line desire that
                    they cannot foresee pain and trouble that boon{" "}
                    <span className="quote right-quote">“</span>
                  </p>
                </div>
                <hr />
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img
                        src="assets/images/testimonials/author1.png"
                        alt="Author Image"
                      />
                    </div>
                    <div className="author-info">
                      <h4>James N. Johnson</h4>
                      <span className="designation">CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="ratting style-two">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
            </Slider>
            <div className="testimonial-controls justify-content-center mt-100 rmt-50">
              <div className="testimonial-two-dots" />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Two Area end */}
      {/* Blog Area start */}
      <section className="blog-area-two pt-130 rpt-100">
        <div className="container">
          <div className="row justify-content-between align-items-end pb-40 rpb-25">
            <div className="col-xl-7 col-lg-8">
              <div className="section-title style-two mb-25 wow fadeInRight delay-0-2s">
                <span className="sub-title mb-15">Blog &amp; News</span>
                <h2>
                  Read Our Latest News &amp; Blog Get Every <i>Updates</i>
                </h2>
              </div>
            </div>
            <div className="col-lg-4 mb-35 text-lg-end wow fadeInLeft delay-0-2s">
              <Link legacyBehavior href="/blog">
                <a className="theme-btn">
                  View More News <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-2s">
                <div className="tags">
                  <Link legacyBehavior href="/blog">
                    <a>Website</a>
                  </Link>
                  <Link legacyBehavior href="/blog">
                    <a>Graphics</a>
                  </Link>
                  <Link legacyBehavior href="/blog">
                    <a>Logo</a>
                  </Link>
                  <Link legacyBehavior href="/blog-details">
                    <a className="more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img src="assets/images/blog/blog10.jpg" alt="Blog" />
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>Voice Skills For Google Assistant And Amazon Alexa</a>
                  </Link>
                </h4>
                <hr />
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-4s">
                <div className="tags">
                  <Link legacyBehavior href="/blog">
                    <a>Website</a>
                  </Link>
                  <Link legacyBehavior href="/blog">
                    <a>Graphics</a>
                  </Link>
                  <Link legacyBehavior href="/blog">
                    <a>Logo</a>
                  </Link>
                  <Link legacyBehavior href="/blog-details">
                    <a className="more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img src="assets/images/blog/blog11.jpg" alt="Blog" />
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Inclusive Design And Accessibility Live Stream Heydon
                      Pickering
                    </a>
                  </Link>
                </h4>
                <hr />
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-6s">
                <div className="tags">
                  <Link legacyBehavior href="/blog">
                    <a>Website</a>
                  </Link>
                  <Link legacyBehavior href="/blog">
                    <a>Graphics</a>
                  </Link>
                  <Link legacyBehavior href="/blog">
                    <a>Logo</a>
                  </Link>
                  <Link legacyBehavior href="/blog-details">
                    <a className="more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img src="assets/images/blog/blog12.jpg" alt="Blog" />
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Creating Online Environments The Work Well For Older Users
                    </a>
                  </Link>
                </h4>
                <hr />
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Area end */}
      {/* Work With Area start */}
      <section className="work-with-area pt-70 rpt-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title style-two text-center mb-25 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work With Us</span>
                <h2>
                  Have Any Projects On Minds! Feel Free to <i>Contact Us</i>
                </h2>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn style-two mt-35">
                    Let’s Work Together <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work With Area end */}
      {/* Headline area start */}
      <div className="headline-area rel z-1 move-top pb-120 rpb-80">
        <div className="container-fluid">
          <div className="headline-text marquee pb-20 style-two">
            <span>
              <span>Let’s Work Together</span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
    </Layout>
  );
};
export default Index3;
