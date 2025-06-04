"use client";
import React, { useState } from 'react';

export default function Product() {
  const [shadowImage, setShadowImage] = useState(false);
  const [shadowOverlay, setShadowOverlay] = useState(false);
  const [count, setCount] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('bg-[#030303]');

  // Cart items state
  const [items, setItems] = useState([
    { id: 1, name: "Item One", size: "S", colorClass: "bg-[#464445]", quantity: 1, price: 134.00 },
    { id: 2, name: "Item Two", size: "M", colorClass: "bg-[#030303]", quantity: 1, price: 134.00 },
  ]);

  // Products data
  const products = [
    { 
      id: 1,
      images: [
        '/prodact2/prodact1.png',
        '/prodact2/prodact2.png',
        '/prodact2/prodact3.png',
      ],
      price: "134.00 Dhs",
      originalPrice: "199.00 Dhs",
      discount: "-43%",
      title: "Hoodies Blockout Unique",
      subtitle: "Style & Edition",
      category: "Hoodies"
    },
    { 
      id: 2,
      images: [
        '/prodact3/prodact1.png',
        '/prodact3/prodact2.png',
        '/prodact3/prodact3.png',
      ],
      price: "134.00 Dhs",
      originalPrice: "199.00 Dhs",
      discount: "-43%",
      title: "Hoodies Blockout Unique",
      subtitle: "Style & Edition",
      category: "Hoodies"
    },
    { 
      id: 3,
      images: [
        '/prodact/prodact.png',
        '/prodact/prodact2.png',
        '/prodact/prodact3.png',
      ],
      price: "134.00 Dhs",
      originalPrice: "199.00 Dhs",
      discount: "-43%",
      title: "Hoodies Blockout Unique",
      subtitle: "Style & Edition",
      category: "Hoodies"
    },
    { 
      id: 4,
      images: [
        '/prodact/prodact.png',
        '/prodact/prodact2.png',
        '/prodact/prodact3.png',
      ],
      price: "134.00 Dhs",
      originalPrice: "199.00 Dhs",
      discount: "-43%",
      title: "T-Shirt Blockout Unique",
      subtitle: "Style & Edition",
      category: "T-Shirts"
    }
  ];

  // Image navigation
  const [currentImageIndices, setCurrentImageIndices] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );

  const handleNextImage = (productId) => {
    setCurrentImageIndices(prev => {
      const currentIndex = prev[productId];
      const product = products.find(p => p.id === productId);
      const nextIndex = (currentIndex + 1) % product.images.length; 
      return {...prev, [productId]: nextIndex};
    });
  };

  const handlePrevImage = (productId) => {
    setCurrentImageIndices(prev => {
      const currentIndex = prev[productId];
      const product = products.find(p => p.id === productId);
      const prevIndex = (currentIndex - 1 + product.images.length) % product.images.length;
      return {...prev, [productId]: prevIndex};
    });
  };

  // Handle product selection for modal
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setShadowOverlay(true);
  };

  // Handle add to cart
  const handleAddToCart = () => {
    const newItem = {
      id: Date.now(),
      name: selectedProduct.title,
      size: selectedSize,
      colorClass: selectedColor,
      quantity: count,
      price: parseFloat(selectedProduct.price.replace(' Dhs', ''))
    };
    setItems([...items, newItem]);
    setCount(1);
  };

  // Handle item deletion
  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Calculate total
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

  // Text constants
  const text1 = "Product Info";
  const text7 = "Delivery";
  const totalText = "Total";

  return (
    <div className="bg-neutral-100 py-24">
      <div className="max-w-[1512px] mx-auto px-10">
        <div className="flex gap-8 overflow-x-scroll pb-4 custom-scrollbar">
          {products.map((product) => (
            <div key={product.id} className='w-[467px] h-[598px] flex-shrink-0'>
              <div className="rounded-xl bg-transparent">
                <div className="p-0 relative">
                  <div className="relative h-[598px]">
                    <img 
                      className="w-full h-full rounded-[40px] object-cover cursor-pointer" 
                      alt={product.title} 
                      src={product.images[currentImageIndices[product.id]]}
                      onClick={() => {
                        setSelectedProduct(product);
                        setShadowImage(true);
                      }}
                    />
                    
                    {/* Favorite button */}
                    <button 
                      onClick={() => handleProductSelect(product)}
                      className="absolute top-[29px] right-[29px] w-[55px] h-[55px] rounded-full bg-white border border-[#dcdcdc] flex items-center justify-center hover:bg-gray-100 transition-colors"
                      aria-label="Add to favorites"
                    >
                      <img 
                        className="w-9 h-[35px]" 
                        alt="Favorite" 
                        src="prodact/icona.svg" 
                      />
                    </button>

                    {/* Navigation buttons */}
                    <div className="absolute bottom-[25px] left-[25px] flex gap-4">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevImage(product.id);
                        }}
                        className='bg-white rounded-[40px] w-[74px] h-[74px] flex items-center justify-center hover:bg-gray-100 transition-colors'
                        aria-label="Previous image"
                      >
                        <img 
                          className="w-[42px] h-[42px]" 
                          alt="Previous" 
                          src="/s.svg" 
                        />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextImage(product.id);
                        }}
                        className='bg-white rounded-[40px] w-[74px] h-[74px] flex items-center justify-center hover:bg-gray-100 transition-colors'
                        aria-label="Next image"
                      >
                        <img 
                          className="w-[42px] h-[42px]" 
                          alt="Next" 
                          src="/m.svg" 
                        />
                      </button>
                    </div>
                  </div>

                  {/* Product info */}
                  <div className="mt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-black text-[32px]">
                            {product.price}
                          </span>
                          <div className="relative">
                            <span className="font-medium text-[#a1a1a1] text-[22px] line-through">
                              {product.originalPrice}
                            </span>
                          </div>
                        </div>
                        <span className="absolute right-0 top-0 text-black text-[32px]">
                          {product.discount}
                        </span>
                      </div>
                      <button 
                        onClick={() => handleProductSelect(product)}
                        className="w-[70px] h-[69px] rounded-full bg-white/25 backdrop-blur flex items-center justify-center hover:bg-white/40 transition-colors"
                        aria-label="Add to cart"
                      >
                        <div className="w-[55px] h-14 bg-white rounded-full border border-[#dcdcdc] flex items-center justify-center hover:bg-gray-50">
                          <img 
                            alt="Cart" 
                            src="/prodact/shop.svg" 
                          />
                        </div>
                      </button>
                    </div>
                    <p className="mt-2 font-medium text-[#868686] text-[27px] leading-normal">
                      {product.title} <br /> {product.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image zoom modal */}
      {shadowImage && selectedProduct && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setShadowImage(false)} 
              className='absolute -top-10 right-0 bg-white rounded-full h-10 w-10 flex items-center justify-center text-lg hover:bg-gray-100 transition-colors'
              aria-label="Close zoom"
            >
              ×
            </button>
            <img 
              className='w-full max-h-[80vh] object-contain rounded-lg' 
              src={selectedProduct.images[currentImageIndices[selectedProduct.id]]} 
              alt={selectedProduct.title} 
            />
          </div>
        </div>
      )}

      {/* Product overlay modal */}
      {shadowOverlay && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[100] p-4">
          <div className="bg-white rounded-[40px] max-w-4xl w-full overflow-hidden flex flex-col md:flex-row">
            {/* Left side - Product details */}
            <div className="p-8 flex-1 relative">
              <button
                onClick={() => setShadowOverlay(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Close product view"
              >
                <img src="/exit.svg" alt="Close" width={20} height={20} />
              </button>

              <div className="flex gap-2 items-center mb-4">
                <h1 className="font-bold text-[#141414] text-sm">{text1}</h1>
                <span className="rounded-full bg-[#2F2F2F] px-3 py-1 text-white text-xs">
                  {selectedProduct.category}
                </span>
              </div>

              <p className="text-[#878787] text-sm mb-6">
                {selectedProduct.title} {selectedProduct.subtitle}
              </p>

              <h2 className="font-montreal text-2xl text-black mb-6">   
                {selectedProduct.price}
              </h2>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
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
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#DDDDDD] peer-checked:bg-black peer-checked:text-white peer-checked:border-black text-sm">
                        {size}
                      </span>
                    </label>
                  ))} 
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Color</h3>
                <div className="flex flex-wrap gap-3">
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
                        className={`${color.value} w-8 h-8 rounded-full inline-flex items-center justify-center`}
                        aria-label={color.label}
                      >
                        <span className="w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100"></span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-2">Quantity</h3>
                <div className="flex gap-2">
                  <button
                    className="rounded-lg bg-[#ECECEC] w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <div className="rounded-lg bg-[#ECECEC] w-14 h-10 flex items-center justify-center">
                    {count.toString().padStart(2, '0')}
                  </div>
                  <button
                    className="rounded-lg bg-[#ECECEC] w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    onClick={() => setCount((prev) => prev + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-4 rounded-[40px] hover:bg-gray-800 transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* Right side - Cart summary */}
            <div className="bg-gray-50 p-8 w-full md:w-96 border-l border-gray-200">
              <h3 className="text-lg font-medium mb-6">Your Cart</h3>
              
              <div className="space-y-4 max-h-64 overflow-y-auto mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#0D0D0D] rounded-full w-5 h-5 text-white text-xs flex items-center justify-center">
                        {item.size}
                      </span>
                      <span className={`${item.colorClass} rounded-full w-5 h-5`}></span>
                      <span className="text-sm">{item.name}</span>
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

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm">{text7}</span>
                  <span className="text-sm">Free</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>{totalText}</span>
                  <span>{total} Dhs</span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 rounded-[40px] hover:bg-gray-800 transition-colors">
                Checkout
              </button>
            </div>
          </div>
        






<div className='bg-white flex items-center mr-[190px]  w-[410px] h-[326px] rounded-[40px]'>
<div className="mt-4 ml-[30px]">
  <div className="mb-4">
    <label className="block font-medium text-sm text-black mb-1">
      Full Name
    </label>
    <input 
      className="w-[352px] h-[50px] border border-[#ECECEC] rounded-lg px-4 text-sm"
      placeholder="Nom Complet"
    />
  </div>

  <div className="mb-4">
    <label className="block font-medium text-sm text-black mb-1">
      Full Address
    </label>
    <input 
      className="w-[352px] h-[50px] border border-[#ECECEC] rounded-lg px-4 text-sm"
      placeholder="Ville, Adress"
    />
  </div>

  <div className="mb-6">
    <label className="block font-medium text-sm text-black mb-1">
      Phone Number
    </label>
    <input 
      className="w-[352px] h-[50px] border border-[#ECECEC] rounded-lg px-4 text-sm"
      placeholder="+212 666-666666"
    />
  </div>

  <div className="flex items-center justify-between gap-4">
    <button 
     
      className="flex-1 bg-[#161616] h-14 text-white rounded-[40px] flex items-center justify-center gap-2 hover:bg-[#333] transition-colors"
    >
      <span>Acheter Maintenant</span>
    </button>
    <button className="bg-white w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
      <img src="/lin.svg" alt="Alternative payment" className="w-6 h-6" />
    </button>
  </div>
</div>
</div>
</div>
      )}
    </div>
  );
}