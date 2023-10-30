import { stickyNav } from "@/src/utils";
import { useEffect } from "react";
import DefaultHeader from "./DefaultHeader";
import Header2 from "./Header2";
import Header5 from "./Header5";
const Header = ({ header, singleMenu }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  switch (header) {
    case 1:
      return <DefaultHeader singleMenu={singleMenu} />;

    case 2:
      return <Header2 singleMenu={singleMenu} />;

    case 5:
      return <Header5 singleMenu={singleMenu} />;

    default:
      return <DefaultHeader singleMenu={singleMenu} />;
  }
};
export default Header;
