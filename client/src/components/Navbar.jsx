/*import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const [user,setUser] = useState(null);
    const navigate = useNavigate()
      return (
    <div className='flex items-center justify-between py-4'>
    <Link to='/'> <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' /> </Link>
    <div>
        {
        user ? 
        <div>
            <button>
                <img  className ='w-5' src={assets.credit_star} alt="" />
                <p>Credits left : 50</p>
            </button>
            <p>Hi, GreatStack</p>
            <div className='relative group'>
                <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
                <div className='absolute hidden group-hover:block
                top-0 right-0 z-10 text-black rounded pt-12'>
<ul>
    <li>Logout</li>
</ul>
                </div>
            </div>
        </div>
          : 
        <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={()=>navigate('/buy')} className='cursor-pointer'>Pricing</p>
            <button className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
        </div>
}
        </div>
    </div>
   
  )
}

export default Navbar */



import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
const Navbar = () => {
 const {user} = useContext(AppContext )
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <button onClick={()=>navigate('./buy')} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700">
              <img
                className="w-5"
                src={assets.credit_star}
                alt="Credits Icon"
              />
              <p className="text-xs sm:text-sm font-medium text-gray-600">Credits left: {user.credits}</p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, {user.name}</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                className="w-10 drop-shadow cursor-pointer"
                alt="Profile Icon"
              />
              <div
                className="absolute hidden group-hover:block top-12 right-0 z-10 bg-white text-black 
                           shadow-lg rounded px-4 py-2"
              >
                <ul className=" list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li
                    onClick={handleLogout}
                    className="cursor-pointer hover:text-red-500"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate("/buy")}
              className="cursor-pointer hover:text-gray-700"
            >
              Pricing
            </p>
            <button
              onClick={() => navigate("/login")}
              className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
