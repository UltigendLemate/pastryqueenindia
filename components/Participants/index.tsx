import React, { useState } from "react";
import data from "../Participants/participants.json";
import ParticipantCard from "./participantCard";

const Index = () => {
  return (
    <div id="Participants" className="pb-10  bg-white">
      <div className="container m-auto  text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="font-ProzaLibre text-5xl md:text-7xl text-primary mt-12 mb-6 text-center special-font">
            Participants
          </h2>
        </div>
        <div className="grid space-y-10">

        {/* <div className="grid justify-center grid-cols-1 items-center md:mx-20 gap-8 md:gap-10  lg:grid-cols-3"> */}
          {data.map((participant) => (
            <ParticipantCard
            key={participant.teamName}
            p={participant}
            />
          ))}
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Index;
