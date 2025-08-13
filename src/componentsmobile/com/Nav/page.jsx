'use client';

import React, { useEffect, useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const [shadowMean, setShadowMean] = useState(false);

  // --- Cart state ---
  const [items, setItems] = useState([
    { id: 1, name: 'tInterior Product GYT', price: 39.0, qty: 1, img: '/placeholder-1.png' },
    { id: 2, name: 'tInterior Product GYT', price: 39.0, qty: 1, img: '/placeholder-2.png' },
    { id: 3, name: 'tInterior Product GYT', price: 39.0, qty: 1, img: '/placeholder-3.png' },
  ]);

  // Conversion rate USD→MAD (adjust as needed)
  const [usdToMad, setUsdToMad] = useState(10.0);

  // Derived values
  const subtotal = useMemo(() => items.reduce((s, it) => s + it.price * it.qty, 0), [items]);
  const shipping = useMemo(() => (items.length ? 0 : 0), [items]); // keep layout; set to 0 by default
  const totalUSD = useMemo(() => subtotal + shipping, [subtotal, shipping]);
  const totalMAD = useMemo(() => totalUSD * usdToMad, [totalUSD, usdToMad]);
  const totalQty = useMemo(() => items.reduce((s, it) => s + it.qty, 0), [items]);

  // Helpers
  const fmt = useCallback((n) => `$${n.toFixed(2)}`,[/* stable */]);
  const fmtMAD = useCallback((n) => `${n.toFixed(2)} MAD`,[]);

  // Actions
  const inc = (id) => setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)));
  const dec = (id) => setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: Math.max(0, it.qty - 1) } : it)).filter((it) => it.qty > 0));
  const removeItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setShadowMean(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Mock submit
  const handleCheckout = () => {
    const orderPayload = {
      totals: { subtotal, shipping, totalUSD, totalMAD, usdToMad },
      items,
      customer: {},
    };
    // Keep styling intact; just log
    console.log('Checkout payload →', orderPayload);
    alert('Order ready. Check console for payload.');
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-[90px] mt-[10px] w-full ">
        {/* الشعار */}
        <Image src="/logodesktop.svg" alt="logo" width={110.94} height={26.35} />

        {/* زر All product */}
        <Link href="/allproduact">
          <button className="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-transparent text-[#2e2e2e] rounded-full px-[15px] py-2 border-[#dddddd]">
            <span className="font-medium text-sm">All Product</span>
          </button>
        </Link>

        {/* أيقونات السلة والقائمة */}
        <div className="flex items-center gap-3 relative">
          <h1 className=" absolute mb-[30px] ml-[10px] bg-[#FEB93C] inline-flex items-center rounded-full text-white p-1 py-1 px-2 text-[10px]"> {totalQty} </h1>

          <img
            className="w-[26px] h-[26px] cursor-pointer"
            alt="shop"
            src="/shop.svg"
            onClick={() => setShadowMean(true)}
          />

          <img className="w-[26px] h-[26px]" alt="menu" src="/meun.svg" />
        </div>
      </div>

      {shadowMean && (
        <div className="fixed inset-0 bg-black/50 flex flex-col items-center z-50 w-full h-full p-1 overflow-y-auto" onClick={(e) => { if (e.target === e.currentTarget) setShadowMean(false); }}>
          <div className="bg-white overflow-y-auto p-[10px] w-full h-full ">
            <div className="flex gap-[60px] p-2 py-[20px]">
              <div>
                <button onClick={() => setShadowMean(false)} className="bg-[#F5F5F5] w-[74px] h-[74px] rounded-full  flex items-center justify-center">
                  <img src="phone/yasar.svg" alt="exit" className="w-[30px] h-[30px]" />
                </button>
              </div>

              <div className=" flex gap-1 mt-[10px]">
                <button className="border border-[#FEB93C] text-black  w-[109px] h-[43px] rounded-full">Add Infos</button>
                <img className="w-[14.5px]" src="khatt.svg " alt="" />
                <button className="border border-[#E3DDDD] text-[#E3DDDD]  w-[109px] h-[43px] rounded-full">Payed Order</button>
              </div>
            </div>

            <div className="flex p-3 ">
              <h1 className="text-black text-[21px]">Order Summary</h1>
            </div>

            {/* prodact */}
            <div className="bg-[#F6F6F6] w-full h-[540px] p-[30px] px-[25px] rounded-[50px]">
              {/* all prodact */}
              <div className="space-y-3 h-[247px] overflow-y-auto">
                {items.map((it) => (
                  <div className="flex gap-[30px]" key={it.id}>
                    {/* image */}
                    <div className="bg-white w-[94px] h-[112px] rounded-full"></div>

                    {/* icone text pice */}
                    <div>
                      <div className="flex gap-1">
                        <img src="editt.svg" alt="edit" />
                        <img src="delet.svg" alt="delete" onClick={() => removeItem(it.id)} className="cursor-pointer" />
                      </div>
                      <h1 className="text-[16px] text-black">{it.name}</h1>
                      <h1 className="text-[#FEB93C] text-[23px]">{fmt(it.price)}</h1>
                    </div>

                    {/* rev */}
                    <div className="flex gap-1 items-center">
                      <button className="bg-[#ECECEC] w-[29px] h-[29px] rounded-[10px]" onClick={() => dec(it.id)}>
                        -
                      </button>
                      <div className="border border-[#ECECEC] bg-white w-[36.6px] h-[29px] text-black text-[9px] rounded-[10px] flex items-center justify-center">
                        {String(it.qty).padStart(2, '0')}
                      </div>
                      <button className="bg-[#ECECEC] w-[29px] h-[29px] rounded-[10px]" onClick={() => inc(it.id)}>
                        +
                      </button>
                    </div>
                  </div>
                ))}

                {!items.length && (
                  <div className="text-center text-sm text-[#606060]">No items in cart.</div>
                )}
              </div>

              <div className="border border-[#ECECEC] mt-[20px]"></div>
              <div className="flex gap-[100px] ml-[10px] mt-[10px]">
                <h1 className="text-[#BDBDBD] text-[18px]">Subtotal:</h1>
                <h1 className="text-[#606060] text-[27px]">{fmt(subtotal)}</h1>
              </div>
              <div className="border border-[#ECECEC] mt-[20px]"></div>
              <div className="flex gap-[100px] ml-[10px] mt-[10px]">
                <h1 className="text-[#BDBDBD] text-[18px]">Shipping:</h1>
                <h1 className="text-[#606060] text-[27px]">{fmt(shipping)}</h1>
              </div>
              <div className="border border-[#ECECEC] mt-[20px]"></div>
              <div className="flex gap-[100px] ml-[10px] mt-[10px]">
                <h1 className="text-[#BDBDBD] text-[18px]">Total USD:</h1>
                <h1 className="text-[#FEB93C] text-[38px]">{fmt(totalUSD)}</h1>
              </div>
            </div>

            {/* form input */}
            <div className="border border-[#ECECEC] bg-white mt-[20px]  p-[50px] w-full h-[522px] rounded-[40px]">
              <div className="space-y-4">
                <div>
                  <h1>Full Name </h1>
                  <input type="text" className="border border-[#ECECEC] rounded-[10px] w-full h-[50px]" placeholder="Nom Complet" />
                </div>

                <div>
                  <h1>Full Adresse</h1>
                  <input type="text" className="border border-[#ECECEC] rounded-[10px] w-full h-[50px]" />
                </div>

                <div>
                  <h1>Phone Number</h1>
                  <input type="tel" className="border border-[#ECECEC] rounded-[10px] w-full h-[50px]" />
                </div>

                <div className="flex gap-1 items-end">
                  <h1 className="text-[#BDBDBD] mt-3 text-[24px]">Total MAD:</h1>
                  <h1 className="text-[#FEB93C]  text-[38px]">{fmtMAD(totalMAD)}</h1>
                </div>

                <div className="flex items-center gap-3">
                  <button className="bg-[#FEB93C] w-[237px] h-[70px] rounded-full text-white text-[25px] flex items-center justify-center gap-3" onClick={handleCheckout}>
                    Get Payed
                    <img className="w-[39px] h-[39px]" src="sho.svg" alt="submit" />
                  </button>

                  {/* Optional small input to adjust conversion without visual changes */}
                  <input
                    aria-label="USD to MAD"
                    title="USD→MAD"
                    type="number"
                    step="0.01"
                    value={usdToMad}
                    onChange={(e) => setUsdToMad(Math.max(0, Number(e.target.value) || 0))}
                    className="border border-[#ECECEC] rounded-[10px] w-[120px] h-[50px] px-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}