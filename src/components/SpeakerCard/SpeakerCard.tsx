import React, { useContext } from "react";
import { Person } from "../../types";
import { MyFirstContext } from "../../state/MyFirstContext";

export const SpeakerCard = (props: { person: Person }) => {
  const { setTheClickedPerson } = useContext(MyFirstContext);

  const theCardWasClicked = () => {
    setTheClickedPerson(props.person);
  };
  return (
    <div onClick={theCardWasClicked}>
      <img src={props.person.picture.large} alt={props.person.name.first} />
      <p>
        {props.person.name.first} {props.person.name.last}
      </p>
    </div>
  );
};
