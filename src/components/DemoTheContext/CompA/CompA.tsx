import { useContext } from "react";
import { MyFirstContext } from "../../../state/MyFirstContext";

export const CompA = () => {
  const { setSomeNum } = useContext(MyFirstContext);
  const userTypedSomething = (theInputVal: string) => {
    //   setSomeNum(parseInt(theInputVal));
    //   using + sign to convert from string to number
    setSomeNum(+theInputVal);
  };

  return (
    <div style={{ border: " 2px solid red", padding: "20px" }}>
      CompA
      <br />
      <input
        type="text"
        onInput={(e) => {
          userTypedSomething((e.target as HTMLInputElement).value);
        }}
      />
      <br />
    </div>
  );
};
