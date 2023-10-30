import Link from "next/link";

import { Fragment, useState } from "react";
const Menu = ({ singleMenu }) => {
  return (
    <Fragment>
      {singleMenu ? (
        <SingleMenu />
      ) : (
        <Fragment>
          <DaskTopMenu />
          <MobileMenu />
        </Fragment>
      )}
    </Fragment>
  );
};
export default Menu;

const DaskTopMenu = () => {
  return (
    <ul className="navigation d-none d-lg-flex desktop-menu">
      <li className="dropdown">
        <a href="#">Home</a>
        <ul>
          <li className="dropdown">
            <a href="#">MultiPage</a>
            <ul>
              <li>
                <Link legacyBehavior href="/">
                  Web Design
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index2">
                  Web Development
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index3">
                  Creative Design Studio
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index4">
                  Web Developer
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index5">
                  Marketing Agency
                </Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="far fa-plus" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">OnePage</a>
            <ul>
              <li>
                <Link legacyBehavior href="index1-onepage">
                  Web Design
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index2-onepage">
                  Web Development
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index3-onepage">
                  Creative Design Studio
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index4-onepage">
                  Web Developer
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index5-onepage">
                  Marketing Agency
                </Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="far fa-plus" />
            </div>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li>
      <li>
        <Link legacyBehavior href="about">
          About Us
        </Link>
      </li>
      <li className="dropdown">
        <a href="#">pages</a>
        <ul>
          <li>
            <Link legacyBehavior href="faqs">
              faqs
            </Link>
          </li>
          <li className="dropdown">
            <a href="#">Products</a>
            <ul>
              <li>
                <Link legacyBehavior href="shop">
                  our Products
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="product-details">
                  Product Details
                </Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="far fa-plus" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Team</a>
            <ul>
              <li>
                <Link legacyBehavior href="team">
                  Team Members
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="team-details">
                  Team Details
                </Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="far fa-plus" />
            </div>
          </li>
          <li>
            <Link legacyBehavior href="contact">
              Contact us
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="pricing">
              Pricing Plan
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="404">
              404 error
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">Services</a>
        <ul>
          <li>
            <Link legacyBehavior href="services">
              Our Services
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="service-details">
              Service Details One
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="service-details2">
              Service Details Two
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">Projects</a>
        <ul>
          <li>
            <Link legacyBehavior href="projects">
              Project Grid
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="project-list">
              Project List
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="project-details">
              Project Details
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">blog</a>
        <ul>
          <li>
            <Link legacyBehavior href="blog">
              blog Grid
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="blog-standard">
              blog standard
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="blog-details">
              blog details
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li>
    </ul>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation d-block d-lg-none mobile-menu">
      <li className="dropdown">
        <a href="#">Home</a>
        <ul style={activeLi("home")}>
          <li className="dropdown">
            <a href="#">MultiPage</a>
            <ul style={multiMenuActiveLi("multiPage")}>
              <li>
                <Link legacyBehavior href="/">
                  Web Design
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index2">
                  Web Development
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index3">
                  Creative Design Studio
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index4">
                  Web Developer
                </Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => multiMenuSet("multiPage")}
            >
              <span className="far fa-plus" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">OnePage</a>
            <ul style={multiMenuActiveLi("OnePage")}>
              <li>
                <Link legacyBehavior href="index1-onepage">
                  Web Design
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index2-onepage">
                  Web Development
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index3-onepage">
                  Creative Design Studio
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index4-onepage">
                  Web Developer
                </Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => multiMenuSet("OnePage")}
            >
              <span className="far fa-plus" />
            </div>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("home")}>
          <span className="far fa-plus" />
        </div>
      </li>
      <li>
        <Link legacyBehavior href="about">
          About Us
        </Link>
      </li>
      <li className="dropdown">
        <a href="#">pages</a>
        <ul style={activeLi("pages")}>
          <li>
            <Link legacyBehavior href="faqs">
              faqs
            </Link>
          </li>
          <li className="dropdown">
            <a href="#">Products</a>
            <ul style={multiMenuActiveLi("Products")}>
              <li>
                <Link legacyBehavior href="shop">
                  our Products
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="product-details">
                  Product Details
                </Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => multiMenuSet("Products")}
            >
              <span className="far fa-plus" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Team</a>
            <ul style={multiMenuActiveLi("Team")}>
              <li>
                <Link legacyBehavior href="team">
                  Team Members
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="team-details">
                  Team Details
                </Link>
              </li>
            </ul>
            <div className="dropdown-btn" onClick={() => multiMenuSet("Team")}>
              <span className="far fa-plus" />
            </div>
          </li>
          <li>
            <Link legacyBehavior href="contact">
              Contact us
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="pricing">
              Pricing Plan
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="404">
              404 error
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("pages")}>
          <span className="far fa-plus" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">Services</a>
        <ul style={activeLi("Services")}>
          <li>
            <Link legacyBehavior href="services">
              Our Services
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="service-details">
              Service Details One
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="service-details2">
              Service Details Two
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("Services")}>
          <span className="far fa-plus" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">Projects</a>
        <ul style={activeLi("Projects")}>
          <li>
            <Link legacyBehavior href="projects">
              Project Grid
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="project-list">
              Project List
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="project-details">
              Project Details
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("Projects")}>
          <span className="far fa-plus" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">blog</a>
        <ul style={activeLi("blog")}>
          <li>
            <Link legacyBehavior href="blog">
              blog Grid
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="blog-standard">
              blog standard
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="blog-details">
              blog details
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("blog")}>
          <span className="far fa-plus" />
        </div>
      </li>
    </ul>
  );
};

const SingleMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">about</a>
      </li>
      <li>
        <a href="#services">services</a>
      </li>
      <li>
        <a href="#projects">project</a>
      </li>
      <li>
        <a href="#pricing">pricing</a>
      </li>
      <li>
        <a href="#news">news</a>
      </li>
    </ul>
  );
};
