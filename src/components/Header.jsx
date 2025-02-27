import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
const Header = () => {
  return (
    <div className="bg-blue-600">
      <div className="flex justify-around items-center container mx-auto ">
        <div>
          <p className="text-left text-4xl font-bold text-white">Dreamabtme</p>
        </div>
        <div className="">
          <input className="outline w-[400px] h-fit" placeholder="search" />
          <button className="bg-blue-900 h-full p-0.5">Search</button>
        </div>
        <div className="flex items-center">
          <FaRegUser fontSize={26} />
          <div>
            <div>
              <span>Dang nhap/Dang ky</span>
            </div>
            <div className="flex items-end">
              <p>Tai Khoan</p>
              <IoMdArrowDropdown  size={20}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
