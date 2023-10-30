import ContactForm1 from "@/src/components/ContactForm1";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { Accordion, Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index4 = () => {
  const accordionData = [
    { id: 1, title: "Will you provide website layout about design ?" },
    { id: 2, title: "How much does cost to design website ?" },
    { id: 3, title: "How many revisions can i make the design ?" },
    { id: 4, title: "Will you provide website layout about design ?" },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout header={2} footer={4}>
      {/* Hero Section Start */}
      <section className="hero-area-four pt-250 rpt-120 pb-220 rpb-100 rel z-1">
        <div className="container container-1620 rel z-1">
          <div className="hero-four-content rel mt-50 text-center">
            <h1>
              <span className="marquee-wrap">
                <span className="marquee-inner one">
                  <span>Hello, I’m Michael P.</span> Turner
                </span>
                <span className="marquee-inner one">
                  <span>Hello, I’m Michael P.</span> Turner
                </span>
                <span className="marquee-inner one">
                  <span>Hello, I’m Michael P.</span> Turner
                </span>
              </span>
              <span className="marquee-wrap">
                <span className="marquee-inner two">
                  Senior <span> Web Developer.</span>
                </span>
                <span className="marquee-inner two">
                  Senior <span> Web Developer.</span>
                </span>
                <span className="marquee-inner two">
                  Senior <span> Web Developer.</span>
                </span>
              </span>
              <span className="marquee-wrap">
                <span className="marquee-inner three">
                  <span>8+ Years </span> Of Experience
                </span>
                <span className="marquee-inner three">
                  <span>8+ Years </span> Of Experience
                </span>
                <span className="marquee-inner three">
                  <span>8+ Years </span> Of Experience
                </span>
              </span>
            </h1>
            <div className="rotated-man-wrap">
              <div className="rotated-man">
                <img src="assets/images/hero/hero-man.png" alt="Man" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <img
            className="shape one"
            src="assets/images/hero/hero-shape1.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/hero/hero-shape2.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Us Area start */}
      <section className="about-area rel z-1">
        <div className="container-fluid">
          <div className="about-four-wrap py-130 rpy-100">
            <div className="container container-1290">
              <div className="row gap-70 align-items-center">
                <div className="col-lg-6">
                  <div className="about-four-content rmb-55 wow fadeInUp delay-0-2s">
                    <div className="section-title mb-35">
                      <span className="sub-title mb-15">About Me</span>
                      <h2>Professional &amp; Experience Web Developer</h2>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae abillo inventore veritatis quasi
                      architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <div className="list-style-three pt-25 pb-20">
                      <li>Development</li>
                      <li>Custom Support</li>
                      <li>Mobile Apps</li>
                      <li>Product Development</li>
                    </div>
                    <div className="about-btns">
                      <Link legacyBehavior href="/about">
                        <a className="theme-btn style-two mt-15 me-3">
                          Learn More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/projects">
                        <a className="theme-btn mt-15">
                          Explore Projects <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-four-image wow fadeInUp delay-0-4s">
                    <img src="assets/images/about/about-four.jpg" alt="About" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Service Box start */}
      <section className="service-section pt-130 rpt-100 pb-100 rpb-70">
        <div className="container container-1290">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-ux" />
                </div>
                <h4>
                  <Link legacyBehavior href="/service-details">
                    <a>Professional &amp; Experience</a>
                  </Link>
                </h4>
                <p>
                  Ut enim ad minima veniam exercitati ullam corporis suscipit
                  laboriosam nisute
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item style-three wow fadeInDown delay-0-2s">
                <div className="icon">
                  <i className="flaticon-optimization-1" />
                </div>
                <h4>
                  <Link legacyBehavior href="/service-details">
                    <a>Dedication &amp; Modern Code</a>
                  </Link>
                </h4>
                <p>
                  To take a trivial example which undertakes laborious physical
                  exercise obtain
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-ai" />
                </div>
                <h4>
                  <Link legacyBehavior href="/service-details">
                    <a>Creative &amp; Intelligent</a>
                  </Link>
                </h4>
                <p>
                  At vero eos accusaus dignisimos ducimuse qui blanditiis
                  praesentium voluptatue
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Box end */}
      {/* My Skills Area start */}
      <section className="my-skills-area rel z-1">
        <div className="container container-1290">
          <div className="row gap-100 justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="my-skill-content rmb-55 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15">
                    My Skills &amp; Experience
                  </span>
                  <h2>I’m Certified &amp; Skills Developer</h2>
                </div>
                <p>
                  To take a trivial example which ever undertakes laborious
                  physical exercise, except to obtain some advantage from it?
                  But who has any right to find fault man chooses
                </p>
                <Link legacyBehavior href="/about">
                  <a className="read-more mt-15">
                    Learn More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="my-skill-images wow fadeInRight delay-0-2s">
                <div className="skill-item">
                  <img src="assets/images/skills/skill9.png" alt="Skill Icon" />
                  <span className="text">Sass</span>
                </div>
                <div className="skill-item">
                  <img src="assets/images/skills/skill2.png" alt="Skill Icon" />
                  <span className="text">HTML</span>
                </div>
                <div className="skill-item">
                  <img src="assets/images/skills/skill4.png" alt="Skill Icon" />
                  <span className="text">javascript</span>
                </div>
                <div className="skill-item">
                  <img
                    src="assets/images/skills/skill11.png"
                    alt="Skill Icon"
                  />
                  <span className="text">Shopify</span>
                </div>
                <div className="skill-item">
                  <img
                    src="assets/images/skills/skill10.png"
                    alt="Skill Icon"
                  />
                  <span className="text">Angular</span>
                </div>
                <div className="skill-item">
                  <img src="assets/images/skills/skill8.png" alt="Skill Icon" />
                  <span className="text">node.js</span>
                </div>
                <div className="skill-item">
                  <img src="assets/images/skills/skill3.png" alt="Skill Icon" />
                  <span className="text">CSS</span>
                </div>
                <div className="skill-item">
                  <img src="assets/images/skills/skill7.png" alt="Skill Icon" />
                  <span className="text">php</span>
                </div>
                <div className="skill-item">
                  <img src="assets/images/skills/skill1.png" alt="Skill Icon" />
                  <span className="text">Bootstrap</span>
                </div>
                <div className="skill-item">
                  <img src="assets/images/skills/skill6.png" alt="Skill Icon" />
                  <span className="text">WordPress</span>
                </div>
                <div className="skill-item">
                  <img
                    src="assets/images/skills/skill12.png"
                    alt="Skill Icon"
                  />
                  <span className="text">Elementor</span>
                </div>
                <div className="skill-item">
                  <img
                    src="assets/images/skills/skill13.png"
                    alt="Skill Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* My Skills Area end */}
      {/* Counter Three start */}
      <section className="counter-section-three pt-70 pb-20 my-130 rmy-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="counter-item-three counter-text-wrap wow fadeInRight delay-0-2s">
                <i className="flaticon-software-development" />
                <Counter end={15} extraClass={"plus"} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="counter-item-three counter-text-wrap wow fadeInRight delay-0-4s">
                <i className="flaticon-development" />
                <Counter end={63} extraClass={"plus"} />
                <span className="counter-title">Project Complete</span>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="counter-item-three counter-text-wrap wow fadeInRight delay-0-6s">
                <i className="flaticon-star-symbol" />
                <Counter end={98} extraClass={"percent"} />
                <span className="counter-title">Clients Satisfactions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter Three end */}
      {/* Work Gallery Area start */}
      <section className="work-gallery-area pb-130 rpb-100">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Recent Works Gallery</span>
                <h2>We’ve Complete 1532+ Projects Take A Look Our Work</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <Swiper
            {...sliderProps.workGallerySliderActiveSwiper}
            className="work-gallery-active"
          >
            <SwiperSlide className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/work-gallery1.jpg"
                  alt="Work Gallery"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">Project Development</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    Task Management Dashboard
                  </Link>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-item style-four wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src="assets/images/projects/work-gallery2.jpg"
                  alt="Work Gallery"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">UI/UX Design</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    Website Development
                  </Link>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-item style-four wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/projects/work-gallery3.jpg"
                  alt="Work Gallery"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">Product Design</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    Mobile Application Development
                  </Link>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/work-gallery1.jpg"
                  alt="Work Gallery"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">Project Development</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    Task Management Dashboard
                  </Link>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/work-gallery2.jpg"
                  alt="Work Gallery"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">UI/UX Design</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    Website Development
                  </Link>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/work-gallery3.jpg"
                  alt="Work Gallery"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <Link legacyBehavior href="/projects">
                  <a className="category">Product Design</a>
                </Link>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    Mobile Application Development
                  </Link>
                </h4>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="work-gallery-controls">
            <button className="work-gallery-prev slick-arrow">
              <i className="far fa-chevron-left" />
            </button>
            <div className="work-gallery-dots">
              <div className="slick-dots"></div>
            </div>
            <button className="work-gallery-next slick-arrow">
              <i className="far fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>
      {/* Work Gallery Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary py-40 rpy-25">
        <div className="container-fluid">
          <div className="headline-wrap-two">
            <span className="marquee-wrap">
              <span className="marquee-inner left">
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Sass</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>HTML</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>CSS</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>node.js</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>php</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>WordPress</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>javascript</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Angular</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Shopify</b>
                </span>
              </span>
              <span className="marquee-inner left">
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Sass</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>HTML</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>CSS</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>node.js</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>php</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>WordPress</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>javascript</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Angular</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Shopify</b>
                </span>
              </span>
              <span className="marquee-inner left">
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Sass</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>HTML</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>CSS</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>node.js</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>php</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>WordPress</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>javascript</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Angular</b>
                </span>
                <span className="marquee-item">
                  <i className="fas fa-star-of-life" />
                  <b>Shopify</b>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Our Awards Area start */}
      <section className="our-awards-area py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row align-items-end pb-35">
            <div className="col-lg-8">
              <div className="section-title mb-30 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">My Achievement</span>
                <h2>Lot’s Of Awards &amp; Trophy</h2>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link legacyBehavior href="/services">
                <a className="read-more mb-30 wow fadeInRight delay-0-2s">
                  View More Awards <i className="fas fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <Tab.Container defaultActiveKey={"awards-tab-one"}>
              <div className="col-lg-5">
                <div className="awards-tab-content rmb-75 rel wow fadeInLeft delay-0-2s">
                  <Tab.Content className="tab-content">
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="awards-tab-one"
                    >
                      <div className="award-image">
                        <img src="assets/images/about/award.png" alt="Awards" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="awards-tab-two"
                    >
                      <div className="award-image">
                        <img src="assets/images/about/award.png" alt="Awards" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="awards-tab-three"
                    >
                      <div className="award-image">
                        <img src="assets/images/about/award.png" alt="Awards" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="awards-tab-four"
                    >
                      <div className="award-image">
                        <img src="assets/images/about/award.png" alt="Awards" />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
              <div className="col-lg-6">
                <Nav className="awards-tabs nav flex-column nav-pills wow fadeInRight delay-0-2s">
                  <Nav.Link
                    as="button"
                    className="nav-link"
                    eventKey="awards-tab-one"
                  >
                    <span className="left">
                      <span className="h3">Best WordPress Developer</span>
                      <span className="award-type">Awwwards</span>
                    </span>
                    <a className="details-btn" href="#">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Nav.Link>
                  <Nav.Link
                    as="button"
                    className="nav-link"
                    eventKey="awards-tab-two"
                  >
                    <span className="left">
                      <span className="h3">Developer Of The Day</span>
                      <span className="award-type">Envato Market</span>
                    </span>
                    <a className="details-btn" href="#">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Nav.Link>
                  <Nav.Link
                    as="button"
                    className="nav-link"
                    eventKey="awards-tab-three"
                  >
                    <span className="left">
                      <span className="h3">Website Developer</span>
                      <span className="award-type">Freelance Market</span>
                    </span>
                    <a className="details-btn" href="#">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Nav.Link>
                  <Nav.Link
                    as="button"
                    className="nav-link"
                    eventKey="awards-tab-four"
                  >
                    <span className="left">
                      <span className="h3">Intelligence Developer</span>
                      <span className="award-type">Freelance Market</span>
                    </span>
                    <a className="details-btn" href="#">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Nav.Link>
                </Nav>
              </div>
            </Tab.Container>
          </div>
        </div>
      </section>
      {/* Our Awards Area end */}
      {/* FAQ's Area start */}
      <section className="faq-area pt-20 rpt-0 pb-130 rpb-120 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="faq-content-part rmb-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Asked Questions</span>
                  <h2>Frequently Asked Question</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {accordionData.map((data, i) => (
                    <YgencyAccordion
                      title={data.title}
                      key={data.id}
                      event={`collapse${i}`}
                      onClick={() =>
                        setActive(
                          active == `collapse${i}` ? "" : `collapse${i}`
                        )
                      }
                      active={active}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="faq-four-iamge wow fadeInLeft delay-0-2s">
                <img src="assets/images/faqs/faq-four.jpg" alt="FAQs" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ's Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section-five">
        <div className="container-fluid px-0">
          <div className="row no-gap">
            <div className="col-xl-6 wow fadeInRight delay-0-2s">
              <div
                className="testimonial-five-image"
                style={{
                  backgroundImage:
                    "url(assets/images/testimonials/testimonials-five.jpg)",
                }}
              />
            </div>
            <div className="col-xl-6 align-self-center">
              <div className="testimonial-five-right p-100 py-130 rpy-100 wow fadeInLeft delay-0-2s">
                <div className="circle-logo-text w-50 mb-65 rmb-35">
                  <img
                    src="assets/images/about/circle-text.svg"
                    alt="Circle Text"
                  />
                </div>
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand
                        denounce with righteous indignation and dislike men
                        beguiled demoralized charms pleasure moments line desire
                        that they foresee pain and trouble that boon{" "}
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
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand
                        denounce with righteous indignation and dislike men
                        beguiled demoralized charms pleasure moments line desire
                        that they foresee pain and trouble that boon{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
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
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand
                        denounce with righteous indignation and dislike men
                        beguiled demoralized charms pleasure moments line desire
                        that they foresee pain and trouble that boon{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
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
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand
                        denounce with righteous indignation and dislike men
                        beguiled demoralized charms pleasure moments line desire
                        that they foresee pain and trouble that boon{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
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
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls mt-105 rmt-50">
                  <div className="testimonial-dots mx-0">
                    <div className="slick-dots"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Area end */}
      {/* CTA Area start */}
      <div className="cta-area bgc-primary pt-30 pb-15 rel z-1">
        <div className="container">
          <div className="cta-wrap">
            <h4>I'm available for freelance work</h4>
            <Link legacyBehavior href="/contact">
              <a className="theme-btn">
                Hire Me <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
        <div className="cta-shapes">
          <img
            className="shape one"
            src="assets/images/shapes/circle.png"
            alt="Circle"
          />
          <img
            className="shape two"
            src="assets/images/shapes/close.png"
            alt="Close"
          />
          <img
            className="shape three"
            src="assets/images/shapes/weve-lines.png"
            alt="Weve Line"
          />
          <img
            className="shape four"
            src="assets/images/shapes/circle.png"
            alt="Circle"
          />
          <img
            className="shape five"
            src="assets/images/shapes/close.png"
            alt="Close"
          />
          <img
            className="shape six"
            src="assets/images/shapes/weve-lines.png"
            alt="Weve Line"
          />
        </div>
      </div>
      {/* CTA Area end */}
      {/* Blog Style Four start */}
      <section className="blog-area-four pt-130 rpt-100 pb-100 rpb-70">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Blog &amp; News</span>
                <h2>Read Our Latest News &amp; Blog Get Every Updates</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog-four1.jpg" alt="Blog" />
                  <Link legacyBehavior href="/blog">
                    <a className="category">Design</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">February 18, 2023</a>
                    </li>
                  </ul>
                  <h5>
                    <Link legacyBehavior href="/blog-details">
                      <a>Voice Skills Google Assistant And Amazon Alexa</a>
                    </Link>
                  </h5>
                  <div className="author">
                    <img
                      src="assets/images/blog/blog-author1.jpg"
                      alt="Author"
                    />
                    <span className="name">Bernard R. Kay</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-three wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog-four2.jpg" alt="Blog" />
                  <Link legacyBehavior href="/blog">
                    <a className="category">Software</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">February 18, 2023</a>
                    </li>
                  </ul>
                  <h5>
                    <Link legacyBehavior href="/blog-details">
                      Inclusive Design Accese Live Stream Heydon Pickering
                    </Link>
                  </h5>
                  <div className="author">
                    <img
                      src="assets/images/blog/blog-author2.jpg"
                      alt="Author"
                    />
                    <span className="name">Bernard R. Kay</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-three wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/blog/blog-four3.jpg" alt="Blog" />
                  <Link legacyBehavior href="/blog">
                    <a className="category">Product</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">February 18, 2023</a>
                    </li>
                  </ul>
                  <h5>
                    <Link legacyBehavior href="/blog-details">
                      Creating Online The Works Well For Older Users
                    </Link>
                  </h5>
                  <div className="author">
                    <img
                      src="assets/images/blog/blog-author3.jpg"
                      alt="Author"
                    />
                    <span className="name">Bernard R. Kay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Style Four end */}
      {/* Drop Me Area start */}
      <section className="drop-me-area">
        <div className="container container-1290">
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="drop-me-form-part rmb-50 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-20">Drop Me Line</span>
                  <h2>Let’s Start Your Next Dream Project</h2>
                </div>
                <ContactForm1 />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="drop-me-image-part wow fadeInRight delay-0-2s position-relative">
                <div className="rotated-man text-center">
                  <img src="assets/images/hero/drop-me.png" alt="Man" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Drop Me Area end */}
      {/* Headline area start */}
      <div className="headline-area rel z-1 move-top-two">
        <div className="container-fluid">
          <div className="headline-text style-three marquee pb-20">
            <span>
              <span>Get Start Your Projects</span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Client Logo Two start */}
      <section className="client-logo-area py-100 rpy-70">
        <div className="container">
          <div className="client-logo-wrap">
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/client-logos/client-logo1.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-3s">
                <img
                  src="assets/images/client-logos/client-logo2.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/client-logos/client-logo3.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-5s">
                <img
                  src="assets/images/client-logos/client-logo4.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-6s">
                <img
                  src="assets/images/client-logos/client-logo5.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-7s">
                <img
                  src="assets/images/client-logos/client-logo6.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index4;
