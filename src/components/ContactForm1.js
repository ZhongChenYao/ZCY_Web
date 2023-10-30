const ContactForm1 = () => {
  return (
    <form
      id="dropMeForm"
      className="form-style-two"
      action="#"
      name="dropMeForm"
      method="post"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
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
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
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
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              placeholder="Subject"
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
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group pt-5 mb-0">
            <button type="submit" className="theme-btn style-two">
              Send Message <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ContactForm1;
