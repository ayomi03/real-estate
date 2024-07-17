// 'use client'

// import Image from "next/image"
// import Link from 'next/link'
// import React from 'react'
// import logo from '@/public/logo.png'
// import Button from './Button'
// import { HiMenuAlt3 } from "react-icons/hi";
// import { IoIosClose } from "react-icons/io";


// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center py-[5px] px-[7rem] my-0 mx-[auto] max-w-[1240px] shadow-sm">
//         <div>
//             <Image
//               src={logo}
//               alt="Realeat logo"
//               width={175}
//               height={200}
//             />
//         </div>

//         <div>
//           <ul className="flex items-center gap-[4rem]">
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/projects">Projects</a>
//             </li>
//             <li>
//               <a href="/properties">Properties</a>
//             </li>
//             <li>
//               <a href="/contacts">Contacts</a>
//             </li>

//             <Button />
//           </ul>

//           <div className="md:hidden">
//             <HiMenuAlt3 size={30} />  
//             <IoIosClose size={40} />

//           </div>
//         </div>
        
//     </nav>
//   )
// }


'use client'

import Image from "next/image";
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '@/public/logo.png';
import Button from './Button';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  document.addEventListener('scroll', (e)=>{
    if(window.scrollY > 150){
      setScrolled(true)
    }else{
      setScrolled(false)
    } 
  })

  return (
    <nav className={`${scrolled ? 'bg-black' :'bg-white'} bg-opacity-90 shadow-sm fixed left-0 top-0 w-full z-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start items-center lg:w-0 lg:flex-1">
            <Link href="/">
                <Image src={logo} alt="Realeat logo" width={175} height={200} priority={true} />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
          <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <IoIosClose className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" aria-hidden="true" />
              )}
          </button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <nav className="flex space-x-10">
              
                <Link href='/' className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Home
                </Link>
              
                <Link href='/projects' className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Projects
                </Link>
                <Link href='/properties' className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Properties
                </Link>
              
                <Link href='/contacts' className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Contacts
                </Link>
              <Button />
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle className to show/hide */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href='/' className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 " onClick={closeMenu}>
              Home
            </Link>
            <Link href='/projects' className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>
              Projects
            </Link>
            <Link href='/properties' className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>
              Properties
            </Link>
            <Link href='/contacts' className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>
              Contacts
            </Link>
          <Button />
        </div>
      </div>
    </nav>
  );
}
