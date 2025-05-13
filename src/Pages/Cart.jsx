import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext';

export const Cart = () => {

  const {items,setItems}=useContext(AppContext)
  const [cartItems, setCartItems] = useState(items);

  // handle increase and decrase of quantity
  const handleIncrease = (itemName) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.itemName === itemName)

    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quant: updatedItems[itemIndex].quant + 1
      };
      return updatedItems;
    })

    
  }

  


  const handleDecrease = (itemName) => {
 const itemIndex = items.findIndex((cartItem) => cartItem.itemName === itemName)

    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quant: updatedItems[itemIndex].quant >= 1 ? updatedItems[itemIndex].quant -1 : updatedItems[itemIndex].quant // if quant is greater then qualt one than only decrease
      };
      return updatedItems;
    })
    
   

  }


  // handle order now
   const handleOrderNow=()=>{
      if(items.length <=0){
        alert("please add products in cart")
      }else{
        alert("Thanks for Ordering")
        setItems([])
      }
   }



  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">🛒 Cart Items</h1>

      <div className="w-full max-w-3xl space-y-2">


        {items.length<=0 ? <div className='text-green-600 text-2xl text-center font-extrabold'> Empty Cart</div>:items.map((cartItem, index) => (
          <div
            key={index}
            className="flex  sm:flex-row sm:items-center justify-evenly gap-2 p-4 bg-green-200 border border-green-700 rounded-lg shadow-lg"
          >
            <div className="w-1/3 text-left font-bold">{cartItem.itemName}</div>

            {/* Center: Quantity Controls */}
            <div className="w-1/3 flex justify-center items-center gap-2 font-bold">
              <button className="bg-green-400 px-3 py-1 rounded-full text-white font-bold hover:cursor-pointer" onClick={() => handleDecrease(cartItem.itemName)}>-</button>
              <div>{cartItem.quant}</div>
              <button className="bg-green-400 px-3 py-1 rounded-full text-white font-bold hover:cursor-pointer" onClick={() => handleIncrease(cartItem.itemName)}>+</button>
            </div>

            <div className="text-center sm:text-right font-semibold text-green-600">
              ₹{cartItem.price * cartItem.quant}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-5 border bg-green-300 hover:bg-green-600 w-[70%] h-[65px] rounded-2xl font-extrabold hover:cursor-pointer" onClick={handleOrderNow}>Order Now</button>
    </div>

  )
}
