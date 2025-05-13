// ProductCard.jsx
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const {  setItems } = useContext(AppContext);


  // function add items to local storage and update the quantity
  function addToCart() {
    setItems(prevItems => {
      const quantityToAdd = quantity;
      const itemName = product.name;


      //find the index of existing item to increase the quantity
      const existingIndex = prevItems.findIndex(item => item.itemName === itemName);


      //checks and add quantity
      if (existingIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quant: updatedItems[existingIndex].quant + quantityToAdd,
        };
        return updatedItems;
      } else {
        return [
          ...prevItems,
          {
            itemName: itemName,
            quant: quantityToAdd,
            price: product.price,
          },
        ];
      }
    });

   
  }

  // increase and decrease quantity
  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // jsx
  return (
    <div className="flex border border-green-300 shadow shadow-green-600 p-4 rounded-lg flex-col items-center sm:w-[250px]">
      <h2 className="font-bold text-green-900 text-lg">{product.name}</h2>
      <h1 className="text-center font-bold text-green-800">Price: ₹ {product.price}</h1>

      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={decrease}
          className="px-3 py-1 bg-green-200 hover:bg-green-300 rounded-full font-bold text-lg hover:cursor-pointer"
        >
          -
        </button>
        <span className="text-lg font-medium">{quantity}</span>
        <button
          onClick={increase}
          className="px-3 py-1 bg-green-200 hover:bg-green-300 rounded-full font-bold text-lg hover:cursor-pointer"
        >
          +
        </button>
      </div>

      <button
        onClick={() => addToCart()}
        className="mt-3 px-4 py-2 bg-green-400 text-white rounded-xl hover:bg-green-700 transition-all duration-200 hover:cursor-pointer"
      >
        Add to Cart
      </button>
    </div>

  );
};

export default ProductCard;
