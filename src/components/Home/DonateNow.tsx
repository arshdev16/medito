"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DonationSchema, donationSchema } from "@/src/lib/types";
import Link from "next/link";

type Props = {};

const DonateNow = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DonationSchema>({
    resolver: zodResolver(donationSchema),
  });

  const onSubmit: SubmitHandler<DonationSchema> = (data) => console.log(data);

  return (
    <Link href={"https://donate.stripe.com/test_fZe8xLgAp71E37O4gh"}>
      <button className="px-8 py-2.5 m-5 leading-5 text-white transition-colors duration-300 transform bg-[#881ced] rounded-md focus:outline-none">
        Donate Now
      </button>
    </Link>
  );
};

export default DonateNow;
{
  /* </div>
</form> */
}

{
  /* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="currency"
            >
              Currency
            </label>
            <input
              id="currency"
              type="currency"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
            >
              Amount
            </label>
            <input
             {...register("amount")}
             className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6"> */
}
