import React from "react";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
const Header = () => {
  return (
    <div className="bg-blue-600">
      <div className="flex justify-around items-center container mx-auto p-2">
        <div>
          <p className="text-left text-4xl font-bold text-white">Dreamabtme</p>
        </div>
        <div className="h-[36px]">
          <input
            className="outline w-[400px] bg-white p-1 h-fit"
            placeholder="search"
          />
          <button className="bg-orange-600 w-[70px] h-full p-1 text-white">
            Search
          </button>
        </div>
        <div className="flex items-center gap-2 text-white">
          <FaRegUser fontSize={26} />
          <div>
            <div>
              <span>Đăng nhập/ Đăng ký</span>
            </div>
            <div className="flex items-center">
              <p>Tài khoản</p>
              <IoMdArrowDropdown size={20} />
            </div>
          </div>
        </div>
        <div className="flex items-end gap-2 text-white">
          <FaShoppingCart className="text-white text-4xl" />
          <span>giỏ hàng</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
