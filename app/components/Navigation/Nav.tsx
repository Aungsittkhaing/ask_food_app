import Link from 'next/link'
import React from 'react'
import { GiFullPizza } from 'react-icons/gi'
import { IoMdBicycle } from 'react-icons/io'
import { MdOutlineShoppingBag } from 'react-icons/md'

interface Props {
    openNav : () => void
}
const Nav = ({openNav}: Props) => {
  return (
    <div className='h-[12vh] bg-white'>
        <div className="sm:w=[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
            {/* logo */}
            <div className="flex items-center space-x-2">
            <GiFullPizza className='text-orange-500 w-[3.2rem] h-[3.2rem] sm:w-[4.4rem] sm:h-[4.4rem]' />
            <h1 className='text-[20px] sm:text-[30px] font-semibold text-slate-400'>Food King</h1>
            </div>
            {/* nav link */}
            <ul className='hidden lg:flex items-center space-x-10'>
                <li className='text-[20px] text-slate-400 font-medium hover:text-red-500'>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className='text-[20px] text-slate-400 font-medium hover:text-red-500'>
                    <Link href={'/'}>Shop</Link>
                </li>
                <li className='text-[20px] text-slate-400 font-medium hover:text-red-500'>
                    <Link href={'/'}>Menu</Link>
                </li>
                <li className='text-[20px] text-slate-400 font-medium hover:text-red-500'>
                    <Link href={'/'}>Contact</Link>
                </li>
            </ul>
            {/* buttons */}
            <div className="flex items-center space-x-4">
                <button className='px-4 py-2 sm:px-6 sm:py-3  bg-blue-900 transition-all duration-200 hover:bg-red-500 flex items-center rounded-md space-x-2 text-white'>
                    <span>
                    <IoMdBicycle className='w-[2.2rem] h-[2.2rem] sm:w-[1.2rem] sm:h-[1.2rem]' />
                    </span>
                    <span className='font-bold'>Order Now</span>
                </button>
                <button className='sm:px-6 sm:py-3 px-4 py-2 hover:bg-green-600 transition-all duration-200 bg-orange-500 flex items-center rounded-md text-white'>
            <MdOutlineShoppingBag className='w-[2.2rem] h-[2.2rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
            </button>
            <GiFullPizza onClick={openNav} className='lg:hidden w-[2rem] h-[2rem] text-orange-500'/>
            </div>
        </div>
    </div>
  )
}

export default Nav