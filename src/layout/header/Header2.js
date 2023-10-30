import Link from "next/link";
import Nav from "./Nav";
import NavSearch from "./NavSearch";
const Header2 = ({ singleMenu }) => {
  return (
    <header className="main-header menu-absolute">
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
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <NavSearch />
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto">
              <Link legacyBehavior href="/">
                <a className="theme-btn style-two me-4">
                  Let’s Talk <i className="far fa-arrow-right" />
                </a>
              </Link>
              {/* menu sidbar */}
              <div className="menu-sidebar">
                <button className="bg-transparent">
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
export default Header2;
