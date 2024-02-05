"use client"
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link';
import {useRouter} from "next/navigation"
import logo from "../public/logor.jpg"
import { Context } from '@/app/context';
import { IoPersonCircleOutline } from "react-icons/io5";
function Navbar() {
  const {rerender, setRerender} = useContext(Context)
  const router = useRouter()
  useEffect(()=>{
    const auth = typeof window !== "undefined" && localStorage.getItem("authorized") !== null && JSON.parse(localStorage.getItem("authorized"))
    const name  = auth ? auth.name : null
}, [rerender])
  const handleClick = () => {
    router.push("/")
  }
  const loggOut = () => {
    localStorage.setItem("loggedIn", false)
    localStorage.removeItem("authorized")
    setRerender(!rerender)
    router.push("/")
    console.log("logged Out")
  }
  useEffect(()=>{
    console.log("reRendered")
  },[rerender])
  return (
    <div className='h-1/8 bg-black flex items-center'>
        <div className='text-white ml-5 text-lg max-h-full flex hover:cursor-pointer' onClick={handleClick}>
            <Image className='max-h-full w-auto' src={logo} alt="Logo" />
            <Link className='my-auto -ml-10 z-50 transition transform duration-300 ease-in-out hover:scale-110' href="/">Home</Link>
        </div>
        <div className='text-white text-lg ml-50p flex gap-52' >
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
        {typeof window !== "undefined" && JSON.parse(localStorage.getItem("loggedIn")) === true
        ? <button onClick={loggOut} className='text-white bg-blue-900 w-36 mr-10 ml-36 h-10 rounded-2xl'>Logg Out</button>
        : <button className="text-white bg-blue-900 w-36 mr-10 ml-36 h-10 rounded-2xl" onClick={()=>router.push("/loggIn")}>Logg In</button>}
    </div>
  )
}

export default Navbar