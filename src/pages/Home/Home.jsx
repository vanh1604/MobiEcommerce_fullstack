import React from "react";
import Categories from "../../components/Categories";
import SliderImg from "../../components/SliderImg";
import ProductItem from "../../components/ProductItem";
import SideBar from "./../../components/SideBar";

const Home = () => {
  const mockupData = [
    {
      title: "Thảo Tùng Tâm Lý",
      rating: "4.7 · 16606",
      originalPrice: 103.935,
      discountedPrice: 25.2,
      discountPercent: 39,
      imageUrl:
        "https://cdn0.fahasa.com/media/catalog/product/8/9/8936066695084.jpg",
    },
    {
      title: "Hành Trình Tự Chữa Lành",
      rating: "4.5 · 12450",
      originalPrice: 89.99,
      discountedPrice: 35.99,
      discountPercent: 40,
      imageUrl:
        "https://via.placeholder.com/300x400?text=Hanh+Trinh+Tu+Chua+Lanh",
    },
    {
      title: "Sức Mạnh Của Thói Quen",
      rating: "4.8 · 20500",
      originalPrice: 120.0,
      discountedPrice: 60.0,
      discountPercent: 50,
      imageUrl:
        "https://via.placeholder.com/300x400?text=Suc+Manh+Cu+Thoi+Quen",
    },
    {
      title: "Tâm Hồn Cao Thượng",
      rating: "4.6 · 8900",
      originalPrice: 75.5,
      discountedPrice: 30.2,
      discountPercent: 60,
      imageUrl: "https://via.placeholder.com/300x400?text=Tam+Hon+Cao+Thuong",
    },
    {
      title: "Nghệ Thuật Sống Tích Cực",
      rating: "4.4 · 7500",
      originalPrice: 65.0,
      discountedPrice: 32.5,
      discountPercent: 50,
      imageUrl:
        "https://via.placeholder.com/300x400?text=Nghệ+Thuật+Sống+Tích+Cực",
    },
    {
      title: "Đắc Nhân Tâm Hiện Đại",
      rating: "4.9 · 25000",
      originalPrice: 150.0,
      discountedPrice: 75.0,
      discountPercent: 50,
      imageUrl:
        "https://via.placeholder.com/300x400?text=Dac+Nhan+Tam+Hien+Dai",
    },
    {
      title: "Bí Mật Tư Duy Thành Công",
      rating: "4.3 · 6000",
      originalPrice: 80.0,
      discountedPrice: 40.0,
      discountPercent: 50,
      imageUrl:
        "https://via.placeholder.com/300x400?text=Bi+Mat+Tu+Duy+Thanh+Cong",
    },
    {
      title: "Hạnh Phúc Trong Tầm Tay",
      rating: "4.7 · 11000",
      originalPrice: 95.0,
      discountedPrice: 47.5,
      discountPercent: 50,
      imageUrl:
        "https://via.placeholder.com/300x400?text=Hanh+Phuc+Trong+Tam+Taylor",
    },
    {
      title: "Lối Sống Minimalism",
      rating: "4.5 · 9500",
      originalPrice: 70.0,
      discountedPrice: 28.0,
      discountPercent: 60,
      imageUrl: "https://via.placeholder.com/300x400?text=Loi+Song+Minimalism",
    },
    {
      title: "Tinh Thần Thép",
      rating: "4.6 · 13000",
      originalPrice: 110.0,
      discountedPrice: 55.0,
      discountPercent: 50,
      imageUrl: "https://via.placeholder.com/300x400?text=Tinh+Than+Thep",
    },
    {
      title: "Khám Phá Bản Thân",
      rating: "4.4 · 8000",
      originalPrice: 85.0,
      discountedPrice: 42.5,
      discountPercent: 50,
      imageUrl: "https://via.placeholder.com/300x400?text=Kham+Pha+Ban+Than",
    },
    {
      title: "Năng Lượng Tích Cực",
      rating: "4.7 · 14500",
      originalPrice: 90.0,
      discountedPrice: 45.0,
      discountPercent: 50,
      imageUrl: "https://via.placeholder.com/300x400?text=Nang+Luong+Tich+Cuc",
    },
    {
      title: "Hành Động Thay Đổi Cuộc Sống",
      rating: "4.8 · 18000",
      originalPrice: 130.0,
      discountedPrice: 65.0,
      discountPercent: 50,
      imageUrl:
        "https://via.placeholder.com/300x400?text=Hanh+Dong+Thay+Doi+Cuoc+Song",
    },
    {
      title: "Tâm Lý Học Hành Vi",
      rating: "4.5 · 10500",
      originalPrice: 100.0,
      discountedPrice: 50.0,
      discountPercent: 50,
      imageUrl: "https://via.placeholder.com/300x400?text=Tam+Ly+Hoc+Hanh+Vi",
    },
    {
      title: "Sống Chậm Lại",
      rating: "4.6 · 12000",
      originalPrice: 88.0,
      discountedPrice: 44.0,
      discountPercent: 50,
      imageUrl: "https://via.placeholder.com/300x400?text=Song+Cham+Lai",
    },
    {
      title: "Khơi Nguồn Cảm Hứng",
      rating: "4.3 · 7000",
      originalPrice: 72.0,
      discountedPrice: 36.0,
      discountPercent: 50,
      imageUrl: "https://via.placeholder.com/300x400?text=Khoi+Nguon+Cam+Huong",
    },
    {
      title: "Hành Trình Tìm Kiếm",
      rating: "4.7 · 13500",
      originalPrice: 115.0,
      discountedPrice: 57.5,
      discountPercent: 50,
      imageUrl: "https://via.placeholder.com/300x400?text=Hanh+Trinh+Tim+Kiem",
    },
    {
      title: "Sức Mạnh Nội Tại",
      rating: "4.4 · 9000",
      originalPrice: 82.0,
      discountedPrice: 41.0,
      discountPercent: 50,
      imageUrl: "https://via.placeholder.com/300x400?text=Suc+Manh+Noi+Tai",
    },
    {
      title: "Tự Do Tài Chính",
      rating: "4.8 · 16000",
      originalPrice: 140.0,
      discountedPrice: 70.0,
      discountPercent: 50,
      imageUrl: "https://via.placeholder.com/300x400?text=Tu+Do+Tai+Chinh",
    },
    {
      title: "Hơi Thở Của Cuộc Sống",
      rating: "4.6 · 11000",
      originalPrice: 98.0,
      discountedPrice: 49.0,
      discountPercent: 50,
      imageUrl: "https://via.placeholder.com/300x400?text=Hoi+Tho+Cu+Cuoc+Song",
    },
  ];

  return (
    <div>
      <Categories />

      <div className="flex container mx-auto">
        <div>
          <SideBar />
        </div>
        <div className="w-full">
          <SliderImg />
          <div className="grid grid-cols-4 gap-4  mt-20">
            {mockupData.map((item, index) => {
              return (
                <ProductItem
                  key={index}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  originalPrice={item.originalPrice}
                  rating={item.rating}
                  discountPercent={item.discountPercent}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200 cursor-pointer">
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default Home;
