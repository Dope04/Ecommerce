import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:[22%]'>
      <div className="relative w-full h-80">
        <Image src="https://images.pexels.com/photos/28292103/pexels-photo-28292103/free-photo-of-a-woman-with-afro-hair-posing-for-a-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw" 
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image src="https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          fill
          sizes="25vw" 
          className='absolute object-cover rounded-md'
          />
          </div>
          <div className="flex justify-between">
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>$49</span>
          </div>
          <div className=""></div>
      </Link>
    </div>
  )
}

export default ProductList