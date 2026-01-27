"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-20 bg-white flex justify-between items-center px-17">
      <div className="text-black font-bold text-2xl">🌍 Travel Guide</div>
      <div>
        <ul className="flex justify-center items-center gap-10">
          <Link href={"/"} className={pathname == "/" ? "text-blue-700" : ""}>
            <li>Home</li>
          </Link>
          <Link
            href={"/destination"}
            className={pathname == "/destination" ? "text-blue-700" : ""}
          >
            <li>Destination</li>
          </Link>
          <Link
            href={"/contact"}
            className={pathname == "/contact" ? "text-blue-700" : ""}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
