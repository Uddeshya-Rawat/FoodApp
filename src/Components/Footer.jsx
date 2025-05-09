import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-300 text-black py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} FoodieDelight. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <p  className="hover:underline">About</p>
          <p className="hover:underline">Contact</p>
          <p className="hover:underline">Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer