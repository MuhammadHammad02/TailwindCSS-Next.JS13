import Image from 'next/image'
import React from 'react'
import Meta from '../../public/images/Meta.jpg'


function Baner() {
  return (
    <main className='flex justify-around bg-sky-300 py-80'>
        <div className='px-10'>
        <div className='py-1 text-3xl font-bold text-slate-900'>Panaverse Dao</div>
        
        <p className='py-2  font-semibold text-slate-900'>A Community of Web 3 and Metaverse Developers</p>
        <div className='py-4'>
        <button className='bg-blue-900 p-4 text-white hover:bg-slate-200 hover:text-black'>Apply Now</button>
        </div>
        </div>
        <div className=' flex items-center mx-4 pl-20'>
        <Image src={Meta} alt="Panaverse" width={500} height={500}/>
        </div>

    </main>  )
}

export default Baner
