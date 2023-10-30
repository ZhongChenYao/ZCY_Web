import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const BlogStandard = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"Blog Standard"} />

      {/* Page Banner End */}
      {/* Blog Standard Page Area start */}
      <section className="blog-standard-page py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="blog-item blog-standard wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog-standard1.jpg" alt="Blog" />
                </div>
                <ul className="blog-meta">
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
                <h3>
                  <Link legacyBehavior href="/blog-details">
                    <a>Voice Skills For Google Assistant And Amazon Alexa</a>
                  </Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi beatae vitae dicta
                  sunt explicabo.
                </p>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="blog-item blog-standard blog-blockquote wow fadeInUp delay-0-2s">
                <ul className="blog-meta">
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
                <h3>
                  <Link legacyBehavior href="/blog-details">
                    <a>Online Environments Work Well For Older Users</a>
                  </Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi beatae vitae.
                </p>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="blog-item blog-standard blog-video wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog-standard2.jpg" alt="Blog" />
                  <a
                    href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                    className="mfp-iframe video-play"
                  >
                    <i className="far fa-play" />
                  </a>
                </div>
                <ul className="blog-meta">
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
                <h3>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Inclusive Design And Accessibility: Live Stream With
                      Heydon Pickering
                    </a>
                  </Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi beatae vitae dicta
                  sunt explicabo.
                </p>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="blog-item blog-standard blog-blockquote wow fadeInUp delay-0-2s">
                <ul className="blog-meta">
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
                <h3>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      UX Optimizations For Keyboard-Only And Assistive
                      Technology Users
                    </a>
                  </Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi beatae vitae.
                </p>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="blog-item blog-standard wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog-standard3.jpg" alt="Blog" />
                </div>
                <ul className="blog-meta">
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
                <h3>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Inclusive Design And Accessibility: Live Stream With
                      Heydon Pickering
                    </a>
                  </Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi beatae vitae dicta
                  sunt explicabo.
                </p>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <ul className="pagination mt-30 flex-wrap wow fadeInUp delay-0-2s">
                <li className="page-item disabled">
                  <span className="page-link">
                    <i className="fas fa-angle-left" />
                  </span>
                </li>
                <li className="page-item active">
                  <span className="page-link">
                    01
                    <span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    04
                  </a>
                </li>
                <li className="page-item dot" />
                <li className="page-item dot" />
                <li className="page-item dot" />
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fas fa-angle-right" />
                  </a>
                </li>
              </ul>
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
      {/* Blog Standard Page Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default BlogStandard;
