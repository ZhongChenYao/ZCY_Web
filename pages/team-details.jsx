import TeamSkills from "@/src/components/TeamSkills";
import Layout from "@/src/layout/Layout";
const TeamDetails = () => {
  return (
    <Layout>
      {/* Team Profile Area start */}
      <section
        className="team-profile-area pt-220 rpt-150 pb-130 rpb-100 rel"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-6">
              <div className="team-profile-image rmb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/team/team-profile.jpg" alt="Team" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-profile-content wow fadeInRight delay-0-2s">
                <h2>Joseph E. Curran</h2>
                <span className="designation">Web Developer</span>
                <p>
                  On the other hand, we denounce with righteous indignation
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment so blinded by desire that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs those who fail in their duty through
                  weakness of wil same
                </p>
                <div className="team-sub-title mt-55 mb-30">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <b className="title">Location</b>
                    <span className="text">
                      55 Main Street, Melbourne, Australia
                    </span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="content">
                    <b className="title">Email Address</b>
                    <span className="text">
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="content">
                    <b className="title">Phone Us</b>
                    <span className="text">
                      <a href="callto:+00012345688">+000 (123) 456 88</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Profile Area end */}
      {/* Skill Area start */}
      <section className="skill-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290">
          <div className="row gap-80">
            <div className="col-lg-6">
              <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Best Skills</span>
                <h2>We Have Lot’s Experience and Professionals</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="skill-content wow fadeInUp delay-0-4s">
                <p>
                  Similique sunin culpa qui officia deserunt mollitia animi est
                  laborum et dolorum fuga. Et harum quidem rerum facilis esty
                  expedita distinctioam nobis est eligendi optio cumquey
                </p>
                <TeamSkills />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skill Area end */}
      {/* Contact Form Area start */}
      <section className="contact-area pt-80 rpt-50 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title mb-50 text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work Together</span>
                <h2>Let’s Work Together For Your Nest Projects</h2>
              </div>
            </div>
            <div className="col-xl-10 col-lg-11">
              <form
                id="teamForm"
                className="form-style-one z-1 rel wow fadeInUp delay-0-3s"
                action="#"
                name="teamForm"
                method="post"
              >
                <div className="row gap-60 pt-15">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">
                        <i className="far fa-user" />
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone">
                        <i className="far fa-phone" />
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-50">
                    <div className="form-group">
                      <select name="select-subject" id="select-subject">
                        <option value="default" selected>
                          Subject
                        </option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="SEO">SEO</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">
                        <i className="far fa-pencil" />
                      </label>
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
                    <div className="form-group pt-5 mb-0">
                      <button
                        type="submit"
                        className="theme-btn style-two w-100"
                      >
                        Send Message us <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default TeamDetails;
