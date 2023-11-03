import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Blog = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"主要作品"} />
      {/* Page Banner End */}
      {/* Blog Page Area start */}
      <section className="blog-page-area py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row">

            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/zcy/work/work_1_top.webp" alt="Blog" />
                </div>
                <hr />
                <h4>
                  <Link legacyBehavior href="/works/work_1">
                    <a>完蛋！我被美女包围了！</a>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/zcy/work/work_2_top.webp" alt="Blog" />
                </div>
                <hr />
                <h4>
                  <Link legacyBehavior href="/works/work_2">
                    <a>淙淙</a>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/zcy/work/work_3_top.webp" alt="Blog"/>
                </div>
                <hr />
                <h4>
                  <Link legacyBehavior href="/works/work_3">
                    <a>二次呼吸</a>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/zcy/work/work_4_top.webp" alt="Blog" />
                </div>
                <hr />
                <h4>
                  <Link legacyBehavior href="/works/work_4">
                    <a>热搜</a>
                  </Link>
                </h4>
              </div>
            </div>

            {/*<div className="col-lg-12">*/}
            {/*  <ul className="pagination mt-10 flex-wrap justify-content-center wow fadeInUp delay-0-2s">*/}
            {/*    <li className="page-item disabled">*/}
            {/*      <span className="page-link">*/}
            {/*        <i className="fas fa-angle-left" />*/}
            {/*      </span>*/}
            {/*    </li>*/}
            {/*    <li className="page-item active">*/}
            {/*      <span className="page-link">*/}
            {/*        01*/}
            {/*        <span className="sr-only">(current)</span>*/}
            {/*      </span>*/}
            {/*    </li>*/}
            {/*    <li className="page-item">*/}
            {/*      <a className="page-link" href="#">*/}
            {/*        02*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*    <li className="page-item">*/}
            {/*      <a className="page-link" href="#">*/}
            {/*        03*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*    <li className="page-item">*/}
            {/*      <a className="page-link" href="#">*/}
            {/*        04*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*    <li className="page-item dot" />*/}
            {/*    <li className="page-item dot" />*/}
            {/*    <li className="page-item dot" />*/}
            {/*    <li className="page-item">*/}
            {/*      <a className="page-link" href="#">*/}
            {/*        <i className="fas fa-angle-right" />*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
          </div>
        </div>
      </section>
      {/* Blog Page Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Blog;
