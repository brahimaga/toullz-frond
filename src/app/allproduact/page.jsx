"use client";

import React from "react";
import Image from "next/image";
import Testnavber2 from "../../components/Testnavber2/page";

export default function AllProducts() {
  const categories = ["Elsperes", "Meuble", "Chats-Procduits"];
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [priceRange, setPriceRange] = React.useState([0, 200]);

  // Sample product data
  const products = [
    { id: 1, category: "ACCESSORIES", name: "Gloora Bag for Meakup", price: 19.00, oldPrice: 30.00, discount: 52 },
    { id: 2, category: "FACE CARE", name: "Winkle Remover", price: 19.00, oldPrice: 30.00, discount: 52 },
    { id: 3, category: "FACE CARE", name: "Retinol Gloora", price: 19.00, oldPrice: 30.00, discount: 52 },
    { id: 4, category: "FACE CARE", name: "Budy Care", price: 19.00, oldPrice: 30.00, discount: 52 },
    { id: 5, category: "ACCESSORIES", name: "Gloora Bag for Meakup", price: 19.00, oldPrice: 30.00, discount: 52 },
    { id: 6, category: "FACE CARE", name: "Winkle Remover", price: 19.00, oldPrice: 30.00, discount: 52 },
  ];

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (


    <div className="container mx-auto px-1  py-1">
      {/* Hero Image */}
      <div className="mb-12">
      <h1 className="absolute mt-[400px] ml-[100px] text-[50px] text-white ">Toullz Products.</h1>

        <img 
          src="/heallprodact.jpg" 
          alt="Toullz Products" 
          className="w-full rounded-lg"
        />
        
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-medium text-[#FEB93C] mb-4 md:mb-0">
          All Toullz Products
        </h1>

        {/* filter */}
        <button className="flex items-center gap-x-2 px-6 py-3 bg-white border border-[#D7D7D7] rounded-full">
  Filter
  <img className="w-[10px] h-[10px]" src="/filter.svg" alt="filter" />
</button>

      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-80 bg-[#F7F7F7] p-6 rounded-3xl">
          {/* Categories Filter */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Product Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="w-5 h-5 rounded-full border-2 border-[#D9D9D9] appearance-none checked:bg-[#FEB93C] checked:border-white"
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Price Filter */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Filter by price</h2>
            <div className="relative pt-8 pb-4">
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
                className="absolute w-full h-1 bg-[#FEB93C] appearance-none"
              />
              <div className="flex justify-between text-xs mt-4">
                <span>$0</span>
                <span>$200</span>
              </div>
            </div>
          </div>

          {/* Promotions Filter */}
          <div>
            <h2 className="text-lg font-medium mb-4">Filter by promotions</h2>
            <div className="relative pt-8 pb-4">
              <input
                type="range"
                min="0"
                max="100"
                className="absolute w-full h-1 bg-[#FEB93C] appearance-none"
              />
              <div className="flex justify-between text-xs mt-4">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ProductCard = ({ product }) => {
  return (
    <div className=" rounded-[30px] p-2 py-7 w-[280px] ">
      {/* Product Image Placeholder */}
      {/* <div className="bg-gray-200 h-48 rounded-2xl mb-4 relative"> */}
        {/* Discount Badge */}
       
        
        
      {/* </div> */}
      {/* icona and button */}
      
      <button className="absolute bg-white ml-[190px] mt-[5px]  w-[55px] h-[55px] rounded-full">
      <img className=" inline-flex w-[36px] h-[35px]" src="prodact/icona.svg" alt="icona" />
      </button>

      
    <div>
        <button className="absolute bg-[#FEB93C] w-[104px] h-[54px] text-white text-[22px] ml-[10px] mt-[250px] rounded-full" > -{product.discount}%</button>

        <button className="absolute mt-[150px] ml-[190px]  bg-white w-[55px] h-[55px] rounded-full">+</button>


        <button className=" absolute ml-[180px] mt-[240px] w-[70px] h-[69px] rounded-full bg-white/30 backdrop-blur flex items-center justify-center hover:bg-white/50 transition-colors" aria-label="Go to product">
            <div className="w-[55px] h-14 bg-white rounded-full border border-[#dcdcdc] flex items-center justify-center hover:bg-gray-50">
                <img alt="Cart" className="w-8 h-8" src="/prodact/shop.svg"/>
                </div>
                </button>
    </div>
    

      <div className="flex items-center justify-center h-[300px]">
  <img className="w-[280px] h-[333px]" src="test.jpg" alt="test" />

</div>

      {/* Product Info */}
      <div className="mt-[60px]">
        <p className="text-[#FEB93C] font-serif text-sm">{product.category}</p>
        <h3 className="text-lg font-medium mt-1">{product.name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-medium">${product.price.toFixed(2)}</span>
          <span className="text-[#B7B7B7] text-sm line-through">${product.oldPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
   
  );
};  