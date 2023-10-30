import { useState } from "react";

const NavSearch = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="nav-search py-10">
      <button className="far fa-search" onClick={() => setToggle(!toggle)} />
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          setToggle(false);
        }}
        className={toggle ? "" : "hide"}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </div>
  );
};
export default NavSearch;
