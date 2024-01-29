"use client"
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import {useRouter} from "next/navigation"
import logo from "../public/logor.jpg"
function Navbar() {
  const router = useRouter()
  const handleClick = () => {
    router.push("/")
  }
  return (
    <div className='h-1/8 bg-black flex items-center'>
        <div className='text-white ml-5 text-lg max-h-full flex hover:cursor-pointer' onClick={handleClick}>
            <Image className='max-h-full w-auto' src={logo} alt="Logo" />
            <Link className='my-auto -ml-10 z-50 transition transform duration-300 ease-in-out hover:scale-110' href="/">Home</Link>
        </div>
        <div className='text-white text-lg ml-50p flex gap-64' >
            <Link href="/python" className='transition transform duration-300 ease-in-out hover:scale-110'>
                Python
            </Link>
            <Link href="/javascript" className='transition transform duration-300 ease-in-out hover:scale-110'>
                Javascript
            </Link>
            <Link href="/history" className='transition transform duration-300 ease-in-out hover:scale-110'>  
                History
            </Link>
        </div>
    </div>
  )
}

export default Navbar