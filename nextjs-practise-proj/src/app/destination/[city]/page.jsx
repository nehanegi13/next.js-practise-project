"use client";
import { useParams } from "next/navigation";
import React from "react";
import parisimage from "@/assets/paris.jpg";
import newyorkimage from "@/assets/newyork.avif";
import tokyoimage from "@/assets/tokyo.jpg";
import Image from "next/image";
const page = ({ params }) => {
  const { city } = useParams();
  return (
    <div className="text-white fixed   mt-25">
      {city} is the beautiful city
      {city == "Paris" && (
        <Image src={parisimage} width={400} height={400} alt="paris-image" />
      )}
      {city == "NewYork" && (
        <Image src={newyorkimage} width={400} height={400} alt="paris-image" />
      )}
      {city == "Tokyo" && (
        <Image src={tokyoimage} width={400} height={400} alt="paris-image" />
      )}
    </div>
  );
};

export default page;
