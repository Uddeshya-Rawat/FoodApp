import React, { useState } from 'react'

export const Cart = () => {
const [cartItems, setCartItems] = useState(() => {
  try {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Error parsing cart items from localStorage:", e);
    return [];
  }
});
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4 bg-gray-50">
  <h1 className="text-2xl font-bold mb-6">🛒 Cart Items</h1>

  <div className="w-full max-w-3xl space-y-2">
    {cartItems.map((cartItem, index) => (
      <div
        key={index}
        className="flex  sm:flex-row sm:items-center justify-evenly gap-2 p-4 bg-green-200 border border-green-700 rounded-lg shadow-lg"
      >
        <div className="w-1/3 text-left font-bold">{cartItem.itemName}</div>

  {/* Center: Quantity Controls */}
  <div className="w-1/3 flex justify-center items-center gap-2 font-bold">
    <button className="bg-green-400 px-3 py-1 rounded-full text-white font-bold">−</button>
    <div>{cartItem.quant}</div>
    <button className="bg-green-400 px-3 py-1 rounded-full text-white font-bold">+</button>
  </div>

        <div className="text-center sm:text-right font-semibold text-green-600">
          ₹{cartItem.price * cartItem.quant}
        </div>
      </div>
    ))}
  </div>
  <button className="mt-5 border bg-green-300 hover:bg-green-600 w-[70%] h-[65px] rounded-2xl font-extrabold">Order Now</button>
</div>

  )
}
