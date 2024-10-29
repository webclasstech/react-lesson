import { useContext } from "react";
import { CompA } from "../CompA/CompA";
import { CompB } from "../CompB/CompB";
import "./CompC.css";
import { MyFirstContext } from "../../../state/MyFirstContext";
export const CompC = () => {
  const { setSomeStr } = useContext(MyFirstContext);
  const userTypedSomething = (theInputVal: string) => {
    setSomeStr(theInputVal);
  };
  return (
    <div className="CompC">
      <div>
        <h4>Comp C</h4>
        <br />
        <input
          type="text"
          onInput={(e) =>
            userTypedSomething((e.target as HTMLInputElement).value)
          }
        />
      </div>
      <CompA />
      <CompB />
    </div>
  );
};
