import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation, sidebarClick } from "../utils";
import ScrollTop from "./ScrollTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import SideBar from "./header/SideBar";
import { Analytics } from '@vercel/analytics/react';
const Layout = ({ children, header, footer, singleMenu }) => {
  useEffect(() => {
    niceSelect();
    animation();
    sidebarClick();
  }, []);
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        <Header header={header} singleMenu={singleMenu} />
        <SideBar />
        {children}
          <Analytics />
        <Footer footer={footer} />
        <ScrollTop />
      </div>
    </Fragment>
  );
};
export default Layout;
