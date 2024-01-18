import { getRecentDonations } from "@/src/data-access";
import React from "react";

type Props = {};

const RecentDonations = (props: Props) => {
  const data = getRecentDonations();

  return (
    <div className="h-56 overflow-y-scroll mx-6">
      {data.length !== 0 ? (
        data.map((data, index) => (
          <div key={index} className="flex my-5 w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-center w-24 bg-emerald-500 font-bold">
              {data.amount}
              {data.currency}
            </div>
            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                  {data.donorName}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  {data.message}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No donations yet</h1>
      )}
    </div>
  );
};

export default RecentDonations;
