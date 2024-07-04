import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  showNav : boolean,
  closeNav : ()=> void
}
const MobileNav = ({showNav, closeNav}:Props) => {
  const navStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
  return (
    <div className={`fixed ${navStyle} transition-all duration-500 left-0 right-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}>
      <AiOutlineClose onClick={closeNav} className="absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white " />
      {/* nav div */}
      <div className={`flex flex-col justify-center ${navStyle} items-center transition-all duration-500 delay-200 bg-blue-500 w-[70%] h-[100%]`}>
        {/* nav link */}
        <ul className="space-y-10">
          <li className="text-[35px] font-medium hover:text-orange-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-orange-500">
            <Link href={"/"}>Shop</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-orange-500">
            <Link href={"/"}>Menu</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-orange-500">
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav