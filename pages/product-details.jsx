import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
const ProductDetails = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"Single Product"} />
      {/* Page Banner End */}
      {/* Product Details Start */}
      <section className="product-details pt-130 rpt-100">
        <div className="container container-1290">
          <div className="row align-items-center gap-70">
            <div className="col-lg-6">
              <Tab.Container defaultActiveKey={"preview1"}>
                <div className="product-details-images rmb-55 wow fadeInLeft delay-0-2s">
                  <Tab.Content className="tab-content preview-images">
                    <Tab.Pane
                      className="tab-pane fade preview-item"
                      eventKey="preview1"
                    >
                      <img
                        src="assets/images/shop/preview1.jpg"
                        alt="Perview"
                      />
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade preview-item"
                      eventKey="preview2"
                    >
                      <img
                        src="assets/images/shop/preview1.jpg"
                        alt="Perview"
                      />
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade preview-item"
                      eventKey="preview3"
                    >
                      <img
                        src="assets/images/shop/preview1.jpg"
                        alt="Perview"
                      />
                    </Tab.Pane>
                  </Tab.Content>
                  <Nav className="nav thumb-images rmb-20">
                    <Nav.Link
                      as="a"
                      href="#preview1"
                      eventKey="preview1"
                      className="thumb-item"
                    >
                      <img src="assets/images/shop/thumb1.jpg" alt="Thumb" />
                    </Nav.Link>
                    <Nav.Link
                      as="a"
                      href="#preview2"
                      eventKey="preview2"
                      className="thumb-item"
                    >
                      <img src="assets/images/shop/thumb2.jpg" alt="Thumb" />
                    </Nav.Link>
                    <Nav.Link
                      as="a"
                      href="#preview3"
                      eventKey="preview3"
                      className="thumb-item"
                    >
                      <img src="assets/images/shop/thumb3.jpg" alt="Thumb" />
                    </Nav.Link>
                  </Nav>
                </div>
              </Tab.Container>
            </div>
            <div className="col-lg-6">
              <div className="product-details-content wow fadeInRight delay-0-2s">
                <div className="section-title">
                  <h2>3D Illustration Design</h2>
                </div>
                <div className="ratting-price mb-30">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="price">593</span>
                </div>
                <p>
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae
                  abillo inventore veritatis quasi architecto beatae vitae dicta
                  sunt explicabo Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit autfugit, sed quia consequuntur magni
                  dolores eos qui ratiluptatem sequi nesciunt porro quisquam
                  est, qui dolorem
                </p>
                <form action="#" className="add-to-cart pt-35">
                  <input
                    type="number"
                    min={1}
                    max={20}
                    onchange="if(parseInt(this.value,10)<10)this.value='0'+this.value;"
                    required
                  />
                  <button type="submit" className="theme-btn style-two">
                    Add to Cart <i className="far fa-arrow-right" />
                  </button>
                </form>
                <ul className="category-tags pt-60">
                  <li>
                    <b>Category :</b>
                    <Link legacyBehavior href="/shop">
                      Software
                    </Link>
                    <Link legacyBehavior href="/shop">
                      Website
                    </Link>
                    <Link legacyBehavior href="/shop">
                      Development
                    </Link>
                  </li>
                  <li>
                    <b>Tags :</b>
                    <Link legacyBehavior href="/shop">
                      3D
                    </Link>
                    <Link legacyBehavior href="/shop">
                      Ilustration
                    </Link>
                    <Link legacyBehavior href="/shop">
                      Arts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"details"}>
            <Nav className="nav product-information-tab mt-80 mb-25 wow fadeInUp delay-0-2s">
              <li>
                <Nav.Link as="a" eventKey="details" href="#details">
                  Description <i className="far fa-arrow-right" />
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as="a" eventKey="information" href="#information">
                  Reviews <i className="far fa-arrow-right" />
                </Nav.Link>
              </li>
            </Nav>
            <Tab.Content className="tab-content pb-30 wow fadeInUp delay-0-2s">
              <Tab.Pane className="tab-pane fade" eventKey="details">
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
                </p>
                <br />
                <h4>Additional information</h4>
                <p>
                  Circumstances occur in which toil and pain can procure him
                  some great pleasure. To take a trivial example, which of us
                  ever undertakes laborious physical exercise, except to obtain
                  some advantage from it? But who has any right to find fault
                  with a man who chooses
                </p>
                <ul className="list-style-three pt-10">
                  <li>Graphic Design</li>
                  <li>3D Illustrations Design</li>
                  <li>Dashboard Design</li>
                </ul>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="information">
                <p>
                  Now wherever you are, wherever you are, you can easily monitor
                  your CCTV videos through your mobile, tab, laptop or PC. With
                  the wireless camera, you can view the camera from your mobile
                  or computer to the right-left 0 to 360-degree video. Cover the
                  flower room with a camera.
                </p>
                <ul className="list-style-two my-15">
                  <li>Wide Angle and Long Length</li>
                  <li>Smart zooming point</li>
                  <li>HD quality video output.</li>
                  <li>Smart Alarming System</li>
                </ul>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* Product Details End */}
      {/* Related Products Area start */}
      <section className="related-products pt-90 rpt-50 pb-100 rpb-70 rel z-1">
        <div className="container container-1290">
          <div className="product-title mb-55 text-center wow fadeInUp delay-0-2s">
            <h3>Related Products</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="product-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/products/product1.jpg"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <a className="category" href="#">
                    Product Design
                  </a>
                  <h5>
                    <Link legacyBehavior href="/product-details">
                      Creative Web Page Design
                    </Link>
                  </h5>
                  <div className="ratting-price">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="price">$593</span>
                    </div>
                  </div>
                  <a href="#" className="theme-btn style-two">
                    Add to Cart <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/products/product2.jpg"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <a className="category" href="#">
                    Product Design
                  </a>
                  <h5>
                    <Link legacyBehavior href="/product-details">
                      Task Management Dashboard
                    </Link>
                  </h5>
                  <div className="ratting-price">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="price">$640</span>
                    </div>
                  </div>
                  <a href="#" className="theme-btn style-two">
                    Add to Cart <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/products/product3.jpg"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <a className="category" href="#">
                    Product Design
                  </a>
                  <h5>
                    <Link legacyBehavior href="/product-details">
                      3D Illustration Design
                    </Link>
                  </h5>
                  <div className="ratting-price">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="price">$986</span>
                    </div>
                  </div>
                  <a href="#" className="theme-btn style-two">
                    Add to Cart <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Products Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default ProductDetails;
