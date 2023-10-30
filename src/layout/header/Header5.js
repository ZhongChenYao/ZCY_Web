import Link from "next/link";
import Nav from "./Nav";
import NavSearch from "./NavSearch";

const Header5 = ({ singleMenu }) => {
  return (
    <header className="main-header menu-absolute header-two">
      <div className="header-top bgc-primary">
        <div className="container container-1620">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <ul className="top-left">
                <li>
                  <i className="far fa-map-marker-alt" /> 963 main Street,
                  Melbourne, Australia
                </li>
                <li>
                  <i className="far fa-clock" /> Monday - Friday, 10am - 5pm
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="top-right">
                <div className="lang-select">
                  <select name="language" id="language">
                    <option value="English">English</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Bangla">Bangla</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>
                <div className="social-style-two">
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
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer mx-lg-auto clearfix">
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <NavSearch />
            {/* Menu Button */}
            <div className="menu-btns">
              <button>
                <i className="far fa-shopping-basket" />
              </button>
              <div className="call-anytime">
                <div className="icon">
                  <i className="fas fa-comments-alt" />
                </div>
                <div className="content">
                  <span>Call Anytime</span>
                  <a href="callto:985236425288">98 523 642 5288</a>
                </div>
              </div>
              {/* menu sidbar */}
              <div className="menu-sidebar">
                <button>
                  <img
                    src="assets/images/icons/toggler-white.svg"
                    alt="Toggler"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default Header5;
