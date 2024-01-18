import { cardsData } from "@/src/lib/types";
import React from "react";

type Props = {};

const Rewards = (props: Props) => {
  const data = [
    {
      tier: "1",
      rewards: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,fugit!",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, molestiae!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,temporibus.",
      ],
    },
    {
      tier: "2",
      rewards: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,fugit!",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, molestiae!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,temporibus.",
      ],
    },
    {
      tier: "3",
      rewards: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,fugit!",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, molestiae!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,temporibus.",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center my-7">
      <div>
        <h1 className="font-bold text-5xl">Rewards</h1>
      </div>
      <div className="flex w-screen mx-auto justify-evenly flex-wrap">
        {data.length !== 0
          ? data.map((data) => <Card tier={data.tier} rewards={data.rewards} />)
          : null}
      </div>
    </div>
  );
};

const Card = ({ tier, rewards }: cardsData) => {
  return (
    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex justify-center -mt-16 md:justify-end">
        <h1 className="bg-gray-700 flex flex-col items-center justify-center object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400">
          <span className="text-2xl font-bold">{tier}</span>
          <span>Tier</span>
        </h1>
      </div>

      <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
        Benefits
      </h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {rewards.map((reward, index) => (
          <li key={index}>{reward}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rewards;
