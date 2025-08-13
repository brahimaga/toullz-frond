"use client";
import React, { useState, useEffect, useCallback } from 'react';

export default function Product() {
  // State management
  const [shadowImage, setShadowImage] = useState(false);
  const [shadowOverlay, setShadowOverlay] = useState(false);
  const [count, setCount] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('bg-[#030303]');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const baseURL = 'http://109.123.252.86:84';

  // Memoized product image functions
  const getMainImage = useCallback((product) => {
    return product.image_url || '/default-product-image.jpg';
  }, []);

  const getAllImages = useCallback((product) => {
    const images = [getMainImage(product)];
    if (product.images?.length > 0) {
      product.images.forEach(img => {
        images.push(img.image_url);
      });
    }
    return images;
  }, [getMainImage]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${baseURL}/api/products/`);
        if (!response.ok) throw new Error('Failed to fetch products');
        
        const data = await response.json();
        setProducts(data);
        
        // Initialize image indices
        setCurrentImageIndices(data.reduce((acc, product) => ({
          ...acc,
          [product.id]: 0
        }), {}));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [baseURL]);

  // Image navigation handlers
  const handleNextImage = useCallback((productId) => {
    setCurrentImageIndices(prev => {
      const currentIndex = prev[productId] || 0;
      const product = products.find(p => p.id === productId);
      const images = getAllImages(product);
      return {
        ...prev,
        [productId]: (currentIndex + 1) % images.length
      };
    });
  }, [products, getAllImages]);

  const handlePrevImage = useCallback((productId) => {
    setCurrentImageIndices(prev => {
      const currentIndex = prev[productId] || 0;
      const product = products.find(p => p.id === productId);
      const images = getAllImages(product);
      return {
        ...prev,
        [productId]: (currentIndex - 1 + images.length) % images.length
      };
    });
  }, [products, getAllImages]);

  // Product selection handler
  const handleProductSelect = useCallback((product) => {
    setSelectedProduct(product);
    setShadowOverlay(true);
    
    // Set default variant if available
    if (product.variants?.length > 0) {
      setSelectedSize(product.variants[0].size.size_label);
      setSelectedColor(`bg-[${product.variants[0].color.hex}]`);
    }
  }, []);

  // Cart management
  const handleAddToCart = useCallback(() => {
    if (!selectedProduct) return;
    
    const newItem = {
      id: Date.now(),
      name: selectedProduct.name,
      size: selectedSize,
      colorClass: selectedColor,
      quantity: count,
      price: parseFloat(selectedProduct.price),
      productId: selectedProduct.id
    };
    
    setItems(prev => [...prev, newItem]);
    setCount(1);
  }, [selectedProduct, selectedSize, selectedColor, count]);

  const handleDelete = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  // Calculate total
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

  // Form handling
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill in all fields");
      return;
    }

    const orderItems = items.map(item => {
      const variant = selectedProduct.variants?.find(v => 
        v.size.size_label === item.size && 
        `bg-[${v.color.hex}]` === item.colorClass
      );
      
      return {
        product_id: item.productId,
        size_id: variant?.size.id || 1,
        color_id: variant?.color.id || 1,
        quantity: item.quantity,
        price: item.price
      };
    });

    try {
      const response = await fetch(`${baseURL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          address: formData.address,
          phone: formData.phone,
          total: parseFloat(total),
          order_items: orderItems
        })
      });

      if (!response.ok) throw new Error('Failed to submit order');

      // Reset on success
      setFormData({ name: '', address: '', phone: '' });
      setItems([]);
      setShadowOverlay(false);
      alert('Order submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting order. Please try again.');
    }
  };

  // Loading and error states
  if (loading) return <div className="text-center py-24">Loading products...</div>;
  if (error) return <div className="text-center py-24 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-white py-24">
      <div className="max-w-[1512px] mx-auto px-10">
        <div className="flex gap-8 overflow-x-scroll pb-[200px] custom-scrollbar">
          {products.map((product) => {
            const images = getAllImages(product);
            const currentIndex = currentImageIndices[product.id] || 0;
            
            return (
              <div key={product.id} className="w-[467px] flex-shrink-0">
                {/* Product Card */}
                <div className="h-[598px] relative group">
                  <div className="h-full rounded-[40px] overflow-hidden">
                    <img 
                      className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                      alt={product.name} 
                      src={`${baseURL}${images[currentIndex]}`}
                      onClick={() => {
                        setSelectedProduct(product);
                        setShadowImage(true);
                      }}
                      loading="lazy"
                    />
                    
                    {/* Product Badges */}
                    {product.discount && (
                      <div className="absolute top-6 left-6 bg-[#FEB93C] rounded-full px-4 py-1 flex items-center justify-center">
                        <span className="text-white font-medium text-xl">-{product.discount}%</span>
                      </div>
                    )}
                    
                  {/* Action Buttons */}
<div className="absolute top-7 right-7 flex flex-col items-center gap-4 z-10">
  {/* Favorite Button */}
  <button 
    onClick={(e) => {
      e.stopPropagation();
      handleProductSelect(product);
    }}
    className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
    aria-label="Add to favorites"
  >
    <img className="w-7 h-7" alt="favorite" src="prodact/icona.svg" />
  </button>

  {/* Add to Cart + Shop */}
  <div className="flex flex-col items-center gap-4 mt-[330px]">
    {/* Add to Cart Button */}
    <button 
      onClick={(e) => {
        e.stopPropagation();
        handleAddToCart();
      }}
      className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors"
      aria-label="Quick add to cart"
    >
      <span className="text-xl">+</span>
    </button>

    {/* Shop Button */}
    <button 
      onClick={() => handleProductSelect(product)}
      className="w-[70px] h-[69px] rounded-full bg-white/30 backdrop-blur flex items-center justify-center hover:bg-white/50 transition-colors"
      aria-label="Go to product"
    >
      <div className="w-[55px] h-14 bg-white rounded-full border border-[#dcdcdc] flex items-center justify-center hover:bg-gray-50">
        <img alt="Cart" src="/prodact/shop.svg" className="w-8 h-8" />
      </div>
    </button>
  </div>
</div>


                    
                    {/* Image Navigation */}
                    {images.length > 1 && (
                      <div className="absolute bottom-6  top-[650px] left-6 flex gap-4 items-center">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevImage(product.id);
                          }}
                          className="bg-[#F5F5F5] backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          disabled={currentIndex === 0}
                          aria-label="Previous image"
                        >
                          <img className="w-8 h-8" alt="" src="/s.svg" />
                        </button>
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextImage(product.id);
                          }}
                          className="bg-[#F5F5F5] backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          disabled={currentIndex === images.length - 1}
                          aria-label="Next image"
                        >
                          <img className="w-8 h-8" alt="" src="/m.svg" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="mt-[100px]">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-black text-[32px]">
                        {product.price} Dhs
                      </span>
                      {product.old_price && (
                        <span className="text-gray-400 line-through text-[20px]">
                          {product.old_price} Dhs
                        </span>
                      )}
                    </div>
                    
                    {/* <button 
                      onClick={() => handleProductSelect(product)}
                      className="w-[70px] h-[69px] rounded-full bg-white/25 backdrop-blur flex items-center justify-center hover:bg-white/40 transition-colors"
                      aria-label="Add to cart"
                    >
                      <div className="w-[55px] h-14 bg-white rounded-full border border-[#dcdcdc] flex items-center justify-center hover:bg-gray-50">
                        <img alt="Cart" src="/prodact/shop.svg" />
                      </div>
                    </button> */}
                  </div>
                  
                  <p className="mt-2 font-medium text-[#868686] text-[27px] leading-normal">
                    {product.name}
                  </p>
                  <p className="text-[#868686] text-[20px]">
                    {product.category?.category_name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Zoom Modal */}
      {shadowImage && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setShadowImage(false)} 
              className="absolute -top-10 right-0 bg-white rounded-full h-10 w-10 flex items-center justify-center text-lg hover:bg-gray-100 transition-colors"
              aria-label="Close zoom"
            >
              ×
            </button>
            <img 
              className="w-full max-h-[80vh] object-contain rounded-[40px]" 
              src={`${baseURL}${getAllImages(selectedProduct)[currentImageIndices[selectedProduct.id]]}`} 
              alt={selectedProduct.name} 
            />
          </div>
        </div>
      )}




{/* page 2 */}





{shadowOverlay && selectedProduct && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[100] p-4 overflow-y-auto">
    {/* Modal Container */}
    <div className="bg-white rounded-[40px] w-full h-full max-w-full  overflow-y-auto relative">
      {/* Close Button */}
      <button 
        onClick={() => setShadowOverlay(false)}
        aria-label="Close product view"
        className="absolute top-6 right-6 z-10"
      >
        <img src="/exit.svg" alt="Close" width={34} height={34} />
      </button>

      <div className="p-6">
  {/* رأس القسم */}
  <div className="flex items-center gap-2 mb-4">


    {/* 
    <h2 className="font-bold text-sm text-[#141414]">Product Info</h2>
    <span className="rounded-full bg-[#2F2F2F] text-xs px-3 py-1 text-white">
      {selectedProduct.category?.category_name}
    </span> 
    */}
  
  </div>
  <div className="relative">
  {/* Fixed image background */}
  <img
    className="fixed top-0 left-0 z-50 w-full px-[20px] p-4"
    src="nvv.svg"
    alt="v"
  />

   {/* icona image */}

   <div className="fixed left-[1500px]  flex z-60 gap-[30px]">
    <img className="w-[35px] h-[35px] mt-2 " src="shoop.svg" alt="icon shop" />

    <button className="border border-[#DCDCDC] w-[55px] h-[55px] rounded-full"
            onClick={() => setShadowOverlay(false)}

    >×</button>
  </div>


  {/* Buttons over the image */}
  <div className="fixed top-[30px] left-[30px] z-60 flex gap-4">
    <button className="bg-[#F5F5F5] w-[74px] h-[74px] rounded-full flex items-center justify-center">
      <img src="/s.svg" alt="s icon" />
    </button>

    <button className="bg-[#F5F5F5] w-[74px] h-[74px] rounded-full flex items-center justify-center">
      <img src="/m.svg" alt="m icon" />
    </button>
  </div>
</div>
  
 

  <div className="flex flex-col md:flex-row items-center mt-[100px] gap-8">
  {/* صورة المنتج */}


  <div className="flex absolute mb-[400px] ml-[20px] gap-3" >
  <button className="w-[55px] h-[55px] bg-white rounded-full text-black mt-2 " >+</button>

  <button class="w-[70px] h-[69px] rounded-full bg-white/30 backdrop-blur flex items-center justify-center hover:bg-white/50 transition-colors" aria-label="Go to product">
    <div class="w-[55px] h-14 bg-white rounded-full border border-[#dcdcdc] flex items-center justify-center hover:bg-gray-50">
    <img alt="Cart" class="w-8 h-8" src="/prodact/shop.svg" />
      </div>
      </button>  
      </div>

  
  <img
    src={`${baseURL}${selectedProduct.image_url}`}
    alt={selectedProduct.name}
    className="w-[300px] md:w-[500px] h-auto object-contain rounded-[30px]"
  />
  <div className="absolute flex mt-[400px] ml-[20px] gap-3" >
 <div className="bg-white w-[79px] h-[94px] rounded-full">
   <img className="w-full h-full rounded-full p-1 " src="test.jpg" alt="" />
 </div>


 <div className="bg-white w-[79px] h-[94px] rounded-full" >
 <img className="w-full h-full rounded-full p-1 " src="test.jpg" alt="" />

 </div>
 <div className="bg-white w-[79px] h-[94px] rounded-full" >
 <img className="w-full h-full rounded-full p-1 " src="test.jpg" alt="" />

 </div>
</div>

  {/* تفاصيل المنتج */}
  <div className="flex-1 text-center md:text-left">
    <p className="text-[#FEB93C] text-sm">ACCESSORIES</p>
    <h3 className="text-[24px] md:text-[27px] font-bold mb-1">{selectedProduct.name}</h3>
    <p className="text-[#B7B7B7] text-base">Ref: 00GBM12</p>

    {/* زر الحالة */}
    <div className="my-3 flex flex-col ml-[900px] justify-center md:justify-start">
      <button className="bg-[#8FF30C] w-[104px] h-[36px] rounded-full text-white text-[16px]">
        IN STOCK
      </button>
    </div>

    {/* السعر */}
    <p className="text-[40px] md:text-[60px] text-[#FEB93C] font-semibold">
      ${selectedProduct.price}
      <span className="text-[#B7B7B7] text-[20px] md:text-[30px] line-through ml-2">
        $30.00
      </span>
    </p>

    {/* الوصف */}
    <p className="text-[#878787] text-sm mt-6">{selectedProduct.description}</p>

    {/* الكمية + زر الشراء */}
    <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
      {/* الكمية */}
      <div className="flex items-center gap-1">
        <button
          className="rounded-lg bg-[#ECECEC] w-[65.83px] h-[65.83px] flex items-center justify-center hover:bg-gray-200 transition-colors"
          onClick={() => setCount((prev) => Math.max(1, prev - 1))}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <div className="rounded-lg border border-[#ECECEC] w-[83.07px] h-[65.83px] flex items-center justify-center">
          {count.toString().padStart(2, '0')}
        </div>
        <button
          className="rounded-lg bg-[#ECECEC] w-[65.83px] h-[65.83px] flex items-center justify-center hover:bg-gray-200 transition-colors"
          onClick={() => setCount((prev) => prev + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* زر الشراء */}
      <button className="bg-[#FEB93C] w-[237px] text-[27px] h-[60px] md:h-[79px] text-white rounded-full text-lg flex items-center justify-center gap-2">
  Buy Now
  <img src="buynow.svg" alt="buynow" className="w-[39px] h-[39px]" />
</button>

    </div>
  </div>
</div>

  {/* <div className="ml-[8000px]"> */}


      {/* </div> */}

        {/* Size Selection */}
        {/* <div className="mb-6">
          <h4 className="font-medium mb-2">Size</h4>
          <div className="flex flex-wrap gap-2">
            {selectedProduct.variants?.map((variant) => (
              <label key={variant.size.id} className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  value={variant.size.size_label}
                  className="hidden peer"
                  checked={selectedSize === variant.size.size_label}
                  onChange={() => setSelectedSize(variant.size.size_label)}
                />
                <span className="inline-flex items-center justify-center w-10 h-8 rounded-full border border-gray-300 text-gray-500 peer-checked:bg-black peer-checked:text-white peer-checked:border-black text-sm">
                  {variant.size.size_label}
                </span>
              </label>
            ))}
          </div>
        </div> */}

        {/* Color Selection */}
        {/* <div className="mb-6">
          <h4 className="font-medium mb-2">Color</h4>
          <div className="flex flex-wrap gap-3">
            {selectedProduct.variants?.map((variant) => (
              <label key={variant.color.name} className="cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  value={variant.color.hex}
                  className="hidden peer"
                  checked={selectedColor === variant.color.hex}
                  onChange={() => setSelectedColor(variant.color.hex)}
                />
                <span
                  style={{ backgroundColor: variant.color.hex }}
                  className="w-8 h-8 rounded-full inline-flex items-center justify-center ring-2 ring-transparent peer-checked:ring-black"
                  aria-label={variant.color.color_name}
                />
              </label>
            ))}
          </div>
        </div> */}

        {/* Quantity and Add to Cart */}
        <div className="flex items-center gap-4 mb-8">
    
          {/* <button 
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button> */}
        </div >

        {/* Cart Items */}
        <div className="border-t border-gray-200 pt-4 mb-6">
          <div className="space-y-3 max-h-40 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{item.name}</span>
                  <span className="bg-black rounded-full w-5 h-5 text-white text-xs flex items-center justify-center">
                    {item.size}
                  </span>
                  <span 
                    style={{ backgroundColor: item.colorClass }}
                    className="rounded-full w-5 h-5"
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm">
                    {item.quantity.toString().padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium">
                    {item.price.toFixed(2)} Dhs
                  </span>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <img src="/delet.svg" alt="Delete item" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="flex justify-between pt-4 mt-4 border-t border-gray-200">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold mt-2">
            <span>Total</span>
            <span>{total} Dhs</span>
          </div> */}
        </div>


        <div className="flex gap-[50px]">
         {/* text */}
         <div className="w-[547px] h-[483px] bg-[#F7F7F7] rounded-[67px] ">
          
             <div className="flex gap-3 px-[40px] p-[60px]">
          <button className="bg-black w-[159px] h-[52px] text-white text-[17px] rounded-full" >DESCRIPTION</button>
          <button className="bg-[#E7E7E7] w-[201px] h-[52px] text-white text-[17px] rounded-full" >ADDITIONAL INFOS</button>
           </div>
           
           <div className="px-[40px]">
           <p 
           className=" w-[398px] h-[176px]   font-medium text-[22px] leading-[26px] text-black"
           >
           Lorem ipsum dolor sit amet consectetur. In donec quis etiam molestie eleifend. Quam eu amet a in fringilla turpis etiam id. Amet neque duis morbi blandit nec. Commodo neque dignissim et amet pulvinar enim.
           </p>
           </div>
        
         </div>

{/* ----------------------------------------------------------------------------- */}

<div className="relative w-[709px] h-[483px] bg-[#F7F7F7] bg-opacity-49 rounded-[67px] mx-auto px-[30px] p-[60px]">
  <div className="flex flex-col gap-6  justify-center">
    {/* Form Fields */}
    <div className="flex gap-[60px]">
    <div>
      <label className=" absolute font-medium text-[19px] leading-[23px] text-black">Nom Complet</label>
      <input 
        name="name"
        className="w-[300px] h-[59px] border border-[#E0E0E0] rounded-[100px] px-4 mt-1  text-[16px] leading-[19px] text-[#DBD5D5]"
        placeholder="Laila Rssi"
      />
    </div>

    <div>
      <label className=" absolute font-medium text-[19px] leading-[23px] text-black">Adresse</label>
      <input 
        name="address"
        className="w-[300px] h-[59px] border border-[#E0E0E0] rounded-[100px] px-4 mt-1  text-[16px] leading-[19px] text-[#DBD5D5]"
        placeholder="N12 Avenue Fountin Imm 12 P34"
      />
    </div>
    </div>

    <div className="flex mt-[60px] gap-[60px]">

    <div>
      <label className="absolute font-medium text-[19px] leading-[1px]  text-black">Telephone</label>
      <input 
        name="phone"
        className="w-[256px] h-[59px] border border-[#E0E0E0] rounded-[100px] px-4 mt-1  text-[16px] leading-[19px] text-[#DBD5D5]"
        placeholder="+3367868-988"
      />
    </div>

    <div>
      <p className=" font-medium text-[19px] ml-[55px] leading-[23px] text-black">
        Livraison Gratuite❤️🔥
      </p>
    </div>
    </div>

    {/* Buy Now Button */}
    <div className="w-[237px] h-[79px] bg-[#FEB93C] rounded-[100px] flex justify-center items-center mt-4">
  <button className="flex items-center text-[27px] gap-2 font-medium text-white">
    Buy Now
    <img src="buynow.svg" alt="buynow" className="w-[39px] h-[39px]" />
  </button>
</div>

<h1 className="text-[#BDBDBD] text-[24px] ml-[400px]">Total MAD:
 <span className="text-[#FEB93C] text-[38px]">565.00</span>

 </h1>

  </div>
</div>
</div>
</div>
</div>
</div>




       

)}
</div>
  );
}