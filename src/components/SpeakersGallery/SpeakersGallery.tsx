import { useEffect, useState } from "react";
import "./SpeakersGallery.css";
import { Person } from "../../types";
import { SpeakerCard } from "../SpeakerCard/SpeakerCard";
import { SpeakerDetailedView } from "../SpeakerDetailedView/SpeakerDetailedView";

export const SpeakersGallery = () => {
  const [speakersArr, setSpeakersArr] = useState<Person[]>();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=12")
      .then((dataFromApi) => {
        return dataFromApi.json();
      })
      .then((dataAsObj) => {
        setSpeakersArr(dataAsObj.results);
      });
  }, []);
  return (
    <div>
      <h2>This is a Speakers Gallery</h2>
      <div className="galleryMainContent">
        <div className="divAroundCard">
          {speakersArr?.map((curr: Person) => {
            return <SpeakerCard person={curr} />;
          })}
        </div>
        <div>{speakersArr && <SpeakerDetailedView></SpeakerDetailedView>}</div>
      </div>
    </div>
  );
};
