"use client";
import React, { useState, useEffect } from 'react';

export default function Product() {
  const [shadowImage, setShadowImage] = useState(false);
  const [shadowOverlay, setShadowOverlay] = useState(false);
  const [count, setCount] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('bg-[#030303]');
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  

  const [formData, setFormData] = useState({
    fullName: 'name',
    address: 'address',
    phone: 'phone',
  });

  // Initialize currentImageIndices based on API data
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  useEffect(() => {
    fetch("http://109.123.252.86:84/api/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // Initialize image indices for each product
        const initialIndices = data.reduce((acc, product) => {
          acc[product.id] = 0;
          return acc;
        }, {});
        setCurrentImageIndices(initialIndices);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const handleNextImage = (productId) => {
    setCurrentImageIndices(prev => {
      const currentIndex = prev[productId];
      const product = products.find(p => p.id === productId);
      if (!product || !product.images) return prev;
      const nextIndex = (currentIndex + 1) % product.images.length; 
      return {...prev, [productId]: nextIndex};
    });
  };

  const handlePrevImage = (productId) => {
    setCurrentImageIndices(prev => {
      const currentIndex = prev[productId];
      const product = products.find(p => p.id === productId);
      if (!product || !product.images) return prev;
      const prevIndex = (currentIndex - 1 + product.images.length) % product.images.length;
      return {...prev, [productId]: prevIndex};
    });
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setShadowOverlay(true);
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    
    const newItem = {
      id: Date.now(),
      name: selectedProduct.name,
      size: selectedSize,
      colorClass: selectedColor,
      quantity: count,
      price: parseFloat(selectedProduct.price)
    };
    setItems([...items, newItem]);
    setCount(1);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.address || !formData.phone) {
      alert("Please fill all fields");
      return;
    }
    console.log('Form Data:', formData);
    alert('Order submitted');
  };

  if (loading) {
    return <div className="bg-neutral-100 py-24 text-center">Loading...</div>;
  }

  return (
    <div className="bg-neutral-100 py-24">
      <div className="max-w-[1512px] mx-auto px-10">
        <div className="flex gap-8 overflow-x-scroll pb-[200px] custom-scrollbar">
          {products.map((product) => {
            const currentIndex = currentImageIndices[product.id] || 0;
            const currentImage = product.images?.[currentIndex]?.image_url || product.image_url;
            
            return (
              <div key={product.id} className="w-[467px] h-[497px] flex-shrink-0 relative">
      {/* Main Image */}
      <div className="rounded-xl bg-transparent">
        <div className="p-0 relative">
          <div className="relative h-[497px]">
            <img 
              className="w-full h-full rounded-[40px] object-cover cursor-pointer" 
              alt={product.name} 
              src={currentImage}
              onClick={() => {
                setSelectedProduct(product);
                setShadowImage(true);
              }}
            />

            {/* Favorite Button */}
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

            {/* Image Navigation + Discount */}
            <div className="absolute bottom-[25px] left-[25px] flex gap-4 items-center">
              {/* Discount badge */}
              <div className="w-[108px] h-[42px] bg-[#FEB93C] rounded-full flex items-center justify-center absolute left-[28px] top-[-60px]">
                <span className="text-white font-medium bg-[#FEB93C] text-[24px]">-43%</span>
              </div>

              {/* Previous Image */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage(product.id);
                }}
                className='bg-white rounded-full w-[74px] h-[74px] flex items-center justify-center hover:bg-gray-100 transition-colors transform rotate-[-135deg]'
                aria-label="Previous image"
              >
                <img 
                  className="w-[42px] h-[42px]" 
                  alt="Previous" 
                  src="/s.svg" 
                />
              </button>

              {/* Next Image */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage(product.id);
                }}
                className='bg-white rounded-full w-[74px] h-[74px] flex items-center justify-center hover:bg-gray-100 transition-colors transform rotate-45'
                aria-label="Next image"
              >
                <img 
                  className="w-[42px] h-[42px]" 
                  alt="Next" 
                  src="/m.svg" 
                />  
              </button>

              {/* Plus button */}
              <button 
                className="w-[55px] h-[55px] bg-white rounded-full flex items-center justify-center border border-[#dcdcdc]"
              >
                <span className="text-[32px] font-medium">+</span>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="font-medium text-black text-[32px]">
                  {product.price} Dhs
                </span>
                <span className="text-gray-400 line-through text-[20px]">
                  {product.old_price} Dhs
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

            {/* Product Name & Category */}
            <p className="mt-2 font-medium text-[#868686] text-[27px] leading-normal">
              {product.name}
            </p>
            <p className="text-[#868686] text-[20px]">
              {product.category?.category_name}
            </p>
          </div>
        </div>
      </div>
    </div>
            );
          })}
        </div>
      </div>

      {shadowImage && selectedProduct && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
          <div className="absolute max-w-4xl w-full">
            <button 
              onClick={() => setShadowImage(false)} 
              className='absolute -top-10 right-0 bg-white rounded-full h-10 w-10 flex items-center justify-center text-lg hover:bg-gray-100 transition-colors'
              aria-label="Close zoom"
            >
              ×
            </button>
            <img 
              className='w-full max-h-[80vh] object-contain rounded-lg' 
              src={selectedProduct.images?.[currentImageIndices[selectedProduct.id]]?.image_url || selectedProduct.image_url} 
              alt={selectedProduct.name} 
            />
          </div>
        </div>
      )}

      {shadowOverlay && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[100] p-4 overflow-y-auto">
          <img 
            onClick={() => setShadowOverlay(false)}
            aria-label="Close product view"
            className='ml-[400px] mb-[730px]' src="/exit.svg" alt="Close" width={34} height={34} 
          />

          <div className="bg-white absolute rounded-[40px] w-[410px] mb-[280px] overflow-hidden flex flex-col">
            <img 
              src={selectedProduct.images?.[currentImageIndices[selectedProduct.id]]?.image_url || selectedProduct.image_url}
              alt={selectedProduct.name}
              className="w-full rounded-[40px] p-2"
            />

            <div className="p-3">
              <div className="flex gap-1 items-center mb-4">
                <h1 className="font-bold text-[#141414] text-[12px]">Product Info</h1>
                <span className="rounded-full bg-[#2F2F2F] text-[10px] px-3 py-1 text-white">
                  {selectedProduct.category?.category_name}
                </span>
              </div>

              <p className="text-[#878787] text-[17px] mb-1">
                {selectedProduct.name}
              </p>
              <p className="text-[#878787] text-[14px] mb-1">
                {selectedProduct.description}
              </p>

              <h2 className="font-montreal text-[27px] text-black mb-6">   
                {selectedProduct.price} Dhs
              </h2>

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

              <div className="mb-6">
                <div className="flex flex-wrap gap-4">
                  {selectedProduct.variants?.map((variant) => (
                    <label key={variant.color.id} className="cursor-pointer">
                      <input
                        type="radio"  
                        name="color"
                        value={`bg-[${variant.color.hex}]`}
                        className="hidden peer"
                        checked={selectedColor === `bg-[${variant.color.hex}]`}
                        onChange={() => setSelectedColor(`bg-[${variant.color.hex}]`)}
                      />
                      <span
                        className={`bg-[${variant.color.hex}] w-8 h-8 rounded-full inline-flex items-center justify-center ring-2 ring-transparent peer-checked:ring-black`}
                        aria-label={variant.color.color_name}
                      >
                        <span className="w-3 h-3 rounded-full bg-white opacity-0"></span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="">
                <div className="flex ml-[240px] gap-1">
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
                    onClick={handleAddToCart}

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
                className="w-full bg-black text-white py-4 rounded-[40px] hover:bg-gray-800 transition-colors mb-8"
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="absolute mt-[325px] h-[184px] w-[410px] rounded-[40px] bg-white p-8 border-t border-gray-200">
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
              <span className="text-sm">Delivery</span>
              <span className="text-sm">Free</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>{total} Dhs</span>
            </div>
          </div>

          <div className='absolute bg-white p-8 mt-[839px] w-[410px] h-[326px] rounded-[40px] border-t border-gray-200'>
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
