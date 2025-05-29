"use client";
import React from 'react'
import { useState } from "react";

export default function Product() {
    const [shadowImage, setShadowImage] = useState(false);
    const [shadowOverlay, setShadowOverlay] = useState(false);
    const [count, setCount] = useState(0);

    /////////////////// Define products with their images



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
            subtitle: "Style & Edition"
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
            subtitle: "Style & Edition"
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
            subtitle: "Style & Edition"
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
            subtitle: "Style & Edition"
        }
    ];

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
    
    const text = "Exprimez Votre Style avec Audace | Hoodies, T-Shirts & Parfums";
    const start = "Start Shopping";
    const text1 = "Product Info";
    const text2 = "Hoodies Blockout Unique "; 
    const text3 = "Style & Edition";
    const text4 = "134.00 Dhs";
    const text44 =  "299.00";
    const text5 = "Hoodies Blockout Uniq.....";
    const text6 = "Hoodies Blockout Uniq...";
    const text7 = "Delivery";
    const total = "Total";
    const totalnbr = "268.00 Dhs";
    const Name = "Full Name";
    const address = "Full Adresse";
    const Phone = "Phone Number";

    const handleDelete = () => {
      console.log("Item deleted!");
    };

    return (
        <div className="bg-neutral-100 py-24">
            <div className="max-w-[1512px] mx-auto px-10">
                <div className="flex gap-8 overflow-x-scroll h-[971px] pb-4">
                    {products.map((product) => (
                        <div key={product.id} className='w-[467px] h-[598px] flex-shrink-0'>
                            <div className="rounded-xl border text-card-foreground border-none shadow-none bg-transparent">
                                <div className="p-0 relative">
                                    <div className="relative h-[598px]">
                                        <img 
                                            className="w-[467px] h-[598px] rounded-[40px] object-cover" 
                                            alt={`Product ${product.id}`} 
                                            src={product.images[currentImageIndices[product.id]]} 
                                        />
                                        <div className="absolute top-[29px] right-[29px]">
                                            <button 
                                                onClick={() => setShadowImage(!shadowImage)} 
                                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 w-[55px] h-[55px] rounded-full bg-white border border-[#dcdcdc] p-0"
                                            >
                                                <img 
                                                    onClick={() => setShadowOverlay(!shadowOverlay)} 
                                                    className="w-9 h-[35px]" 
                                                    alt="Favorite" 
                                                    src="prodact/icona.svg" 
                                                />
                                            </button>
                                        </div>

                                        {shadowImage && (
                                            <div className='fixed inset-0 bg-[#000000]/50 bg-opacity-50 flex items-center justify-center z-50'>
                                                <button 
                                                    onClick={() => setShadowImage(false)} 
                                                    className='absolute flex items-center justify-center rounded-[40px] bg-white w-[80px] h-[80px] ml-[1200px] mb-[300px]'
                                                >
                                                    exit
                                                </button>
                                                <img 
                                                    className='w-[467px] h-[598px] ' 
                                                    src={product.images[currentImageIndices[product.id]]} 
                                                    alt="product" 
                                                />
                                            </div>
                                        )}






                                         
{shadowOverlay && (


<div className="fixed inset-0 flex bg-black/20 bg-opacity-50  justify-center items overflow-hidden   z-100">
  <button
          onClick={() => setShadowOverlay(false)}
          className=' absolute  text-white w-[60px] h-[60px] ml-[320px] mt-0 rounded-full'
        >
            <img src="/exit.svg" alt="exit" />
       
        </button>





         <div className='bg-white w-[410px] h-[249px] rounded-[40px] mt-[50px]' >

<h1 
className='absolute font-bold text-[#141414] ml-[10px] mt-[30px] text-[12px]'
>{text1}</h1>


<button
className='absolute rounded-full bg-[#2F2F2F] w-[47px] h-[20px] text-white mt-[30px] ml-[90px] text-[10px]'
> 
Hoodies
</button>


<h1 className='absolute text-[#878787] text-[17px] mt-[50px] ml-[10px]'>

{text2}
</h1>

<h1 className='absolute text-[#878787] text-[17px] mt-[65px] ml-[10px]'>

{text3}

</h1>


<h1 className='absolute font-montreal  text-black text-[27px] ml-[10px]  mt-[90px] '>
{text4}
</h1>



<div className='absolute ml-[20px] mt-[140px] flex gap-1'>
  {/* S */}
  <label className='rounded-full border border-[#DDDDDD] w-[27px] h-[27px] text-black flex items-center justify-center cursor-pointer has-[:checked]:bg-black has-[:checked]:text-white'>
    <input type="radio" name="size" value="S" className='hidden' defaultChecked />
    <span>S</span>
  </label>
  
  {/* M */}
  <label className='rounded-full border border-[#DDDDDD] w-[30px] h-[27px] text-[#DDDDDD] flex items-center justify-center cursor-pointer has-[:checked]:bg-black has-[:checked]:text-white'>
    <input type="radio" name="size" value="M" className='hidden' />
    <span>M</span>
  </label>
  
  {/* L */}
  <label className='rounded-full border border-[#DDDDDD] w-[26px] h-[27px] text-[#DDDDDD] flex items-center justify-center cursor-pointer has-[:checked]:bg-black has-[:checked]:text-white'>
    <input type="radio" name="size" value="L" className='hidden' />
    <span>L</span>
  </label>
  
  {/* XL */}
  <label className='rounded-full border border-[#DDDDDD] w-[35px] h-[27px] text-[#DDDDDD] flex items-center justify-center cursor-pointer has-[:checked]:bg-black has-[:checked]:text-white'>
    <input type="radio" name="size" value="XL" className='hidden' />
    <span>XL</span>
  </label>
  
  {/* Over */}
  <label className='rounded-full border border-[#DDDDDD] w-[48px] h-[27px] text-[#DDDDDD] flex items-center justify-center cursor-pointer has-[:checked]:bg-black has-[:checked]:text-white'>
    <input type="radio" name="size" value="Over" className='hidden' />
    <span>Over</span>
  </label>
</div>


<div className='absolute ml-[20px] mt-[190px] flex gap-1'>
  {/* Gray */}
  <label className='bg-red-100 rounded-full w-[27px] h-[27px] cursor-pointer flex items-center justify-center'>
    <input type="radio" name="color" value="gray" className='hidden peer' />
    <span className='w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100'></span>
  </label>

  {/* Black */}
  <label className='bg-[#030303] rounded-full w-[27px] h-[27px] cursor-pointer flex items-center justify-center'>
    <input type="radio" name="color" value="black" className='hidden peer' defaultChecked />
    <span className='w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100'></span>
  </label>

  {/* Light Gray */}
  <label className='bg-[#BBBBBB] rounded-full w-[27px] h-[27px] cursor-pointer flex items-center justify-center'>
    <input type="radio" name="color" value="light-gray" className='hidden peer' />
    <span className='w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100'></span>
  </label>

  {/* Green */}
  <label className='bg-[#115123] rounded-full w-[27px] h-[27px] cursor-pointer flex items-center justify-center'>
    <input type="radio" name="color" value="green" className='hidden peer' />
    <span className='w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100'></span>
  </label>

  {/* Brown */}
  <label className='bg-[#6A200C] rounded-full w-[27px] h-[27px] cursor-pointer flex items-center justify-center'>
    <input type="radio" name="color" value="brown" className='hidden peer' />
    <span className='w-3 h-3 rounded-full bg-white opacity-0 peer-checked:opacity-100'></span>
  </label>
</div>




<div className="absolute ml-[220px] mt-[180px] flex gap-1">
      <button 
        className="rounded-[10px] bg-[#ECECEC] w-[42px] h-[42px]"
        onClick={() => setCount(prev => prev - 1)}
      >
        -
      </button>
      <div className="rounded-[10px] bg-[#ECECEC] w-[53px] h-[42px]">
        <span className='inline-flex items-center justify-center w-full h-full'>
          {count.toString().padStart(2, '0')}
        </span> 
      </div>
      <button 
        className="rounded-[10px] bg-[#ECECEC] w-[42px] h-[42px]"
        onClick={() => setCount(prev => prev + 1)}
      >
        +
      </button>
    </div>





<img 
className='ml-[220px] mt-[10px]'
src="/imgn.svg" alt="n" />



         </div>





         <div className='absolute bg-white w-[410px] h-[148px] rounded-[40px] mt-[300px] '>
            



           

           <h1 className='absolute text-[#878787] text-[11px] ml-[10px] mt-[20px] '>
            {text5}
           </h1>




           <h1
           className='absolute text-[#878787] text-[11px] ml-[10px] mt-[45px]'>
            {text5} 
           
           </h1>
            

            <h1 className='absolute text-[#878787] text-[11px] ml-[10px] mt-[75px] '>

                {text7}
            </h1>

<h1 className='absolute text-[#878787] text-[11px] ml-[350px] mt-[75px] '>Free</h1>
<button on className='absolute  w-[20px] h-[20px] rounded-full '></button>
            <div className="absolute w-[349px] h-0 ml-[10px] mt-[95px] border border-dashed border-[#E3E3E3]"></div>


       <h1 className='absolute text-[#363434] text-[11px] ml-[20px] mt-[105px] font-medium  '>
        {total}
        </h1>

        <h1 className='absolute text-[#363434] text-[15px] ml-[300px] mt-[100px] font-medium'>
          {totalnbr}
        </h1>



               <div className='absolute mt-[20px] ml-[170px] flex gap-1'> 
                <button className='bg-[#0D0D0D] rounded-full w-[19px] h-[19px] text-white text-[11px]'>S</button>
                <button className='bg-[#464445] rounded-full w-[19px] h-[19px] '></button>
               </div>

               <div className='absolute mt-[40px] ml-[170px] flex gap-1'> 
                <button className='bg-[#0D0D0D] rounded-full w-[21px] h-[19px] text-white text-[11px]'>XL</button>
                <button className='bg-[#464445] rounded-full w-[19px] h-[19px] '></button>
               </div>


                <div className='mt-[20px] ml-[240px] '>
                  <h1 className='absolute text-[#878787] text-[11px]'>01</h1>
                  <img 
                  className='absolute ml-[40px]'
                  src="/laiter.svg" alt="delet" />
                  <img 
                  className='absolute ml-[80px]'
                  src="delet.svg" alt="delet" />
                  <h1 className='absolute text-[11px] font-medium text-[#878787] ml-[100px]'>134.00</h1>
                </div>
                 
                 
                   <div className='mt-[40px] ml-[240px] '>
                  <h1 className='absolute text-[#878787] text-[11px]'>01</h1>
                    <img 
                  className='absolute ml-[40px]'
                  src="/laiter.svg" alt="delet" />
                  <img 
                  className='absolute ml-[80px]'
                  src="delet.svg" alt="delet" />
                 <h1 className='absolute text-[11px] font-medium text-[#878787] ml-[100px]'>134.00</h1>

                </div>


</div>



         <div className='absolute bg-white w-[410px] h-[326px] rounded-[40px] mt-[450px]' >

          






<div className="relative">

<div className="mb-6">
<label className="block  font-medium text-[13px] ml-[40px] leading-[16px] text-black mb-1">
{Name}
</label>
<div className="relative">
  <input 
    className="inline-flex items-center ml-[25px] justify-center w-[352px] h-[50px] border border-[#ECECEC] rounded-[11px] px-4  font-medium text-[15px] leading-[18px] text-black"
    placeholder="Nom Complet"
  />
</div>
</div>


<div className="mb-6">

<label className="block  font-medium text-[13px] ml-[50px]  leading-[16px] text-black mb-1">
  {address}
</label>
<div className="relative">
  <input 
    className="inline-flex items-center ml-[25px] w-[352px] h-[50px] border border-[#ECECEC] rounded-[11px] px-4  font-medium text-[15px] leading-[18px] text-black"
    placeholder="Ville, Adress"
  />
</div>
</div>

<div className="mb-6">

<label className="block  font-medium ml-[50px] text-[13px] leading-[16px] text-black mb-1">
{Phone}
</label>
<div className="relative">
  <input 
    className="inline-flex items-center ml-[25px] w-[352px] h-[50px] border border-[#ECECEC] rounded-[11px] px-4  font-medium text-[15px] leading-[18px] text-black"
    placeholder="+212 666-666666"
  />
</div>
</div>
</div>

<div className='mt-[50px] gap-[10px]'>

<button className='bg-[#161616] w-[259px] h-[70px]  text-white  rounded-[40px]'>
<img  src="/cloz.svg" alt="" />
    <h1 className='inline-flex items-center justify-center' >Acheter Maintenant</h1>

</button>
<div>

<button  className='bg-white w-[68px] h-[68px] ml-[40px] rounded-full' >
<img src="/lin.svg" alt="" />
</button>
</div>
</div>
</div>
</div>

)
}

                                        {/* Navigation buttons */}
                                        <div className="absolute bottom-[25px] top-[490px] left-[25px] flex gap-1">
                                            <button 
                                                onClick={() => handlePrevImage(product.id)}
                                                className='absolute bg-white rounded-[40px] w-[74px] h-[74px]'
                                            >
                                                <img 
                                                    className="inline-flex items-center justify-center gap-2 w-[42.43px] h-[42.43px]" 
                                                    alt="Previous" 
                                                    src="/s.svg" 
                                                />
                                            </button>
                                            <button 
                                                onClick={() => handleNextImage(product.id)}
                                                className='absolute bg-white rounded-[40px] left-[100px] w-[74px] h-[74px]'
                                            >
                                                <img 
                                                    className="inline-flex items-center justify-center gap-2 w-[42.43px] h-[42.43px]" 
                                                    alt="Next" 
                                                    src="/m.svg" 
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-black text-[32px]">
                                                        {product.price}
                                                    </span>
                                                    <div className="relative">
                                                        <span className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-[#a1a1a1] text-[22px]">
                                                            {product.originalPrice}
                                                        </span>
                                                        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] absolute top-3.5 w-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 w-[70px] h-[69px] rounded-full bg-[#ffffff42] backdrop-blur-[17px] p-0">
                                                <div className="w-[55px] h-14 bg-white rounded-full border-[0.5px] border-[#dcdcdc] flex items-center justify-center">
                                                    <img 
                                                        onClick={() => setShadowOverlay(!shadowOverlay)} 
                                                        alt="Cart" 
                                                        src="/prodact/shop.svg" 
                                                    />
                                                </div>
                                            </button>
                                        </div>
                                        <p  className='absolute ml-[330px] mt-[5px] text-black text-[32px]'>
                                            {product.discount}
                                        </p>
                                        <p className="mt-2 [font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-[#868686] text-[27px] leading-normal">
                                            {product.title} <br /> {product.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}