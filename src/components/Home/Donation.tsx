
"use client";
import { getAmount } from "@/src/data-access";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

type Props = {};

const Donation = (props: Props) => {
  const {target, reached} = getAmount()
  const percentage = reached/target * 100
  return (
    <div className="w-auto flex flex-col p-7 my-5">
      <h1 className="font-bold text-4xl my-5 flex-1">
        Dontaions made till now
      </h1>
      <ProgressBar
        completed={percentage}
        animateOnRender={true}
        bgColor="#881ced"
        width="80%"
      />
      <div className="flex my-2">
        <span className="flex flex-col mr-9">
          <span className="text-2xl">raised</span>
          <span className="text-4xl font-bold">${reached}</span>
        </span>
        <span className="flex flex-col">
          <span className="text-2xl">of</span>{" "}
          <span className="text-4xl font-bold">${target}</span>
        </span>
      </div>
    </div>
  );
};

export default Donation;