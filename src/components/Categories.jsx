import React from "react";

const Categories = () => {
  const mocupData = [
    "samsung",
    "Iphone",
    "dien may",
    "vi tinh",
    "tu lanh",
    "laptop",
  ];
  return (
    <div className="flex gap-2 container mx-auto justify-around border-b-2 py-2">
      {mocupData.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

export default Categories;
