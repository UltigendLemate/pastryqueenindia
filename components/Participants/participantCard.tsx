import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator"


type participantType = {
  teamName: string;
  teamLogo: string;
  teamMembers: {
    name: string;
    imagePath: string;
    description: string;
  }[];
};
const ParticipantCard = ({ p }: { p: participantType }) => {
  return (
    <div className="max-w-6xl lg:p-5 shadow-lg py-5 mx-auto grid lg:grid-cols-3 gap-10 my-3 px-8">
      <div className="lg:items-center grid gap-0">
        <img
          src={`/teams/${p.teamLogo}`}
          alt="team logo"
          className="h-fit"
        />
        {/* <h5 className='text-2xl text-center'>{p.teamName}</h5> */}
      </div>
      {p.teamMembers.map((member,index) => (
        <div
          key={member.name}
          className={`card mx-auto rounded-md bg-gradient-to-t from-transparent   to-primary/80  relative max-w-md flex justify-center   w-full ${index==1? "border-yellow-300 border-4" : " "}`}
        >
          <img
            alt="img"
            src={`/teams/${member.imagePath}`}
            className="w-full p-3 h-full"
          />
          <p className="absolute bottom-5 left-5  text-center p-1 bg-green-700 rounded-xl  text-white px-3 text-sm font-semibold">
            Chef {member.name}
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <p className="absolute bottom-5 right-5  text-center p-1 bg-black rounded-md cursor-pointer  text-white px-3 text-sm font-semibold">
                Know More
              </p>
            </DialogTrigger>
            <DialogContent className="bg-white text-black">
              <DialogHeader>
                <DialogDescription>{member.description}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
};

export default ParticipantCard;
