"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);

  // Data for the component
  const content = {
    text: "Exprimez Votre Style avec Audace | Hoodies, T-Shirts & Parfums",
    start: "Start Shopping",
    productInfo: {
      title: "Product Info",
      category: "Hoodies",
      name: "Hoodies Blockout Unique",
      edition: "Style & Edition",
      price: "134.00 Dhs",
      sizes: ["S", "M", "L", "XL", "Over"],
      colors: ["#464445", "#030303", "#BBBBBB", "#115123", "#6A200C"]
    },
    cartItems: [
      { name: "Hoodies Blockout Uniq...", quantity: 1, price: "134.00" },
      { name: "Hoodies Blockout Uniq...", quantity: 1, price: "134.00" }
    ],
    delivery: {
      label: "Delivery",
      cost: "Free"
    },
    total: {
      label: "Total",
      amount: "268.00 Dhs"
    },
    form: {
      fields: [
        { label: "Full Name", placeholder: "Nom Complet" },
        { label: "Full Adresse", placeholder: "Ville, Adress" },
        { label: "Phone Number", placeholder: "+212 666-666666" }
      ]
    }
  };

  // Toggle overlay with animation
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="relative">
      {/* Main Content */}
      <div className="relative">
        {/* Navigation Buttons */}
        <div className="absolute top-[60px] left-[30px] flex gap-[10px] z-10">
          <button className="w-[51.56px] h-[51.56px] bg-white rounded-full flex items-center justify-center">
          


            <Image 
              src="/home/mobile/iconb.svg" 
              alt="Menu" 
              width={20} 
              height={20}
            />
          </button>
          <button className="w-[51.56px] h-[51.56px] bg-white rounded-full flex items-center justify-center">
            <Image 
              src="/home/mobile/icona.svg" 
              alt="Search" 
              width={20} 
              height={20}
            />
          </button>
        </div>

        {/* Logo */}
        {/* <div className="absolute top-[70px] right-[20px]">
          <Image 
            src="/home/mobile/logo1.svg" 
            alt="Logo" 
            width={54} 
            height={16}
          />
        </div> */}

        {/* Hero Image */}
        <Image
          src="/home/mobile/bg.jpg"
          alt="Featured Product"
          width={410}
          height={782}
          className="rounded-[40px] mt-[20px] p-2 w-full"
        />

        {/* Hero Text */}
        <h1 className="absolute text-white text-[27px] mt-[450px] ml-[20px] w-[80%]">
          {content.text}
        </h1>

        {/* CTA Buttons */}
        <div className="absolute bottom-[50px] w-full px-[20px] flex gap-4">
          <button 
            className="text-[#2E2E2E] text-[17px] bg-white w-[253px] h-[65px] rounded-[40px]"
            onClick={toggleOverlay}
          >
            {content.start}
          </button>
          <button className="bg-white w-[74px] h-[74px] rounded-full flex items-center justify-center">
            <Image 
              src="/home/mobile/iconc.svg" 
              alt="Cart" 
              width={30} 
              height={30}
            />
          </button>

      
        </div>
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black/50 flex flex-col items-center z-50 overflow-y-auto pb-10">
          {/* Close Button */}
          <button
            onClick={toggleOverlay}
            className="absolute top-5 right-5 w-[60px] h-[60px] flex items-center justify-center"
          >
            <Image src="/exit.svg" alt="Close" width={30} height={30} />
          </button>

          {/* Product Info Section */}
          <div className="bg-white w-[90%] rounded-[40px] mt-[50px] p-5">
            <h1 className="font-bold text-[#141414] text-[12px] mb-2">
              {content.productInfo.title}
            </h1>
            
            <button className="rounded-full bg-[#2F2F2F] px-3 py-1 text-white text-[10px] mb-4">
              {content.productInfo.category}
            </button>

            <h1 className="text-[#878787] text-[17px]">
              {content.productInfo.name}
            </h1>
            <h1 className="text-[#878787] text-[17px] mb-4">
              {content.productInfo.edition}
            </h1>

            <h1 className="text-black text-[27px] mb-4">
              {content.productInfo.price}
            </h1>

            {/* Sizes */}
            <div className="flex gap-2 mb-4">
              {content.productInfo.sizes.map((size) => (
                <button 
                  key={size}
                  className={`rounded-full w-[27px] h-[27px] flex items-center justify-center 
                    ${size === "S" ? "bg-[#0D0D0D] text-white" : "text-[#DDDDDD] border border-[#2E2E2E]"}`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Colors */}
            <div className="flex gap-2 mb-4">
              {content.productInfo.colors.map((color) => (
                <button 
                  key={color}
                  className="rounded-full w-[27px] h-[27px]"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="flex justify-end gap-2">
              <button className="rounded-[10px] bg-[#ECECEC] w-[42px] h-[42px]">-</button>
              <button className="rounded-[10px] bg-[#ECECEC] w-[53px] h-[42px]">02</button>
              <button className="rounded-[10px] bg-[#ECECEC] w-[42px] h-[42px]">+</button>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="bg-white w-[90%] rounded-[40px] mt-4 p-5">
            {content.cartItems.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-[#878787] text-[11px]">{item.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-[#0D0D0D] rounded-full w-[19px] h-[19px] text-white text-[11px] flex items-center justify-center">
                        {index === 0 ? "S" : "XL"}
                      </span>
                      <span 
                        className="rounded-full w-[19px] h-[19px]" 
                        style={{ backgroundColor: content.productInfo.colors[0] }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-[#878787] text-[11px]">0{item.quantity}</span>
                    <Image src="/laiter.svg" alt="Edit" width={15} height={15} />
                    <Image src="/delet.svg" alt="Delete" width={15} height={15} />
                    <span className="text-[#878787] text-[11px] font-medium">
                      {item.price}
                    </span>
                  </div>
                </div>
                {index < content.cartItems.length - 1 && (
                  <hr className="my-3 border-dashed border-[#E3E3E3]" />
                )}
              </div>
            ))}

            <div className="border-t border-dashed border-[#E3E3E3] pt-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#878787] text-[11px]">
                  {content.delivery.label}
                </span>
                <span className="text-[#878787] text-[11px]">
                  {content.delivery.cost}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[#363434] text-[11px] font-medium">
                  {content.total.label}
                </span>
                <span className="text-[#363434] text-[15px] font-medium">
                  {content.total.amount}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Form Section */}
          <div className="bg-white w-[90%] rounded-[40px] mt-4 p-5 mb-10">
            {content.form.fields.map((field) => (
              <div key={field.label} className="mb-6">
                <label className="block font-medium text-[13px] text-black mb-1">
                  {field.label}
                </label>
                <input
                  className="w-full h-[50px] border border-[#ECECEC] rounded-[11px] px-4 font-medium text-[15px] text-black"
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            <div className="flex justify-between items-center mt-8">
              <button className="bg-[#161616] w-[68px] h-[68px] rounded-full flex items-center justify-center">
                <Image src="/payment-icon.svg" alt="Payment" width={30} height={30} />
              </button>
              <button className="bg-[#161616] text-white w-[259px] h-[70px] rounded-[40px] flex items-center justify-center">
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}