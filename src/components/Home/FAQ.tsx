"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaqSchema, faqSchema } from "@/src/lib/types";
import { faqData } from "@/src/lib/data";

type Props = {};

const FAQ = (props: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 min-h-sceen">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
        <p className="text-neutral-500 text-xl mt-3">
          Frequenty asked questions
        </p>
      </div>
      <div className="grid divide-y divide-neutral-200 w-full mx-auto mt-8">
        {faqData.map((faq, index) => (
          <AccordianItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
        <FaqForm />
      </div>
    </div>
  );
};

type Accordian = {
  question: string;
  answer: string;
};

const AccordianItem = ({ question, answer }: Accordian) => {
  return (
    <div className="py-5">
      <details className="group">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span>{question}</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="text-neutral-400 mt-3 group-open:animate-fadeIn">
          {answer}
        </p>
      </details>
    </div>
  );
};

const FaqForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FaqSchema>({
    resolver: zodResolver(faqSchema),
  });

  const onSubmit: SubmitHandler<FaqSchema> = (data) => console.log(data);

  return (
    <div className="py-5">
      <details className="group">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span>Got more Questions?</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
          <label>Email</label>
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            {...register("mail")}
          />
          <label>Question</label>
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            {...register("question")}
          />
          <button
            type="submit"
            className="px-6 py-2 font-medium tracking-wide my-5 text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Submit
          </button>
        </form>
      </details>
    </div>
  );
};

export default FAQ;
