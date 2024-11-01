import { Link } from "react-router-dom";

import "./NavBar.css";
import { NavItem } from "../../types";
import { useContext, useState } from "react";
import { MyFirstContext } from "../../state/MyFirstContext";

const NavBar = (props: { navbarArr: NavItem[] }) => {
  const {
    someNum,
    someStr,
    isLoggedIn,
    setIsLoggedIn,
    salutation,
    setSalutation,
    personName,
    setPersonName,
  } = useContext(MyFirstContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkLoginDetails = () => {
    try {
      const response = fetch(
        "https://cyberstars.onrender.com/qa-exercises/login/json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      )
        .then((theData) => {
          return theData.json();
        })
        .then((theDataAsObj) => {
          setIsLoggedIn(theDataAsObj.loginCorrect);
          setSalutation(theDataAsObj.salutation);
          setPersonName(theDataAsObj.personName);
        });
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
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
        <h3>
          {isLoggedIn ? `Hello ${salutation} ${personName}` : "Please Login"}
        </h3>

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
