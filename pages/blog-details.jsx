import Layout from "@/src/layout/Layout";
import Link from "next/link";
const BlogDetails = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      <section
        className="page-banner-area overlay pt-250 pb-50 rel z-1 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/banner/banner-bg-two.jpg)",
        }}
      >
        <div className="container">
          <div className="banner-inner">
            <div className="row">
              <div className="col-xl-8">
                <ul className="blog-meta mb-15 wow fadeInUp delay-0-2s">
                  <li>
                    <i className="fal fa-user-alt" />
                    <a href="#">Richard N. Dixon</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul>
                <h2 className="page-title wow fadeInUp delay-0-3s">
                  Voice Skills For Google Assistant And Amazon Alexa
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Blog Details Page Area start */}
      <section className="blog-details-page py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="blog-single-content">
                <div className="image mb-155 rmb-100 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/blog/blog-details.jpg"
                    alt="Blog Details"
                  />
                </div>
                <p className="big-first-letter">
                  QSed perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam reeaperiam eaque ipsa
                  quae abillo inventore veritatis quasi architecto beatae dicta
                  explicabo. Nemo enimes voluptatem quia voluptas sit aspernatur
                  aut odit aut fugit, sed qui consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore
                </p>
                <p>
                  On the other hand we denounce with righteous indignation and
                  dislike men who are so beguiled demoralized by the charms of
                  pleasure of the moment, so blinded by desire, that they cannot
                  foresee the pain and trouble that are bound to ensue and equal
                  blame belongs to those who fail in their duty through weakness
                </p>
                <div className="row mt-50 pb-20">
                  <div className="col-md-6">
                    <div className="image mb-30 wow fadeInUp delay-0-2s">
                      <img
                        src="assets/images/blog/blog-middle1.jpg"
                        alt="Blog"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image mb-30 wow fadeInUp delay-0-4s">
                      <img
                        src="assets/images/blog/blog-middle2.jpg"
                        alt="Blog"
                      />
                    </div>
                  </div>
                </div>
                <h3>Amazing Solutions For Web Design</h3>
                <p>
                  Must explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you a
                  complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful. Nor again
                  is there anyone who loves or pursues or desires to obtain pain
                  of itself, because it is pain, but because occasionally
                  circumstances
                </p>
                <br />
                <blockquote>
                  Handling Mounting And Unmounting Of Given Navigation Routes In
                  React Native
                  <span className="blockquote-footer">Johnny M. Martin</span>
                </blockquote>{" "}
                <br />
                <p>
                  No one rejects, dislikes, or avoids pleasure itself, because
                  it is pleasure, but because those who do not know how to
                  pursue pleasure rationally encounter consequences that are
                  extremely painful. Nor again is there anyone who loves or
                  pursues or desires to obtain pain of itself because it is
                  painse
                </p>
              </div>
              <div className="tag-share py-30 wow fadeInUp delay-0-2s">
                <div className="item">
                  <div className="tag-coulds">
                    <Link legacyBehavior href="/blog">
                      <a>Design</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>SEO</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Development</a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="admin-comment bgc-lighter wow fadeInUp delay-0-2s">
                <div className="comment-body">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/admin-author.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h5>Richard M. Fudge</h5>
                    <p>
                      We denounce with righteous indignation and dislike men
                      beguiled and demoralized by the charms of pleasure of the
                      moment
                    </p>
                    <div className="social-style-one">
                      <Link legacyBehavior href="/contact">
                        <a>
                          <i className="fab fa-facebook-f" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/contact">
                        <a>
                          <i className="fab fa-twitter" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/contact">
                        <a>
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/contact">
                        <a>
                          <i className="fab fa-instagram" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="next-prev-blog pb-65">
                <div className="item wow fadeInLeft delay-0-2s">
                  <div className="image">
                    <img src="assets/images/blog/blog-prev.jpg" alt="Prev" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link legacyBehavior href="/blog-details">
                        <a>Tips For Conducting Usability Studies</a>
                      </Link>
                    </h6>
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Previous <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="item wow fadeInRight delay-0-2s">
                  <div className="image">
                    <img src="assets/images/blog/blog-next.jpg" alt="Next" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link legacyBehavior href="/blog-details">
                        <a>Building Accessible Menu Systems</a>
                      </Link>
                    </h6>
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Next <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <h3 className="comment-title mb-50">Popular Comments</h3>
              <div className="comments">
                <div className="comment-body wow fadeInUp delay-0-2s">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author1.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <h6>William L. Jackson</h6>
                      </li>
                      <li>
                        <a href="#">February 25, 2023</a>
                      </li>
                    </ul>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihile molestiae consequatur, vel illum
                      qui dolorem eum fugiat voluptas
                    </p>
                    <a className="read-more" href="#">
                      Reply <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="comment-body comment-child wow fadeInUp delay-0-2s">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author2.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <h6>James M. Stovall</h6>
                      </li>
                      <li>
                        <a href="#">February 25, 2023</a>
                      </li>
                    </ul>
                    <p>
                      At vero eos et accusamus et iusto dignissimos ducimus
                      blanditiis sapiente praesentium voluptatum deleniti atque
                      corrupti quos dolores
                    </p>
                    <a className="read-more" href="#">
                      Reply <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="comment-body wow fadeInUp delay-0-2s">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author3.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <h6>Lee M. Moreno</h6>
                      </li>
                      <li>
                        <a href="#">February 25, 2023</a>
                      </li>
                    </ul>
                    <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur
                    </p>
                    <a className="read-more" href="#">
                      Reply <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <form
                id="comment-form"
                className="comment-form bgc-lighter mt-95 wow fadeInUp delay-0-2s"
                name="comment-form"
                action="#"
                method="post"
              >
                <h4>Leave a Reply</h4>
                <p>
                  we denounce with righteous indignation and dislike men who
                  beguiled
                </p>
                <div className="row mt-30">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="blog-email"
                        name="blog-email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="url"
                        id="website"
                        name="website"
                        className="form-control"
                        placeholder="Website"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Message"
                        required={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="theme-btn style-two w-100"
                      >
                        Send a Reply <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="main-sidebar rmt-75">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form action="#" className="default-search-form">
                    <input type="text" placeholder="Search..." required />
                    <button
                      type="submit"
                      className="searchbutton far fa-search"
                    />
                  </form>
                </div>
                <div className="widget widget-author wow fadeInUp delay-0-4s">
                  <img src="assets/images/widget/author.png" alt="Author" />
                  <h5>Nathan S. Nguyen</h5>
                  <p>
                    We denounce with righteous indignation dislike beguiled and
                    demoralized
                  </p>
                  <div className="social-style-one">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
                <div className="widget widget-category wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>Web Design</a>
                      </Link>{" "}
                      <span>(5)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>SEO Optimizations</a>
                      </Link>{" "}
                      <span>(3)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>Mobile Apps Design</a>
                      </Link>{" "}
                      <span>(2)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>Development</a>
                      </Link>{" "}
                      <span>(4)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>Graphics Design</a>
                      </Link>{" "}
                      <span>(6)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog">
                        <a>3D Illustrations</a>
                      </Link>{" "}
                      <span>(2)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Recent News</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img src="assets/images/widget/news1.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="/blog-details">
                            <a>
                              UX Optimizations Keyboard Assistive Technology
                            </a>
                          </Link>
                        </h5>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <a href="#">February 18, 2023</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widget/news2.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="/blog-details">
                            <a>
                              Inclusive Design Accessibility Live Stream
                              Pickering
                            </a>
                          </Link>
                        </h5>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <a href="#">February 18, 2023</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widget/news3.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="/blog-details">
                            <a>
                              Online Environments The We Work Well For Users
                            </a>
                          </Link>
                        </h5>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <a href="#">February 18, 2023</a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tag-coulds">
                    <Link legacyBehavior href="/blog">
                      <a>Design</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>SEO</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Development</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Graphics</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>3D Illustation</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Art</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Product Design</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>Mobile App</a>
                    </Link>
                  </div>
                </div>
                <div className="widget widget-gallery wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Gallery</h4>
                  <div className="gallery">
                    <Link legacyBehavior href="/blog">
                      <a>
                        <img
                          src="assets/images/widget/gallery1.jpg"
                          alt="Gallery"
                        />
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>
                        <img
                          src="assets/images/widget/gallery2.jpg"
                          alt="Gallery"
                        />
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>
                        <img
                          src="assets/images/widget/gallery3.jpg"
                          alt="Gallery"
                        />
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>
                        <img
                          src="assets/images/widget/gallery4.jpg"
                          alt="Gallery"
                        />
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>
                        <img
                          src="assets/images/widget/gallery5.jpg"
                          alt="Gallery"
                        />
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>
                        <img
                          src="assets/images/widget/gallery6.jpg"
                          alt="Gallery"
                        />
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Page Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default BlogDetails;
