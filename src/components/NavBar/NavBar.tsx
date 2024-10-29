import { Link } from "react-router-dom";

import "./NavBar.css";
import { NavItem } from "../../types";
import { useContext, useState } from "react";
import { MyFirstContext } from "../../state/MyFirstContext";

const NavBar = (props: { navbarArr: NavItem[] }) => {
  const { someNum, someStr, isLoggedIn, setIsLoggedIn } =
    useContext(MyFirstContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkLoginDetails = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = fetch("https://reqres.in/api/users", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: myHeaders,
    })
      .then((theData) => {
        return theData.json();
      })
      .then((theDataAsObj) => {
        // if (theDataAsObj.loginCorrect) {
        //TODO here
        setIsLoggedIn(true);
        // }
      });
  };
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
        <h3>{isLoggedIn ? "hello" : "Please Login"}</h3>

        {!isLoggedIn && (
          <div className="NavBar_LoginDetails">
            <input
              type="text"
              placeholder="username"
              onInput={(e) => {
                setUsername((e.target as HTMLInputElement).value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              onInput={(e) => {
                setPassword((e.target as HTMLInputElement).value);
              }}
            />
            <input type="button" value="login" onClick={checkLoginDetails} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
