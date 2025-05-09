import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';




import logoImage from "../assets/logoImage.jpeg"
import profilePhoto from "../assets/profilephoto.jpeg"

export const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
  
    const handleMenu = () => setOpen(!open);
    const handleCloseMenu = () => setOpen(false);
  
    return (
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-green-300 bg-white relative shadow-md">
        
        {/* Logo */}
        <NavLink to="/">
        <img className="h-9" src={logoImage} alt="logo" />
        </NavLink>
  
        {/* Mobile menu toggle & dropdown */}
        <div className="sm:hidden flex items-center justify-end w-full">
          <button onClick={handleMenu}>
            {open ? (
              <XMarkIcon className="h-7 w-7 cursor-pointer" />
            ) : (
              <Bars3Icon className="h-7 w-7 cursor-pointer" />
            )}
          </button>
  
          {open && (
            <div className="absolute top-16 right-6 bg-white border border-green-300 rounded-lg shadow-lg flex flex-col gap-4 p-4 z-50">
              <NavLink to="/cart" onClick={handleCloseMenu}>Cart</NavLink>
              <NavLink to="/products" onClick={handleCloseMenu}>All Products</NavLink>
            </div>
          )}
        </div>
  
        {/* Desktop menu */}
        <div className="hidden sm:flex items-center gap-8 text-black">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">All Products</NavLink>
  
          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              type="text"
              placeholder="Search products"
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            />
            {/* Search icon */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
  
          {/* Cart */}
          <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
              <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">0</button>
          </div>
  
          {/* Profile */}
          <div className='relative group'>
            <img alt="profile" className='w-10' src={profilePhoto} />
          </div>
        </div>
      </nav>
    );
  };
