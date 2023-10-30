import Link from "next/link";

const Footer4 = () => {
  return (
    <footer
      className="main-footer footer-four pt-100 rel bgs-cover z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape-three.png)",
      }}
    >
      <div className="container container-1290 pb-40">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="footer-widget footer-about wow fadeInUp delay-0-2s">
              <div className="section-title mb-30">
                <h2>Awards Winning Web Developer</h2>
              </div>
              <div className="social-style-four">
                <li>
                  <Link legacyBehavior href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <a href="#">Career ?</a>
                </li>
                <li>
                  <Link legacyBehavior href="/faqs">
                    <a>FAQs</a>
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-4">
            <div className="footer-widget footer-links wow fadeInUp delay-0-4s">
              <h5 className="footer-title">Follow Me</h5>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two">
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-8">
            <div className="footer-widget newsletter-widget wow fadeInUp delay-0-6s">
              <h5 className="footer-title">Newsletter</h5>
              <form className="footer-newsletter" action="#">
                <input type="email" placeholder="Email Address" required />
                <button type="submit">
                  <i className="fas fa-arrow-right" />
                </button>
              </form>
              <div className="footer-logo pt-15">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/logos/footer-logo.png" alt="Logo" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area text-center pt-25 pb-15 wow fadeInUp delay-0-2s">
        <div className="container">
          <p>
            Copyright @2023,{" "}
            <Link legacyBehavior href="/">
              <a>Ygency</a>
            </Link>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer4;
