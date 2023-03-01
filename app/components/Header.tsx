import Image from 'next/image'
import React from 'react'
import Logo from '../../public/images/logo.png'

function Header() {
  return (
    <nav className='flex  bg-blue-900 text-white justify-between'>
        <Image src={Logo} alt='Panaverse' width={80} height={80}/>
        <ul className='flex px-10 py-6 space-x-6 justify-end   '>
            <li className='cursor-pointer '>Home</li>
            <li className='cursor-pointer'>Course</li>
            <li className='cursor-pointer'>Abour</li>
            <li className='cursor-pointer'>Portfolio</li>
            <li className='cursor-pointer'>Fee</li>
        </ul>
     
    </nav>
  )
}

export default Header
