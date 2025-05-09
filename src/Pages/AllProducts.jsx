import React, { useContext} from 'react'
import { AppContext } from '../Context/AppContext'
import ProductCard from '../Components/ProductCard';


const AllProducts = () => {
  const { categories } = useContext(AppContext);

  return (
    <div className="h-full w-full p-5">
      {categories.map((category, index) => (
        <div key={index}>
          <div className="flex gap-5 justify-center items-center">
            <h1 className="text-2xl text-center font-semibold font-sans">{category.text}</h1>
            <img src={category.image} alt={category.text} className="w-14 h-14" />
          </div>

          <div className="flex p-3 mt-2 mb-5 gap-3 flex-wrap sm:justify-evenly">
            {category.products.map((product, idx) => (
              <ProductCard key={idx}  product={product}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
