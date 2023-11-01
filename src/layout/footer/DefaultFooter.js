import Link from "next/link";

const DefaultFooter = () => {
  return (
    <footer
      className="main-footer rel z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape.png)",
      }}
    >
      <div className="container container-1290">
        {/*<div className="footer-top pt-80 pb-60">*/}
        {/*  <div className="row align-items-center">*/}
        {/*    <div className="col-lg-4">*/}
        {/*      <div className="footer-logo mb-20 wow fadeInRight delay-0-2s animated">*/}
        {/*        <Link legacyBehavior href="/">*/}
        {/*          <a>*/}
        {/*            <img src="assets/images/logos/footer-logo.png" alt="Logo" />*/}
        {/*          </a>*/}
        {/*        </Link>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="col-lg-8 text-lg-end">*/}
        {/*      <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s animated">*/}
        {/*        <a href="#">*/}
        {/*          <i className="fab fa-facebook-f" /> <span>Facebook</span>*/}
        {/*        </a>*/}
        {/*        <a href="#">*/}
        {/*          <i className="fab fa-twitter" /> <span>Twitter</span>*/}
        {/*        </a>*/}
        {/*        <a href="#">*/}
        {/*          <i className="fab fa-dribbble" /> <span>Dribbble</span>*/}
        {/*        </a>*/}
        {/*        <a href="#">*/}
        {/*          <i className="fab fa-behance" /> <span>Behance</span>*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="row">
          <div className="col-lg-8">
            <div className="footer-left-content pt-80">
              <div className="lets-work mb-50 wow fadeInUp delay-0-2s animated">
                {/*<img*/}
                {/*  src="assets/images/footer/lets-work.png"*/}
                {/*  alt="Let's Work Man"*/}
                {/*/>*/}
                <span>此网站为项目开源， 个人能力有限， 欢迎一起运营。</span>
              </div>
              <div className="footer-contact-info wow fadeInUp delay-0-3s animated">
                <a
                  className="theme-btn style-three"
                  href="zcy_git_project@163.com"
                >
                  zcy_git_project@163.com<i className="far fa-arrow-right" />
                </a>
                <a
                  className="theme-btn style-three phone-number"
                  href="https://github.com/ZhongChenYao/ZCY_Web"
                >
                  GitHub<i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-right-content">
              <h4 className="footer-title wow fadeInUp delay-0-2s animated">
                私货部分
              </h4>
              <div className="footer-widget widget_nav_menu">
                <h5>始于郑梓妍， 终于钟晨瑶。</h5>
                <h5>理智看待， 不影响双方的生活。</h5>
                {/*<ul className="list-style-two wow fadeInUp delay-0-3s animated">*/}
                {/*  <li>*/}
                {/*    <Link legacyBehavior href="about">*/}
                {/*      Home*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link legacyBehavior href="services">*/}
                {/*      Popular Services*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link legacyBehavior href="team">*/}
                {/*      Team Member*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link legacyBehavior href="blog">*/}
                {/*      Latest News*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link legacyBehavior href="contact">*/}
                {/*      Contact Us?*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*</ul>*/}
                {/*<ul className="list-style-two wow fadeInUp delay-0-4s animated">*/}
                {/*  <li>*/}
                {/*    <Link legacyBehavior href="index">*/}
                {/*      UI/UX Design*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link legacyBehavior href="index2">*/}
                {/*      Development*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link legacyBehavior href="index3">*/}
                {/*      Marketing*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link legacyBehavior href="contact">*/}
                {/*      Need a Career*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link legacyBehavior href="faqs">*/}
                {/*      Faqs ?*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*</ul>*/}
              </div>
            </div>
          </div>
        </div>
        {/*<div className="footer-bottom">*/}
        {/*  <div className="row align-items-center">*/}
        {/*    <div className="col-xl-8 col-lg-6">*/}
        {/*      <div className="footer-bottom-menu pt-40 pb-35 rpb-0 wow fadeInRight delay-0-2s animated">*/}
        {/*        <ul>*/}
        {/*          <li>*/}
        {/*            <Link legacyBehavior href="/about">*/}
        {/*              <a>About</a>*/}
        {/*            </Link>*/}
        {/*          </li>*/}
        {/*          <li>*/}
        {/*            <Link legacyBehavior href="services">*/}
        {/*              Services*/}
        {/*            </Link>*/}
        {/*          </li>*/}
        {/*          <li>*/}
        {/*            <Link legacyBehavior href="/faqs">*/}
        {/*              <a>FAQs</a>*/}
        {/*            </Link>*/}
        {/*          </li>*/}
        {/*          <li>*/}
        {/*            <Link legacyBehavior href="services">*/}
        {/*              How IT Works*/}
        {/*            </Link>*/}
        {/*          </li>*/}
        {/*        </ul>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="col-xl-4 col-lg-6">*/}
        {/*      <div className="copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s animated">*/}
        {/*        <p>*/}
        {/*          Copyright @2023,{" "}*/}
        {/*          <Link legacyBehavior href="/">*/}
        {/*            <a>Ygency</a>*/}
        {/*          </Link>{" "}*/}
        {/*          All Rights Reserved*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </footer>
  );
};
export default DefaultFooter;
