"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import profileFig from "../public/profileIcon.jpg"
function ProfileIcon() {
    const [hover, setHover] = useState(false)
    const mouseEnter = () => {
        setHover(true)
    }
    const mouseLeave = () => {
        setHover(false)
    }
    return (
      <>
        {hover ? <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className=' items-center w-96 h-20 rounded-t-full rounded-b-full bg-white absolute top-28 right-24 z-999 flex flex-row-reverse'>
            <Image src={profileFig} className='rounded-full w-20'/>
            <p className='mr-4 hover:font-semibold cursor-pointer'>My posts</p>
            <p className='mr-4 hover:font-semibold cursor-pointer'>My favorites</p>
            <p className='mr-4 hover:font-semibold cursor-pointer'>My account</p>
        </div>
        : <div onMouseLeave={mouseLeave}  onMouseEnter={mouseEnter} className='w-20 rounded-full bg-white absolute top-28 right-24 z-999'>
            <Image src={profileFig} className='rounded-full w-20'/>
        </div>}
      </>
  )
}

export default ProfileIcon