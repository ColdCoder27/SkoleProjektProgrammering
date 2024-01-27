"use client"
import React from 'react'
import Image from 'next/image'
import { personsData } from '@/data/persons-data'
import turing from "@/public/alanturning.jpg"
import { useRouter } from 'next/navigation'
function History() {
  const elements = personsData.map((obj)=>{
    const router = useRouter()
    const person = obj.name
    return(
      <div onClick={()=>{router.push(`/history/${person.split(" ").join("")}`)}} key={obj.name} className='mt-10 w-72 h-72 bg-white rounded-xl flex flex-col items-center'>
        <p className='text-center text-lg mt-5'>{person}</p>
        <Image src={turing} className="h-2/3 w-auto mt-5" />
      </div>
    )
  }) 
  return (
    <>
      <input type='text' className='bg-white w-1/5 h-10 rounded-xl mx-auto mt-7 border-black'/>
      <div className=' mx-auto w-4/5 h-full grid grid-cols-3 gap-4'>
        {elements}
        <div className='h-20 w-full bg-whitesmoke'>

        </div>
      </div>
    </>
  )
}

export default History