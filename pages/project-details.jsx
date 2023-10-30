import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ProjectDetails = () => {
  return (
    <Layout>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-75 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s">
                Software Development
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf-small.png"
                  alt="Leaf"
                />
              </h1>
              <div className="banner-text wow fadeInUp delay-0-3s">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaqu quae
                abillo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eosqui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est dolorem epsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi temporae
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Project Details Image start */}
      <div className="project-details-image rel z-1">
        <div className="container-fluid">
          <div className="image wow fadeInUp delay-0-2s">
            <img
              src="assets/images/projects/project-details.jpg"
              alt="Project"
            />
          </div>
        </div>
      </div>
      {/* Project Details Image end */}
      {/* Project Details Content Area start */}
      <section className="project-details-area pt-80 rel z-1">
        <div className="container container-1290">
          <div className="row pb-35 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">Project Information's</h3>
            </div>
            <div className="col-lg-8">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                <div className="col">
                  <h5>Client</h5>
                  <p className="sub-title mb-20">Webtend Digital Studio</p>
                </div>
                <div className="col">
                  <h5>Category</h5>
                  <p className="sub-title mb-20">Web Development</p>
                </div>
                <div className="col">
                  <h5>Date</h5>
                  <p className="sub-title mb-20">February 25, 2023</p>
                </div>
                <div className="col">
                  <h5>Location</h5>
                  <p className="sub-title mb-20">Melbourne, Australia</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row pt-50 pb-70 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">The Challenge</h3>
            </div>
            <div className="col-lg-8">
              <div className="big-letter text">
                mAt vero eos et accusamus etiusto odio dignissimos ducimus
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi occaecati cupiditate
                similique sunin culpa qui officia deserunt mollitia animi est
                laborum et dolorum fuga. Et harum quidem rerum facilis esty
                expedita distinctio. Nam libero tempore cum soluta nobis est
                eligendi optio cumquey nihil impedit quo minus quod maxime
                placeat facere possimus, omnis voluptas assumenda est, omnis
                dolor repellendus. Temporibus autem quibusdam et aut officiis
                debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                repudiandae sint et molestiae non recusandae. Itaque earume
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/projects/project-middle1.jpg"
                  alt="Project"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/projects/project-middle2.jpg"
                  alt="Project"
                />
              </div>
            </div>
          </div>
          <div className="row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">The Results</h3>
            </div>
            <div className="col-lg-8">
              <div className="text">
                We denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the charms of pleasure of the
                moment, so blinded by desire, that they cannot foresee the pain
                and trouble that are bound to ensue; and equal blame belongs to
                those who fail in their duty through weakness of will, which is
                the same as saying through shrinking from toil and pain. These
                cases are perfectly simple and easy to distinguish. In a free
                hour, when our power of choice is untrammelled and when nothing
                prevents our being able to do what we like best, every pleasure
                is to be welcomed and every pain avoided. But in certain
                circumstances and owing to the claims of duty or the obligations
                of business it will frequently occur that pleasures have to be
                repudiated and annoyances accepted. The wise man therefore
                always holds in these matters to this principle of selection: he
                rejects pleasures to secure other greater pleasures, or else he
                endures pains to avoid worse pains.
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      {/* Project Details Content Area End */}
      {/* Next Prev Post Area start */}
      <section className="next-prev-post-area">
        <div className="container container-1290">
          <div className="next-prev-post pt-110 rpt-80 pb-100 rpb-70">
            <div className="prev-post wow fadeInLeft delay-0-2s">
              <div className="image">
                <img src="assets/images/projects/prev-project.jpg" alt="Prev" />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    Digital Product Design
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="read-more">
                    Prev <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="next-post wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    Web Development
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="read-more">
                    Next <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img src="assets/images/projects/next-project.jpg" alt="Next" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Next Prev Post Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default ProjectDetails;
