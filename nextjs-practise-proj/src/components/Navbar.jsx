import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-white">
      <div className="text-black font-bold text-2xl">🌍 Travel Guide</div>
      <div>
        <ul>
          <li>Home</li>
          <li>Destination</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
