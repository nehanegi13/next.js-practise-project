import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-white flex justify-between items-center px-17">
      <div className="text-black font-bold text-2xl">🌍 Travel Guide</div>
      <div>
        <ul className="flex justify-center items-center gap-[10px]">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/destination"}>
            <li>Destination</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
