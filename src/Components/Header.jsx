import React, { useContext} from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';




import logoImage from "../assets/logoImage.jpeg"
import profilePhoto from "../assets/profilephoto.jpeg"
import { AppContext } from '../Context/AppContext';

export const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
  
    const handleMenu = () => setOpen(!open);
    const handleCloseMenu = () => setOpen(false);

    const{items}=useContext(AppContext)

    

   

    
  
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
  
          
  
          {/* Cart */}
          <div className="relative cursor-pointer hover:cursor-pointer" onClick={() => navigate("/cart")}>
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
              <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{items.length}</button>
          </div>
  
          {/* Profile */}
          <div className='relative group'>
            <img alt="profile" className='w-10' src={profilePhoto} />
          </div>
        </div>
      </nav>
    );
  };
