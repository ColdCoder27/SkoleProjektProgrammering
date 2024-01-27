"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function Button({url, head}) {
  const router = useRouter()
  const handleClick = ()=> {
    router.push(url)
  }
    return (
    <button className='h-12 min-h-12 w-full bg-blue-400 text-white text-lg font-semibold rounded-md transition transform duration-300 ease-in-out hover:scale-110' onClick={handleClick}>Lær deg {head}</button>
  )
}

export default Button

