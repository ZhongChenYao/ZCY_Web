import Home5Slider from "@/src/components/sliders/Home5Slider";
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const index5OnePage = () => {
  return (
    <Layout footer={5} singleMenu>
      <Home5Slider />
      {/* Slider Section End */}
      {/* Client Logo Two start */}
      <div className="client-logo-area pt-120 pb-90 rpt-100 rpb-70">
        <div className="container">
          <div className="client-logo-wrap">
            <Link
              className="client-logo-item wow fadeInUp delay-0-2s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo1.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-3s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo2.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-4s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo3.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-5s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo4.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-6s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo5.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-7s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo6.png"
                alt="Client Logo"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Client Logo Two end */}
      {/* Service Box start */}
      <section className="what-we-offer pb-90 rpb-70">
        <div className="container container-1290">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-20">What We offer</span>
            <h2>Amazing Service For Marketing Agency</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-ux" />
                </div>
                <div className="number">01</div>
                <h4>
                  <Link href="service-details">Search engine optimization</Link>
                </h4>
                <Link href="service-details" className="more">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-engineering" />
                </div>
                <div className="number">02</div>
                <h4>
                  <Link href="service-details">Social media marketing</Link>
                </h4>
                <Link href="service-details" className="more">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-optimization-1" />
                </div>
                <div className="number">03</div>
                <h4>
                  <Link href="service-details">Online marketing strategy</Link>
                </h4>
                <Link href="service-details" className="more">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-three wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-ai" />
                </div>
                <div className="number">04</div>
                <h4>
                  <Link href="service-details">
                    Digital Product Development
                  </Link>
                </h4>
                <Link href="service-details" className="more">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Box end */}
      {/* About Us Area start */}
      <section className="about-area-five py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="about-content-five">
                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>The World Class Digital Marketing Agency</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam reme aperiam eaque
                  quae abillo inventorey veritatis quasi architecto beatae vitae
                  dicta sunt explicabo.
                </p>
                <div className="authors-text mt-45 pt-50">
                  <img src="assets/images/about/author1.jpg" alt="Author" />
                  <img src="assets/images/about/author2.jpg" alt="Author" />
                  <img src="assets/images/about/author3.jpg" alt="Author" />
                  <img src="assets/images/about/author4.jpg" alt="Author" />
                  <img src="assets/images/about/author5.jpg" alt="Author" />
                  <span className="text">
                    We Have <span>5k+ Global</span> Clients Around the World
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-five-images rmt-50 wow fadeInRight delay-0-2s">
                <div className="image-one">
                  <img
                    src="assets/images/about/about-five1.jpg"
                    alt="About Image"
                  />
                </div>
                <div className="about-five-shape">
                  <img
                    src="assets/images/about/about-five-bg.png"
                    alt="About Five Shape"
                  />
                </div>
                <div className="image-two mt-30">
                  <img
                    src="assets/images/about/about-five2.jpg"
                    alt="About Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Work Gallery Area start */}
      <section className="work-gallery-area py-130 rpy-100">
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
            {...sliderProps.galleryFiveActive}
            className="gallery-five-active"
          >
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-five1.jpg"
                    alt="Work Gallery"
                  />
                  <Link href="project-details" className="project-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <Link href="projects" className="category">
                    Marketing, Branding
                  </Link>
                  <h4>
                    <Link href="project-details">Social Media Marketing</Link>
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-five2.jpg"
                    alt="Work Gallery"
                  />
                  <Link href="project-details" className="project-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <Link href="projects" className="category">
                    Marketing, Branding
                  </Link>
                  <h4>
                    <Link href="project-details">Social Media Marketing</Link>
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-five3.jpg"
                    alt="Work Gallery"
                  />
                  <Link href="project-details" className="project-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <Link href="projects" className="category">
                    Marketing, Branding
                  </Link>
                  <h4>
                    <Link href="project-details">Social Media Marketing</Link>
                  </h4>
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-five4.jpg"
                    alt="Work Gallery"
                  />
                  <Link href="project-details" className="project-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <Link href="projects" className="category">
                    Marketing, Branding
                  </Link>
                  <h4>
                    <Link href="project-details">Social Media Marketing</Link>
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-five1.jpg"
                    alt="Work Gallery"
                  />
                  <Link href="project-details" className="project-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <Link href="projects" className="category">
                    Marketing, Branding
                  </Link>
                  <h4>
                    <Link href="project-details">Social Media Marketing</Link>
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-five2.jpg"
                    alt="Work Gallery"
                  />
                  <Link href="project-details" className="project-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <Link href="projects" className="category">
                    Marketing, Branding
                  </Link>
                  <h4>
                    <Link href="project-details">Social Media Marketing</Link>
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-five3.jpg"
                    alt="Work Gallery"
                  />
                  <Link href="project-details" className="project-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <Link href="projects" className="category">
                    Marketing, Branding
                  </Link>
                  <h4>
                    <Link href="project-details">Social Media Marketing</Link>
                  </h4>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-five4.jpg"
                    alt="Work Gallery"
                  />
                  <Link href="project-details" className="project-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <Link href="projects" className="category">
                    Marketing, Branding
                  </Link>
                  <h4>
                    <Link href="project-details">Social Media Marketing</Link>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="work-gallery-controls">
            <button className="work-gallery-prev slick-arrow">
              <i className="far fa-chevron-left" />
            </button>
            <div className="work-gallery-dots slick-dots" />
            <button className="work-gallery-next slick-arrow">
              <i className="far fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>
      {/* Work Gallery Area end */}
      {/* Counter Five start */}
      <div className="counter-section-five pb-80 rpb-50">
        <div className="container container-1290">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="counter-item-three style-two counter-text-wrap wow fadeInRight delay-0-2s">
                <i className="flaticon-software-development" />
                <Counter end={15} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="counter-item-three style-two counter-text-wrap wow fadeInRight delay-0-4s">
                <i className="flaticon-development" />
                <Counter end={63} />
                <span className="counter-title">Project Complete</span>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="counter-item-three style-two counter-text-wrap wow fadeInRight delay-0-6s">
                <i className="flaticon-branding" />
                <Counter end={98} />
                <span className="counter-title">Clients Satisfactions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Five end */}
      {/* Video Area start */}
      <div className="video-area-five rel z-1">
        <div className="container container-1290">
          <div className="video-part style-three wow fadeInUp delay-0-2s">
            <img src="assets/images/video/video-five-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Video Area end */}
      {/* Team Area start */}
      <section className="team-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Team Members</span>
                <h2>Meet Our Professionals Team</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member style-three wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/team/member-three1.jpg"
                    alt="Team Member"
                  />
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h4>Donald M. Woodard</h4>
                  <span>Senior Marketer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member style-three wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/team/member-three2.jpg"
                    alt="Team Member"
                  />
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h4>Justin E. Hamilton</h4>
                  <span>Junior Marketer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member style-three wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/team/member-three3.jpg"
                    alt="Team Member"
                  />
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h4>Michael J. Johnson</h4>
                  <span>Content Marketer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member style-three wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/team/member-three4.jpg"
                    alt="Team Member"
                  />
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h4>Timothy S. Duggan</h4>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* Work Process Area start */}
      <section className="work-process-five-area pt-130 pb-90 rpt-100 rpb-60 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Working Process</span>
                <h2>Simple Step Follow To Complete Work, How It Work</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="work-process-five wow fadeInUp delay-0-2s">
                <div className="icon-title">
                  <i className="flaticon-optimization-1" />
                  <h4>Research</h4>
                </div>
                <div className="content">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium totam reme aperiam eaque
                    quae abillo
                  </p>
                  <Link className="read-more" href="service-details">
                    Learn More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="work-process-five wow fadeInUp delay-0-4s">
                <div className="icon-title">
                  <i className="flaticon-mobile-banking" />
                  <h4>Target &amp; Analysis</h4>
                </div>
                <div className="content">
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quae molestiae consequatur vel illum qui dolorem
                    eum fugiat voluptas
                  </p>
                  <Link className="read-more" href="service-details">
                    Learn More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="work-process-five wow fadeInUp delay-0-6s">
                <div className="icon-title">
                  <i className="flaticon-optimization" />
                  <h4>Got Results</h4>
                </div>
                <div className="content">
                  <p>
                    At vero eos et accusamus et iusto dignissimos ducimus
                    blanditiis praesentium voluptat delenite atque corrupti quos
                    dolores molestias
                  </p>
                  <Link className="read-more" href="service-details">
                    Learn More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Blog Style Five start */}
      <section className="blog-area-five pt-130 rpt-100 pb-100 rpb-70">
        <div className="container container-1290">
          <div className="row align-items-center pb-35">
            <div className="col-lg-8">
              <div className="section-title mb-30 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Blog &amp; News</span>
                <h2>Latest News &amp; Blog</h2>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link
                className="theme-btn style-two mb-30 wow fadeInRight delay-0-2s"
                href="services"
              >
                View More News <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="blog-item style-four wow fadeInUp delay-0-2s">
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">February 18, 2023</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Skills Google Assistant And Amazon Alexa
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
                <div className="image">
                  <img src="assets/images/blog/blog-five1.jpg" alt="Blog" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item style-four wow fadeInUp delay-0-4s">
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">February 18, 2023</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Fine-Grained Handling Level Security
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
                <div className="image">
                  <img src="assets/images/blog/blog-five2.jpg" alt="Blog" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item style-four wow fadeInUp delay-0-2s">
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">February 18, 2023</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Overcoming Challenges Of Content Creation
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
                <div className="image">
                  <img src="assets/images/blog/blog-five3.jpg" alt="Blog" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item style-four wow fadeInUp delay-0-4s">
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">February 18, 2023</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Full Stack GraphQL With Next.js, Neo4j AuraDB
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
                <div className="image">
                  <img src="assets/images/blog/blog-five4.jpg" alt="Blog" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Style Five end */}
      {/* Work With Us Area start */}
      <section className="work-with-us-area rel z-1">
        <div className="container container-1290">
          <div className="row no-gap">
            <div className="col-xl-5 align-self-center">
              <div className="work-with-image wow fadeInUp delay-0-2s">
                <img src="assets/images/about/work-with-us.jpg" alt="About" />
              </div>
            </div>
            <div className="col-xl-7 wow fadeInUp delay-0-4s">
              <div
                className="work-with-content"
                style={{
                  backgroundImage:
                    "url(assets/images/about/work-with-us-bg.jpg)",
                }}
              >
                <div className="section-title mb-10">
                  <span className="sub-title mb-15">Work With Us</span>
                  <h2>Have Any Projects On Minds! Contact Us</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium doloremque laudantium reme aperiam eaque quae
                  abillo
                </p>
                <Link href="contact" className="theme-btn mt-15">
                  Let’s Work Together <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default index5OnePage;
