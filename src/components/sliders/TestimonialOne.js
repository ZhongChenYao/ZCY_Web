import { sliderProps } from "@/src/sliderProps";
import { Component } from "react";
import Slider from "react-slick";

export default class TestimonialOne extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    return (
      <div className="testimonial-one-right-part rmb-75">
        <Slider
          ref={(c) => (this.slider = c)}
          {...sliderProps.testimonialsThreeActive}
          className="testimonials-three-active wow fadeInUp delay-0-2s"
        >
          <div className="testimonial-item style-three">
            <div className="ratting style-two">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <div className="author-speech">
              <p>
                On the other hand we denounce see with righteous indignation and
                dislike men who are so beguiled demoralized by the charms
                pleasure moment
              </p>
            </div>
            <div className="middle-quote">
              <div className="icon">
                <i className="flaticon-right-quote" />
              </div>
            </div>
            <div className="testimonial-footer">
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Richard S. Robertson</h4>
                  <span className="designation">CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item style-three">
            <div className="ratting style-two">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <div className="author-speech">
              <p>
                On the other hand we denounce see with righteous indignation and
                dislike men who are so beguiled demoralized by the charms
                pleasure moment
              </p>
            </div>
            <div className="middle-quote">
              <div className="icon">
                <i className="flaticon-right-quote" />
              </div>
            </div>
            <div className="testimonial-footer">
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Richard S. Robertson</h4>
                  <span className="designation">CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item style-three">
            <div className="ratting style-two">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <div className="author-speech">
              <p>
                On the other hand we denounce see with righteous indignation and
                dislike men who are so beguiled demoralized by the charms
                pleasure moment
              </p>
            </div>
            <div className="middle-quote">
              <div className="icon">
                <i className="flaticon-right-quote" />
              </div>
            </div>
            <div className="testimonial-footer">
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Richard S. Robertson</h4>
                  <span className="designation">CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item style-three">
            <div className="ratting style-two">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <div className="author-speech">
              <p>
                On the other hand we denounce see with righteous indignation and
                dislike men who are so beguiled demoralized by the charms
                pleasure moment
              </p>
            </div>
            <div className="middle-quote">
              <div className="icon">
                <i className="flaticon-right-quote" />
              </div>
            </div>
            <div className="testimonial-footer">
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Richard S. Robertson</h4>
                  <span className="designation">CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="testimonial-controls style-three mt-65 rmt-40 wow fadeInUp delay-0-3s animated">
          <button
            className="testimonial-three-prev slick-arrow slick-disabled"
            onClick={this.previous}
          >
            <i className="far fa-long-arrow-left" />
          </button>
          <div className="testimonial-three-dots">
            <ul className="slick-dots" role="tablist">
              <li className="slick-active" role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control00"
                  aria-controls="slick-slide00"
                  aria-label="1 of 4"
                  tabIndex={0}
                  aria-selected="true"
                >
                  1
                </button>
              </li>
              <li role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control01"
                  aria-controls="slick-slide01"
                  aria-label="2 of 4"
                  tabIndex={-1}
                >
                  2
                </button>
              </li>
              <li role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control02"
                  aria-controls="slick-slide02"
                  aria-label="3 of 4"
                  tabIndex={-1}
                >
                  3
                </button>
              </li>
              <li role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control03"
                  aria-controls="slick-slide03"
                  aria-label="4 of 4"
                  tabIndex={-1}
                >
                  4
                </button>
              </li>
            </ul>
          </div>
          <button
            className="testimonial-three-next slick-arrow"
            onClick={this.next}
          >
            <i className="far fa-long-arrow-right" />
          </button>
        </div>
      </div>
    );
  }
}
