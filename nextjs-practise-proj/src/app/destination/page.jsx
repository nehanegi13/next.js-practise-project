'use client'
import { useRouter } from "next/navigation";
import React from "react";


const page = () => {
  const destination = ["Paris", "Tokyo", "NewYork"];
  const router= useRouter()
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-white  h-full">
      <div className="font-bold text-2xl mt-12 p-5">
        Choose Your Destination
      </div>
      <div className="flex flex-col gap-4">
        {destination.map((d, index) => {
          return (
            <div
              key={index}
              className="text-black font-bold text-2xl flex items-center justify-center rounded-2xl w-48 h-25 bg-white hover:scale-105 hover:bg-blue-200 cursor-pointer transition-all duration-300" onClick={() => router.push(`/destination/${d}`)}
            >
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
