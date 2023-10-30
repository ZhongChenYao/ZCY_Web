import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Pricing = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"Pricing Plan"} />
      {/* Page Banner End */}
      {/* Why Choose start */}
      <section className="why-choose-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="row">
                <div className="col-xl-11">
                  <div className="why-choose-left-content mb-30 rmb-55 wow fadeInLeft delay-0-2s">
                    <div className="section-title mb-50">
                      <span className="sub-title mb-15">Why Choose Us</span>
                      <h2>Benefit Of Working With Us</h2>
                    </div>
                    <h5>Company Mission</h5>
                    <p>
                      On the other hand we denounce with righteous indignation
                      dislike men who are so beguiled and demoralized
                    </p>
                    <br />
                    <h5>Company Vision</h5>
                    <p>
                      Desire that they cannot foresee the pain and trouble that
                      are bound to ensue; and equal blame belongs
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
            <div className="col-xl-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="service-item wow fadeInRight delay-0-2s">
                    <div className="icon">
                      <i className="fal fa-bezier-curve" />
                    </div>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Ontime meeting <br />
                          with experts
                        </a>
                      </Link>
                    </h5>
                    <p>
                      We denounce with righteous indignatio dislike men who are
                      beguiled and demoralized
                    </p>
                  </div>
                  <div className="service-item wow fadeInRight delay-0-3s">
                    <div className="icon">
                      <i className="fal fa-cogs" />
                    </div>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Quality check by <br />
                          expert members
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Quis autem veleum voluptate velit quam mole conse quatur
                      veillum qui dolorem eum
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service-item mt-30 wow fadeInRight delay-0-4s">
                    <div className="icon">
                      <i className="fal fa-chart-pie" />
                    </div>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Detailed report <br />
                          submission
                        </a>
                      </Link>
                    </h5>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimo ducimus
                      qui blanditiis praesentium
                    </p>
                  </div>
                  <div className="service-item wow fadeInRight delay-0-5s">
                    <div className="icon">
                      <i className="fal fa-shield-cross" />
                    </div>
                    <h5>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Filtering projects <br />
                          for mass tax
                        </a>
                      </Link>
                    </h5>
                    <p>
                      To take trivial example which ever under laborious
                      physical exercise to advantage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose end */}
      {/* Pricing style three start */}
      <section
        className="pricing-area-three pb-85 rpb-55"
        style={{
          backgroundImage:
            "url(assets/images/background/pricing-bg-dot-shape.png)",
        }}
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Pricing Package</span>
                <h2>Best Pricing Package For All Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-abstract" />
                </div>
                <h5>Regular Package</h5>
                <span className="price-text">
                  <span className="before">$</span>
                  <span className="price">18.3</span>{" "}
                  <span className="after">/per month</span>
                </span>
                <ul className="list-style-one">
                  <li>Landing Page Design</li>
                  <li>Web Development</li>
                  <li>SEO Optimizations</li>
                  <li>Mobile Applications Design</li>
                  <li>Quality Assurance</li>
                  <li>Customs Services</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-4s">
                <span className="badge">
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                  popular package
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                </span>
                <div className="icon">
                  <i className="flaticon-liquid" />
                </div>
                <h5>Silver Package</h5>
                <span className="price-text">
                  <span className="before">$</span>
                  <span className="price">49.3</span>{" "}
                  <span className="after">/per month</span>
                </span>
                <ul className="list-style-one">
                  <li>Landing Page Design</li>
                  <li>Web Development</li>
                  <li>SEO Optimizations</li>
                  <li>Mobile Applications Design</li>
                  <li>Quality Assurance</li>
                  <li>Customs Services</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-petals" />
                </div>
                <h5>Golden Package</h5>
                <span className="price-text">
                  <span className="before">$</span>
                  <span className="price">98.3</span>{" "}
                  <span className="after">/per month</span>
                </span>
                <ul className="list-style-one">
                  <li>Landing Page Design</li>
                  <li>Web Development</li>
                  <li>SEO Optimizations</li>
                  <li>Mobile Applications Design</li>
                  <li>Quality Assurance</li>
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
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Pricing start */}
      <section className="pricing-plan-area pt-130 rpt-100 pb-90 rpb-60 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-75 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Pricing Package</span>
                <h2>Best Pricing Package For All Web Design Solutions</h2>
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
      {/* Pricing end */}
      {/* Work With Area start */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work With Us</span>
                <h2>Have Any Projects On Minds! Feel Free to Contact Us</h2>
                <Link legacyBehavior href="/contact">
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Explore more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity">Let’s Work Together</span>
      </section>
      {/* Work With Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Pricing;
