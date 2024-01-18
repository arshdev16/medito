import React from "react";
import DonateNow from "./DonateNow";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full my-7">
      <div className="flex flex-col m-4 my-9 w-full h-full items-start">
        <h1 className="font-bold text-5xl my-10">Fundraiser</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          corporis eveniet illo deserunt, nulla voluptatum cumque expedita
          libero sed perspiciatis?
        </p>
      </div> 
    </div>
  );
};

export default Hero;
