"use client";
import React, { useState } from 'react';

export default function Page() {
  const productData = [
    {
      id: 1,
      images: ["/hoodies/prodact4/ph1.jpg", "/hoodies/prodact4/ph2.jpg", "/hoodies/prodact4/ph3.jpg"],
      promo: "-43%",
      price: "134.00 Dhs",
      title: "Hoodies Blockout Unique",
      subtitle: "Style & Edition",
      category: "Hoodies"
    },
    {
      id: 2,
      images: ["/hoodies/prodact5/ph1.jpg", "/hoodies/prodact5/ph2.jpg", "/hoodies/prodact5/ph3.jpg"],
      promo: "-43%",
      price: "134.00 Dhs",
      title: "Hoodies Blockout Unique",
      subtitle: "Style & Edition",
      category: "Hoodies"
    },
    {
      id: 3,
      images: ["/hoodies/prodact5/ph1.jpg", "/hoodies/prodact5/ph2.jpg", "/hoodies/prodact5/ph3.jpg"],
      promo: "-43%",
      price: "134.00 Dhs",
      title: "Hoodies Blockout Unique",
      subtitle: "Style & Edition",
      category: "Hoodies"
    },
    {
      id: 4,
      images: ["/hoodies/prodact5/ph1.jpg", "/hoodies/prodact5/ph2.jpg", "/hoodies/prodact5/ph3.jpg"],
      promo: "-43%",
      price: "134.00 Dhs",
      title: "Hoodies Blockout Unique",
      subtitle: "Style & Edition",
      category: "Hoodies"
    }
  ];

  return (
    <div className="pb-10">
      <h1 className="text-black font-bold text-[25px] flex items-center justify-center mt-[50px]">
        Offers Right Now
      </h1>

      <div className="bg-[#F5F5F5] w-full min-h-screen relative">
        {productData.map((product, index) => (
          <ProductCard key={product.id} product={product} isFirst={index === 0} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, isFirst }) {
  const [count, setCount] = useState(0);
  const [shadowOverlay, setShadowOverlay] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('bg-[#030303]');
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phone: ''
  });

  const handleNext = () => {
    setCount((prev) => (prev + 1) % product.images.length);
  };

  const handlePrev = () => {
    setCount((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const currentImage = product.images[count];

  const handleAddToCart = () => {
    const newItem = {
      id: Date.now(),
      name: product.title,
      size: selectedSize,
      colorClass: selectedColor,
      quantity: quantity,
      price: parseFloat(product.price)
    };
    setItems([...items, newItem]);
    setShadowOverlay(true);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={`pt-${isFirst ? '0' : '[40px]'}`}>
      <div className="relative">
        {/* Scroll Buttons */}
        <div className="absolute flex gap-[10px] ml-[20px] z-10 mt-[410px]">
          <button onClick={handlePrev} className="bg-white rounded-full w-[51.56px] h-[51.56px] flex items-center justify-center">
            <img src="phone/yasar.svg" alt="scroll left" width={20} height={20} />
          </button>
          <button onClick={handleNext} className="bg-white rounded-full w-[51.56px] h-[51.56px] flex items-center justify-center">
            <img src="phone/yamin.svg" alt="scroll right" width={20} height={20} />
          </button>
        </div>

        {/* Icons */}
        <div className="absolute right-4 top-4 flex flex-col items-end">
          <img src="phone/icona.svg" alt="favorite" width={55} height={55} />
        </div>

        {/* Product Image */}
        <img 
          src={currentImage} 
          alt={`product ${product.id}`} 
          className="w-full rounded-[40px] p-2 cursor-pointer" 
          onClick={() => setShadowOverlay(true)}
        />

        {/* Promo Badge */}
        <h1 className="absolute text-black text-[32px] right-4 top-20">
          {product.promo}
        </h1>
        
        {/* Add to Cart Button */}
        <img 
          src="phone/shop.svg" 
          alt="add to cart" 
          width={55} 
          height={55} 
          className="absolute right-4 mt-[12px] cursor-pointer"
          onClick={handleAddToCart}
        />

        {/* Product Info */}
        <div className="px-[10px]">
          <h1 className="text-[32px] text-black mt-[20px]">{product.price}</h1>
          <h1 className="text-[27px] text-[#878787] mt-[20px]">
            {product.title}
            <br />
            {product.subtitle}
          </h1>
        </div>
      </div>

      {/* Product overlay modal */}
      {shadowOverlay && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[100] w-full h-full p-[10px]  overflow-y-auto">
          <img 
            onClick={() => setShadowOverlay(false)}
            aria-label="Close product view"
            className='ml-[400px] mb-[730px] cursor-pointer' 
            src="/exit.svg" 
            alt="Close" 
            width={34} 
            height={34} 
          />

          <div className="bg-white absolute rounded-[40px]  w-full mb-[280px] overflow-hidden flex flex-col">
            {/* Product details section */}
            <div className="p-3">
              <div className="flex gap-1 items-center mb-4">
                <h1 className="font-bold text-[#141414] text-[12px]">{product.title}</h1>
                <span className="rounded-full bg-[#2F2F2F] text-[10px] px-3 py-1 text-white">
                  {product.category}
                </span>
              </div>

              <p className="text-[#878787] text-[17px] mb-1">
                {product.title} <br /> {product.subtitle}
              </p>

              <h2 className="font-montreal text-[27px] text-black mb-6">   
                {product.price}
              </h2>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-3">
                  {['S', 'M', 'L', 'XL', 'Over'].map((size) => (
                    <label key={size} className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        className="hidden peer"
                        checked={selectedSize === size}
                        onChange={() => setSelectedSize(size)}
                      />
                      <span className="inline-flex items-center justify-center w-[35px] h-[27px] rounded-full border text-[#DDDDDD] border-[#DDDDDD] peer-checked:bg-black peer-checked:text-white peer-checked:border-black text-sm">
                        {size}
                      </span>
                    </label>
                  ))} 
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-4">
                  {[
                    { value: 'bg-red-100', label: 'Red' },
                    { value: 'bg-[#030303]', label: 'Black' },
                    { value: 'bg-[#BBBBBB]', label: 'Gray' },
                    { value: 'bg-[#115123]', label: 'Green' },
                    { value: 'bg-[#6A200C]', label: 'Brown' },
                  ].map((color) => (
                    <label key={color.value} className="cursor-pointer">
                      <input
                        type="radio"  
                        name="color"
                        value={color.value}
                        className="hidden peer"
                        checked={selectedColor === color.value}
                        onChange={() => setSelectedColor(color.value)}
                      />
                      <span
                        className={`${color.value} w-8 h-8 rounded-full inline-flex items-center justify-center ring-2 ring-transparent peer-checked:ring-black`}
                        aria-label={color.label}
                      >
                        <span className="w-3 h-3 rounded-full bg-white opacity-0"></span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="">
                <div className="flex ml-[240px] gap-1">
                  <button
                    className="rounded-lg bg-[#ECECEC] w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <div className="rounded-lg bg-[#ECECEC] w-14 h-10 flex items-center justify-center">
                    {quantity.toString().padStart(2, '0')}
                  </div>
                  <button
                    className="rounded-lg bg-[#ECECEC] w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-4 rounded-[40px] hover:bg-gray-800 transition-colors mb-8"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Cart summary section */}
          <div className="absolute mt-[325px] h-[184px] w-full  rounded-[40px] bg-white p-5 border-t border-gray-200">
            <div className="space-y-4 max-h-[60px] overflow-y-auto mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center pb-0.5">
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-[#DDDDDD]">{item.name}</span>
                    <span className="bg-[#0D0D0D] rounded-full w-5 h-5 text-white text-xs flex items-center justify-center">
                      {item.size}
                    </span>
                    <span className={`${item.colorClass} rounded-full w-5 h-5`}></span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-[#878787] text-xs">
                      {item.quantity.toString().padStart(2, '0')}
                    </span>
                    <span className="text-xs font-medium text-[#878787]">
                      {item.price.toFixed(2)} Dhs
                    </span>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="text-[#878787] hover:text-red-500"
                      aria-label="Remove item"
                    >
                      <img src="/delet.svg" alt="Delete item" className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-sm">Shipping</span>
              <span className="text-sm">Free</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>{total.toFixed(2)} Dhs</span>
            </div>
          </div>

          {/* Checkout form section */}
          <div className='absolute bg-white p-8 mt-[839px] w-full h-[326px] rounded-[40px] border-t border-gray-200'>
            <div className="mb-4">
              <label className="block font-medium text-sm text-black mb-1">
                Full Name
              </label>
              <input 
                name="fullName"
                className="w-full h-[50px] border border-[#ECECEC] rounded-lg px-4 text-sm"
                placeholder="Nom Complet"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium text-sm text-black mb-1">
                Full Address
              </label>
              <input 
                name="address"
                className="w-full h-[50px] border border-[#ECECEC] rounded-lg px-4 text-sm"
                placeholder="Ville, Adresse"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label className="block font-medium text-sm text-black mb-1">
                Phone Number
              </label>
              <input 
                name="phone"
                className="w-full h-[50px] border border-[#ECECEC] rounded-lg px-4 text-sm"
                placeholder="+212 666-666666"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button 
                onClick={handleSubmit}
                className="flex-1 bg-[#161616] w-[259px] h-[70px] mt-[20px] text-white rounded-[40px] hover:bg-[#333] transition-colors"
              >
                <span>Acheter Maintenant</span>
              </button>
              <button className="absolute bg-black w-[68px] h-[68px] ml-[347px] rounded-full mt-[20px] hover:bg-gray-50 transition-colors">
                <img src="/lin.svg" alt="Alternative payment" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}