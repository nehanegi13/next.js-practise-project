"use client";
import { useParams } from "next/navigation";
import React from "react";
import pairsimage from "@/assets/paris.jpg";
import newyorkimage from "@/assets/newyork.avif";
import tokyoimage from "@/assets/tokyo.jpg";
import Image from "next/image";
const page = ({ params }) => {
  const { city } = useParams();
  return (
    <div className="text-white fixed   mt-25">
      {city} is the beautiful city
      <Image></Image>
    </div>
  );
};

export default page;
