import { createContext, Dispatch, SetStateAction, useState } from "react";

import { Person } from "../types";

//1st part: declaring what is available in our context (ou "storage")
interface cntxVals {
  someNum: number;
  setSomeNum: Dispatch<SetStateAction<number>>;

  someStr: string;
  setSomeStr: Dispatch<SetStateAction<string>>;

  theClickedPerson: Person;
  setTheClickedPerson: Dispatch<SetStateAction<Person>>;

  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;

  salutation: string;
  setSalutation: Dispatch<SetStateAction<string>>;

  personName: string;
  setPersonName: Dispatch<SetStateAction<string>>;
}

//2nd part: giving values to everithing that is available in our context
//          for improper usage of the context (trying to use the context where we did not "allow" using it)
export const MyFirstContext = createContext<cntxVals>({
  someNum: 9,
  setSomeNum: () => {},
  someStr: "wd9",
  setSomeStr: () => {},
  theClickedPerson: {
    name: {
      first: "NA",
      last: "NA",
    },
    email: "NA",
    picture: {
      large: "NA",
    },
  },
  setTheClickedPerson: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  salutation: "",
  setSalutation: () => {},
  personName: "",
  setPersonName: () => {},
});

//3rd part: code which will actually return the values of everythin thats in "1st part"
//          written using very specific rules
export const MyFirstProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [someNum, setSomeNum] = useState(10);
  const [someStr, setSomeStr] = useState("Ten");
  const [theClickedPerson, setTheClickedPerson] = useState<Person>({
    name: {
      first: "NOTHING",
      last: "NOTHING",
    },
    email: "NOTHING",
    picture: {
      large: "NA",
    },
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [salutation, setSalutation] = useState("NA");
  const [personName, setPersonName] = useState("NA");

  let theVals = {
    someNum,
    setSomeNum,
    someStr,
    setSomeStr,
    theClickedPerson,
    setTheClickedPerson,
    isLoggedIn,
    setIsLoggedIn,
    salutation,
    setSalutation,
    personName,
    setPersonName,
  };
  return (
    <MyFirstContext.Provider value={theVals}>
      {children}
    </MyFirstContext.Provider>
  );
};
