'use client';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PizzaSeven from "@/public/images/pizza-seven.svg";
import PizzaSodaEight from "@/public/images/pizza-soda-eight.svg";
import Image from 'next/image';
import { IoMdBicycle } from 'react-icons/io';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const Hero = () => {
  return (
    <Carousel 
    arrows={false} 
    additionalTransfrom={0} 
    autoPlay={true} 
    autoPlaySpeed={4000} 
    centerMode={false} 
    infinite 
    responsive={responsive} 
    itemClass='item' 
    showDots={true}>
      {/* list hero slide */}
        <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-yellow-600 clip-path">
            <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 gap-[2rem] justify-center items-center mx-auto'>
            <Image src={PizzaSeven} className='hidden md:block' alt='pizza three' priority={true}/>
            {/* information */}
            <div className="">
              <h1 className='font-semibold text-[40px] text-orange-500'>Fast Food Pizza</h1>
              <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold'>Best <br />Pizza</h1>
              <p className='text-white text-[18px] text-opacity-70 mt-[1rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos accusamus ullam provident quam aut atque, quas voluptatum nemo amet, pariatur alias! Esse, hic dolorum.
              </p>
              <button className='py-3 mt-[2rem] px-6 bg-orange-500 transition-all duration-200 hover:bg-orange-700 flex items-center rounded-md space-x-2 text-white text-[16px]'>
                    <span>
                    <IoMdBicycle className='w-[2.7rem] h-[2.7rem]' />
                    </span>
                    <span className='font-bold'>Order Now</span>
                </button>
            </div>
            </div>
        </div>
        {/* second slide */}
        <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-green-700 clip-path">
            <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 gap-[2rem] justify-center items-center mx-auto'>
            <Image src={PizzaSodaEight} className='hidden md:block' alt='pizza three' priority={true}/>
            {/* information */}
            <div className="">
              <h1 className='font-semibold text-[40px] text-orange-500'>Tasty Pizza</h1>
              <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold'>Top <br />Pizza-Soda</h1>
              <p className='text-white text-[18px] text-opacity-70 mt-[1rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos accusamus ullam provident quam aut atque, quas voluptatum nemo amet, pariatur alias! Esse, hic dolorum.
              </p>
              <button className='py-3 mt-[2rem] px-6 bg-orange-500 transition-all duration-200 hover:bg-orange-700 flex items-center rounded-md space-x-2 text-white text-[16px]'>
                    <span>
                    <IoMdBicycle className='w-[2.7rem] h-[2.7rem]' />
                    </span>
                    <span className='font-bold'>Order Now</span>
                </button>
            </div>
            </div>
        </div>
    </Carousel>
  )
}

export default Hero