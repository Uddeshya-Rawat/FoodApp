// ProductCard.jsx
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex border border-green-300 shadow shadow-green-600 p-4 rounded-lg flex-col items-center sm:w-[250px]">
  <h2 className="font-bold text-green-900 text-lg">{product.name}</h2>
  <h1 className="text-center font-bold text-green-800">Price: ₹ {product.price}</h1>

  <div className="flex items-center gap-2 mt-4">
    <button
      onClick={decrease}
      className="px-3 py-1 bg-green-200 hover:bg-green-300 rounded-full font-bold text-lg"
    >
      -
    </button>
    <span className="text-lg font-medium">{quantity}</span>
    <button
      onClick={increase}
      className="px-3 py-1 bg-green-200 hover:bg-green-300 rounded-full font-bold text-lg"
    >
      +
    </button>
  </div>

  <button
    onClick={() => alert(`Added ${quantity} ${product.name}(s) to cart! Thank you`)}
    className="mt-3 px-4 py-2 bg-green-400 text-white rounded-xl hover:bg-green-700 transition-all duration-200"
  >
    Add to Cart
  </button>
</div>

  );
};

export default ProductCard;
