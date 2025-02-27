import React from "react";

const Sidebar = () => {
  const categories = [
    "Nhà Sách Tiki",
    "Nhà Cửa - Đời Sống",
    "Điện Thoại - Máy Tính Bảng",
    "Đồ Chơi - Mẹ & Bé",
    "Thiệt Bị Số - Phụ Kiện Số",
    "Điện Gia Dụng",
    "Làm Đẹp - Sức Khỏe",
    "Ô Tô - Xe Máy - Xe Đạp",
    "Thời Trang Nữ",
    "Bách Hóa Online",
    "Thể Thao - Đá Ngoại",
    "Thời Trang Nam",
    "Cross Border - Hàng Quốc Tế",
    "Laptop - Máy Viễn Thông",
    "Linh Kiện",
    "Giày - Dép Nam",
    "Điện Tử - Điện Lạnh",
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      {/* Sidebar Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Danh mục</h2>

      {/* Category List */}
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
