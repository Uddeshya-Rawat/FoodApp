import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import ProductCard from '../Components/ProductCard';

const Products = () => {
  const { categories } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const { category } = useParams(); // e.g. Fruits, Dairy, etc.

  useEffect(() => {
    const data = categories.find(cat => cat.text.toLowerCase() === category.toLowerCase());  // find data
    if (data && data.products) {  // checks
      setProducts(data.products);
    } else {
      setProducts([]);
    }
  }, [category, categories]);

  return (
    <div className="">
      <h1 className="text-center font-bold text-2xl capitalize my-4">{category}</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;