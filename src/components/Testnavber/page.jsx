'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const [shadowMean, setShadowMean] = useState(false);

  // ==== Cart State (demo) ====
  const [items, setItems] = useState([
    { id: 1, title: 'Interior Product GYT', price: 39.0, qty: 1, img: '/placeholder-1.png' },
    { id: 2, title: 'Interior Product GYT', price: 39.0, qty: 2, img: '/placeholder-2.png' },
    { id: 3, title: 'Interior Product GYT', price: 39.0, qty: 1, img: '/placeholder-3.png' },
    { id: 4, title: 'Interior Product GYT', price: 39.0, qty: 1, img: '/placeholder-4.png' },
  ]);

  const cartCount = useMemo(() => items.reduce((s, it) => s + it.qty, 0), [items]);
  const subTotal = useMemo(() => items.reduce((s, it) => s + it.qty * it.price, 0), [items]);
  const shipping = useMemo(() => (subTotal > 0 ? 6.99 : 0), [subTotal]); // مثال ثابت
  const total = useMemo(() => subTotal + shipping, [subTotal, shipping]);

  const fmtUSD = (n) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: Math.max(0, it.qty + delta) } : it))
        .filter((it) => it.qty > 0)
    );
  };

  const removeItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  return (
      <div className="relative">
        <header className="top-0 left-0 w-full z-10 flex items-center justify-between px-10 py-3">
          <img
            className="w-[110.94px] h-[26.35px] object-cover"
            alt="toullz logo"
            src="/logodesktop.svg"
          />

          <div className="flex items-center gap-4">
            <Link href="/" className="no-underline">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-full bg-[#2e2e2e] text-[#f3f3f3] border-[#dddddd]">
                <span className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-[17px]">
                  Home
                </span>
              </button>
            </Link>

            <Link href="/allproduact" className="no-underline">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-full border-[#dddddd]">
                <span className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-[#2e2e2e] text-[17px]">
                  All produact
                </span>
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                aria-label="Open cart"
                onClick={() => setShadowMean(true)}
                className="relative"
              >
                <img className="w-[35px] h-[35px]" alt="cart" src="/shop.svg" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FEB93C] text-white text-[11px] rounded-full px-2 py-[1px]">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            <Link href="/" aria-label="menu">
              <img className="w-[35px] h-[35px]" alt="menu" src="/meun.svg" />
            </Link>
          </div>
        </header>

      {/* ====== Cart / Checkout Modal ====== */}
      {shadowMean && (
        <div
          className="fixed inset-0 bg-black/50 flex flex-col items-center z-50 w-full h-full p-1 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShadowMean(false);
          }}
        >
          <div
            className="bg-white overflow-y-auto p-[10px] w-full h-full"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Checkout"
          >
            {/* exit */}
            <div className="flex p-1 py-1">
              <button
                className="bg-[#F5F5F5] w-[60px] h-[60px] rounded-full flex items-center justify-center"
                onClick={() => setShadowMean(false)}
                aria-label="Close"
                title="Close"
              >
                <span className="sr-only">Close</span>
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>

            {/* title */}
            <div className="flex items-center justify-center">
              <h1 className="text-[26px] md:text-[30px] text-[#000000]">Checkout Your Order</h1>
            </div>

            {/* stepper */}
            <div className="flex gap-2 items-center justify-center mt-2">
              <button className="bg-[#FEB93C] w-[176px] h-[50px] md:h-[61px] rounded-full text-white text-[17px] md:text-[19px]">
                Select Product
              </button>

              <div className="h-px w-12 md:w-16 bg-[#FEB93C]" />

              <button className="border border-[#FEB93C] w-[176px] h-[50px] md:h-[61px] rounded-full text-black text-[17px] md:text-[19px]">
                Add Infos
              </button>

              <div className="h-px w-12 md:w-16 bg-[#FEB93C]" />

              <button className="border border-[#E3DDDD] w-[176px] h-[50px] md:h-[61px] rounded-full text-[#E3DDDD] text-[17px] md:text-[19px]">
                Paid Order
              </button>
            </div>

            {/* headings */}
            <div className="mt-[40px] md:mt-[80px] max-w-[1200px] mx-auto px-3 md:px-0 flex items-center justify-between">
              <h2 className="text-[18px] md:text-[22px] text-black">Delivery Information</h2>
              <h2 className="text-[18px] md:text-[22px] text-black">Order Summary</h2>
            </div>

            {/* content: grid */}
            <div className="mt-4 max-w-[1200px] mx-auto px-3 md:px-0 grid grid-cols-1 lg:grid-cols-[795px_556px] gap-4 md:gap-6 justify-center">
              {/* Delivery Information */}
              <div className="bg-[#F7F7F7] p-[24px] md:p-[40px] rounded-[30px] md:rounded-[50px] w-full">
                {/* row 1 */}
                <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px] mt-[10px] items-center md:items-start justify-center md:justify-start">
                  <div className="flex flex-col">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      className="border border-[#E0E0E0] w-[300px] h-[48px] md:h-[59px] rounded-full px-4"
                      type="text"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      className="border border-[#E0E0E0] w-[300px] h-[48px] md:h-[59px] rounded-full px-4"
                      type="tel"
                      placeholder="+212 6 .. .. .. .."
                    />
                  </div>
                </div>

                {/* row 2 */}
                <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px] items-center md:items-end justify-center md:justify-between mt-[30px] md:mt-[60px]">
                  <div className="flex flex-col">
                    <label htmlFor="address">Address</label>
                    <input
                      id="address"
                      className="border border-[#E0E0E0] w-[300px] h-[48px] md:h-[59px] rounded-full px-4"
                      type="text"
                      placeholder="Street, City"
                    />
                  </div>

                  <button className="bg-[#FEB93C] w-[220px] md:w-[252px] h-[60px] md:h-[79px] flex items-center justify-center text-[18px] md:text-[24px] text-white rounded-full">
                    Get Payed
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-[#F7F7F7] p-[20px] md:py-[40px] md:px-[20px] w-full rounded-[30px] md:rounded-[50px]">
                {/* list */}
                <div className="w-full h-[240px] overflow-y-auto pr-1">
                  <div className="space-y-3">
                    {items.map((it) => (
                      <div key={it.id} className="flex gap-[20px] md:gap-[50px] items-center">
                        {/* image */}
                        <div className="bg-white w-[94px] h-[94px] md:h-[112px] rounded-full overflow-hidden flex items-center justify-center">
                          {/* استعمل Image إذا عندك صور حقيقية */}
                          <Image
                            src={it.img}
                            alt={it.title}
                            width={94}
                            height={112}
                            className="object-cover w-[94px] h-[94px] md:h-[112px]"
                          />
                        </div>

                        {/* text + actions */}
                        <div className="flex-1 space-y-2 md:space-y-3">
                          <div className="flex gap-2">
                            <button
                              className="rounded-md border px-2 py-1 text-xs"
                              title="Edit"
                              aria-label="Edit"
                            >
                              <img src="/editt.svg" alt="" className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => removeItem(it.id)}
                              className="rounded-md border px-2 py-1 text-xs"
                              title="Delete"
                              aria-label="Delete"
                            >
                              <img src="/delet.svg" alt="" className="w-4 h-4" />
                            </button>
                          </div>

                          <h3 className="text-black text-[14px] md:text-[16px] leading-tight">
                            {it.title}
                          </h3>

                          <div className="flex items-center justify-between">
                            <span className="text-[#FEB93C] text-[18px] md:text-[23px]">
                              {fmtUSD(it.price)}
                            </span>

                            <div className="flex gap-1 items-center">
                              <button
                                onClick={() => updateQty(it.id, -1)}
                                className="w-[29px] h-[29px] bg-[#ECECEC] rounded-[10px] text-black"
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <span className="w-[36.6px] h-[29px] border border-[#ECECEC] bg-white rounded-[10px] text-[12px] text-black flex items-center justify-center">
                                {it.qty}
                              </span>
                              <button
                                onClick={() => updateQty(it.id, 1)}
                                className="w-[29px] h-[29px] bg-[#ECECEC] rounded-[10px] text-black"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {items.length === 0 && (
                      <p className="text-sm text-gray-500 text-center py-6">Your cart is empty.</p>
                    )}
                  </div>
                </div>

                {/* totals */}
                <div className="space-y-6 mt-[24px]">
                  <div className="border border-[#BDBDBD]" />
                  <div className="flex items-center justify-between px-2">
                    <h4 className="text-[#BDBDBD] text-[18px] md:text-[24px]">Subtotal:</h4>
                    <span className="text-[#606060] text-[22px] md:text-[33px]">
                      {fmtUSD(subTotal)}
                    </span>
                  </div>
                  <div className="border border-[#BDBDBD]" />
                  <div className="flex items-center justify-between px-2">
                    <h4 className="text-[#BDBDBD] text-[18px] md:text-[24px]">Shipping:</h4>
                    <span className="text-[#606060] text-[22px] md:text-[33px]">
                      {fmtUSD(shipping)}
                    </span>
                  </div>
                  <div className="border border-[#BDBDBD]" />
                  <div className="flex items-center justify-between px-2">
                    <h4 className="text-[#BDBDBD] text-[18px] md:text-[24px]">Total:</h4>
                    <span className="text-[#606060] text-[22px] md:text-[33px]">
                      {fmtUSD(total)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* spacer / footer area */}
            <div className="w-full h-[40px] md:h-[60px]" />
          </div>
        </div>
      )}
    </div>
  );
}
