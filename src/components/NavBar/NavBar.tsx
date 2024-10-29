import { Link } from "react-router-dom";

import "./NavBar.css";
import { NavItem } from "../../types";
import { useContext } from "react";
import { MyFirstContext } from "../../state/MyFirstContext";

const NavBar = (props: { navbarArr: NavItem[] }) => {
  const { someNum, someStr, isLoggedIn } = useContext(MyFirstContext);

  return (
    <div className="NavBar">
      <div>
        <h3>{someNum}</h3>
        <h3>{someStr}</h3>
      </div>
      {props.navbarArr.map((curr) => {
        return (
          <div>
            <Link to={curr.hrefStr}> {curr.displayStr} </Link>
          </div>
        );
      })}
      <div>
        {!isLoggedIn && <h3>{"Please Login"}</h3>}
        {isLoggedIn && <h3>{"Hello!"}</h3>}
      </div>
    </div>
  );
};

export default NavBar;
