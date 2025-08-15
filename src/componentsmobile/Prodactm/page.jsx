"use client";
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = 'http://109.123.252.86:84';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/api/products/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const apiData = await response.json();

        const transformedData = apiData.map(product => ({
          id: product.id,
          images: [
            `${baseURL}${product.image_url}`,
            ...product.images.map(img => `${baseURL}${img.image_url}`)
          ],
          promo: "-30%",
          price: `${product.price} Dhs`,
          oldPrice: `${Math.round(product.price * 1.3)} Dhs`,
          title: product.name,
          subtitle: product.description,
          category: product.category?.category_name || 'Uncategorized',
          variants: product.variants || []
        }));

        setProductData(transformedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="pb-10">
      <h1 className="text-black font-bold text-[25px] flex items-center justify-center mt-[50px]">
        Offers Right Now
      </h1>

      <div className="bg-white w-full min-h-screen p-[18px] relative">
        {productData.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            isFirst={index === 0} 
            baseURL={baseURL}
          />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, isFirst, baseURL }) {
  const [count, setCount] = useState(0);
  const [shadowOverlay, setShadowOverlay] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.variants[0]?.size?.size_label || 'M');
  const [selectedColor, setSelectedColor] = useState(product.variants[0]?.color?.hex || '#030303');
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phone: ''
  });

  // Image navigation
  const handleNext = () => setCount((prev) => (prev + 1) % product.images.length);
  const handlePrev = () => setCount((prev) => (prev - 1 + product.images.length) % product.images.length);
  const currentImage = product.images?.[count] || '/placeholder-image.jpg';

  // Quantity handlers
  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCartItems(newQuantity);
  };

  const handleDecreaseQuantity = () => {
    const newQuantity = Math.max(1, quantity - 1);
    setQuantity(newQuantity);
    updateCartItems(newQuantity);
  };

  // Update cart items
  const updateCartItems = (newQuantity) => {
    const existingItem = items.find(item => 
      item.name === product.title && 
      item.size === selectedSize && 
      item.color === selectedColor
    );

    if (existingItem) {
      setItems(items.map(item => 
        item.id === existingItem.id 
          ? {...item, quantity: newQuantity} 
          : item
      ));
    } else if (newQuantity > 0) {
      setItems([...items, {
        id: Date.now(),
        name: product.title,
        size: selectedSize,
        color: selectedColor,
        quantity: newQuantity,
        price: parseFloat(product.price.replace(' Dhs', ''))
      }]);
    }
  };

  // Add to cart functionality
  const handleAddToCart = () => {
    const existingItem = items.find(item => 
      item.name === product.title && 
      item.size === selectedSize && 
      item.color === selectedColor
    );

    if (existingItem) {
      setItems(items.map(item => 
        item.id === existingItem.id 
          ? {...item, quantity: item.quantity + 1} 
          : item
      ));
    } else {
      setItems([...items, {
        id: Date.now(),
        name: product.title,
        size: selectedSize,
        color: selectedColor,
        quantity: 1,
        price: parseFloat(product.price.replace(' Dhs', ''))
      }]);
    }
    // Removed setShadowOverlay(true) to keep the same UI
  };

  const handleDeleteItem = (id) => setItems(items.filter(item => item.id !== id));

  // Form handling
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.address || !formData.phone) {
      alert('Please fill all fields');
      return;
    }
    if (items.length === 0) {
      alert('Your cart is empty');
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log('Order submitted:', { 
      customer: formData, 
      items, 
      total: total.toFixed(2) 
    });
    
    // Reset after submission
    setShadowOverlay(false);
    setItems([]);
    setFormData({ fullName: '', address: '', phone: '' });
    alert('Order placed successfully!');
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Get available variants
  const availableSizes = [...new Set(product.variants.map(v => v.size?.size_label))].filter(Boolean);
  const availableColors = [...new Set(product.variants.map(v => v.color?.hex))].filter(Boolean);

  return (
    <div className="pt-4 md:pt-4">
      {/* Product Card Main Content */}
      <div className="relative">
        {/* Navigation buttons */}
        <div className="absolute flex gap-2 bottom-[100px] left-[70px] transform -translate-x-1/2 z-10">
          <button
            onClick={handlePrev}
            className="bg-[#F5F5F5] rounded-full w-[55px] h-[55px] flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
          >
            <img
              src="/phone/yasar.svg"
              alt="previous"
              className="w-6"
              onError={(e) => { e.currentTarget.src = '/placeholder-image.jpg'; }}
            />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#F5F5F5] rounded-full w-[55px] h-[55px] flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
          >
            <img
              src="/phone/yamin.svg"
              alt="next"
              className="w-6"
              onError={(e) => { e.currentTarget.src = '/placeholder-image.jpg'; }}
            />
          </button>
        </div>
  
        {/* Favorite button */}
        <button className="absolute w-[55px] h-[55px] right-9 top-[30px] flex flex-col gap-2">
          <img
            src="/phone/icona.svg"
            alt="favorite"
            onError={(e) => { e.currentTarget.src = '/placeholder-image.jpg'; }}
          />
        </button>
  
        {/* Main product image */}
        <img
          src={currentImage}
          alt={product.title}
          className="w-full rounded-2xl p-2 cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => setShadowOverlay(true)}
          onError={(e) => { e.currentTarget.src = '/placeholder-image.jpg'; }}
          loading="lazy"
        />
  
        {/* Promo badge */}
        {product.promo && (
          <div className="absolute left-[20px] top-[60%] w-20 h-8 bg-[#FEB93C] flex items-center justify-center px-2 py-1 rounded-full">
            <span className="text-white text-sm font-medium">{product.promo}</span>
          </div>
        )}
  
        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="absolute right-5 top-[50%] cursor-pointer hover:scale-105 transition-transform w-[70px] h-[69px]"
        >
          <img
            src="/phone/shop.svg"
            alt="Add to cart"
            className="w-full h-full"
            onError={(e) => { e.currentTarget.src = '/placeholder-image.jpg'; }}
          />
        </button>
  
        {/* Plus button */}
        <button
          onClick={handleAddToCart}
          className="absolute bg-white w-[55px] h-[55px] rounded-full right-5 top-[40%] flex items-center justify-center text-lg font-bold"
        >
          +
        </button>
  
        {/* Product info */}
        <div className="px-2 mt-[100px]">
          <div className="text-xl text-black font-medium">
            {product.price}{' '}
            <span className="line-through text-gray-400 text-sm ml-2">
              {product.oldPrice}
            </span>
          </div>
          <div className="text-base text-[#878787] mt-1">
            <div>{product.title}</div>
            <div>{product.subtitle}</div>
          </div>
        </div>
      </div>
  






      {/* Expanded Product View Overlay */}
      {shadowOverlay && (
        <div className="fixed inset-0 bg-black/50 flex flex-col items-center z-50 w-full h-full p-1 overflow-y-auto">
          <div className="w-full max-w-md flex flex-col gap-4">
              <div className="bg-white h-full rounded-[50px] overflow-hidden shadow-xl">
              {/* Overlay header with navigation */}
              
              <div className="relative mt-[100px]">

  

                <div className=" absolute flex fixed   justify-center p-0.5 py-[10px] gap-3  ml-5">


                  {/* image */}
                {/* <img 
  className="fixed  left-0 top-0 w-full h-[95px] -z-50  " 
  src="db.svg" 
  alt="" 
/> */}



 {/* button */}
 <div className="flex gap-[200px]">

   
                  <div className="fixed left-0 top-0">

                    <div className="flex gap-[10px] ml-[10px]">
                  <button onClick={handlePrev} className="bg-[#F5F5F5] w-[74px] h-[74px] rounded-full flex items-center justify-center">
                    <img 
                      src="/phone/yasar.svg" 
                      alt="previous" 
                      className="w-[30px] h-[30px]"
                      onError={(e) => e.target.src = '/placeholder-image.jpg'}
                    />
                  </button>
                  <button onClick={handleNext} className="bg-[#F5F5F5] w-[74px] h-[74px] rounded-full flex items-center justify-center">
                    <img 
                      src="/phone/yamin.svg" 
                      alt="next" 
                      className="w-[30px] h-[30px]"
                      onError={(e) => e.target.src = '/placeholder-image.jpg'}
                    />
                  </button>

                  </div>

                  <div className="flex gap-3 ml-[120px] mt-[10px]"></div>
                  <button onClick={handleAddToCart}>
                  <h1 className="absolute mb-[40px] bg-[#FEB93C]  rounded-full text-white ">
                  {total.toFixed(2)}
                  </h1>
                  {/* <div className="absolute bg-[#FEB93C] w-[59px] h-[59px] rounded-full text-white text-sm  p-2">{item.quantity.toString().padStart(2, '0')}</div> */}

                    <img 
                      src="shop.svg" 
                      alt="shop menu" 
                      className="w-[35px] h-[35px] mb-1"
                      onError={(e) => e.target.src = '/placeholder-image.jpg'}
                    />
                  </button>
                  <button 
                    onClick={() => setShadowOverlay(false)}
                    className="bg-[#F5F5F5] w-[55px] h-[55px] text-black mr-1 mt-1 rounded-full"
                  >
                    ×
                  </button>
                  </div>
                </div>
                </div>

                {/* Quantity controls */}
                <div className="absolute mt-[40px] ml-[35px] flex gap-3">
                  <button 
                    onClick={handleIncreaseQuantity}
                    className="bg-white mb-[50px] w-[55px] h-[55px] rounded-full text-[27px] text-black flex items-center justify-center"
                  >
                    +
                  </button>
                  <button className="w-[70px] h-[69px] rounded-full bg-white/30 backdrop-blur flex items-center justify-center hover:bg-white/50 transition-colors">
                    <div className="w-[55px] h-14 bg-white rounded-full border border-[#dcdcdc] flex items-center justify-center hover:bg-gray-50">
                      <img 
                        alt="Cart" 
                        className="w-8 h-8" 
                        src="/prodact/shop.svg"
                        onError={(e) => e.target.src = '/placeholder-image.jpg'}
                      />
                    </div>
                  </button>                
                </div>

                {/* Thumbnail images */}
                <div className="absolute flex gap-2 mt-[290px] ml-[30px]">
                  {product.images.slice(0, 3).map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCount(idx)}
                      className={`w-[61px] h-[74px] p-0.1 py-0.1 rounded-full ${count === idx ? 'ring-2 ring-[#FEB93C]' : ''}`}
                    >
                      <img 
                        className="w-[72px] h-[72px] object-cover rounded-full" 
                        src={img} 
                        alt={`Thumbnail ${idx}`}
                        onError={(e) => e.target.src = '/placeholder-image.jpg'}
                      />
                    </button>
                  ))}
                </div>

                {/* Main expanded image */}
                <img 
                  src={currentImage}
                  alt={product.title}
                  className="w-full p-[15px] h-[385px] rounded-[60px] object-cover"
                  onError={(e) => e.target.src = '/placeholder-image.jpg'}
                />
                
                {/* Promo badge */}
                {product.promo && (
                  <button className="absolute w-[88px] h-[42px] top-[120px] left-[310px] bg-[#FEB93C] text-white text-[24px] px-2 py-1 rounded-full">
                    {product.promo}
                  </button>
                )}
              </div>

              {/* Quantity controls */}
              <div className="flex absolute justify-between items-center mt-[40px] ml-[260px]">
                <div className="flex items-center gap-1 mb-2">
                  <button
                    onClick={handleDecreaseQuantity}
                    disabled={quantity === 1}
                    className={`w-[42px] h-[42px] rounded-lg flex items-center justify-center ${
                      quantity === 1 ? 'bg-gray-100 opacity-50' : 'bg-gray-100 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    -
                  </button>
                  <div className="w-[53px] h-[42px] text-[13px] rounded-lg border border-[#ECECEC] flex items-center justify-center">
                    {quantity.toString().padStart(2, '0')}
                  </div>
                  <button
                    onClick={handleIncreaseQuantity}
                    className="w-[42px] h-[42px] rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Product details */}
              <div className="p-6">
                <p className="text-xs text-[#FEB93C]">{product.category}</p>
                <h2 className="text-[27px] font-medium text-black mb-2">{product.title}</h2>
                <p className="text-[#B7B7B7] text-[16px] mb-2">Ref: 00GBM12</p>
                <span className="text-[48px] text-[#FEB93C] font-medium">{product.price}</span>
                <p className="text-gray-500 text-sm mb-4">{product.subtitle}</p>
              </div>

              {/* Order form */}
              <div className="space-y-4 p-[15px]">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Full Name</label>
                  <input 
                    name="fullName"
                    className="w-full h-12 border border-gray-200 rounded-lg px-4 text-sm"
                    placeholder="Nom Complet"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">Full Address</label>
                  <input 
                    name="address"
                    className="w-full h-12 border border-gray-200 rounded-lg px-4 text-sm"
                    placeholder="Ville, Adresse"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">Phone Number</label>
                  <input 
                    name="phone"
                    type="tel"
                    className="w-full h-12 border border-gray-200 rounded-lg px-4 text-sm"
                    placeholder="+212 666-666666"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Cart items */}
              <div className="space-y-3 max-h-40 overflow-y-auto mb-4 p-4">
                {items.length > 0 ? (
                  items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-sm">{item.name}</span>
                        { <span className="text-xs text-gray-400"></span>}
                        {item.color && (
                          <span 
                            className="w-3 h-3 rounded-full inline-block"
                            style={{ backgroundColor: item.color }}
                          />
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-sm">
                          {item.quantity.toString().padStart(2, '0')}
                        </span>
                        <span className="text-sm font-medium">
                          {(item.price * item.quantity).toFixed(2)} Dhs
                        </span>
                        <button 
                          onClick={() => handleDeleteItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                    <img src="delet.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm text-center">Your cart is empty</p>
                )}
              </div>

              {/* Order summary */}
              <div className="border-t border-gray-100 pt-4 px-4">
                <div className="flex justify-between font-medium mt-2">
                  <span className="text-[24px] text-[#BDBDBD]">Total MAD:</span>
                  <span className="text-[#FEB93C]  text-[20px]">{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit button */}
              <div className="flex justify-between items-center gap-4 p-4">
              <button
  onClick={handleSubmit}
  className="w-[237px] h-[70px] bg-[#FEB93C] text-white text-[25px] rounded-full hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-3"
>
  <span>Get Payed</span>
  <img src="sho.svg" alt="shop" className="w-[39px] h-[39px]" />
</button>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}