import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';


const Categories = () => {

    const {categories}=useContext(AppContext)


    return (
        <div className="mt-10 ml-10 mb-5">
            <p className="text-2xl md:text-3xl font-medium">Categories</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 mt-4 gap-8 ">
                {categories.map((category, index) => (
                    <NavLink key={index} to={`/products/${category.text}`}>
                        <div
                        key={index}
                        className={`cursor-pointer group py-3 px-3 gap-3 rounded-lg flex flex-col justify-center items-center ${category.bgColor} hover:scale-120 transition-transform duration-200`}
                        
                    >
                        <img
                            src={category.image}
                            alt={category.text}
                            className="group-hover:scale-110 transition-transform duration-300 w-14 h-14 object-contain"
                        />
                        <p className="text-sm font-medium mt-2">{category.text}</p>
                    </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;
