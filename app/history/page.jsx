"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { personsData } from '@/data/persons-data'
import turing from "@/public/alanturning.jpg"
import { useRouter } from 'next/navigation'
import { IoIosSearch } from "react-icons/io";

function History() {
  const router = useRouter()
  const [input, setInput] = useState("")
  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input)
  }
  const elements = personsData.map((obj)=>{
    const person = obj.name
    const personW =  person.split(" ").join("").toLowerCase()
    const searchVal = personW.includes(input.toLowerCase())
    console.log(input)
    console.log(personW)
    if(input===""){
      return(
        <div onClick={()=>{router.push(`/history/${person.split(" ").join("")}`)}} key={obj.name} className='mt-10 w-80 h-80 bg-white rounded-xl flex flex-col items-center transition transform duration-300 ease-in-out hover:scale-110 cursor-pointer'>
          <p className='text-center text-lg mt-5'>{person}</p>
          <img src={obj.src} className="rounded-xl mt-5 w-5/6 h-2/3" />
          <p className='text-center'>---{obj.description}---</p>
        </div>
      )
    } if(searchVal) {
      return(
        <div onClick={()=>{router.push(`/history/${person.split(" ").join("")}`)}} key={obj.name} className=' mt-10 w-80 h-80 bg-white rounded-xl flex flex-col items-center transition transform duration-300 ease-in-out hover:scale-110 cursor-pointer' >
          <p className='text-center text-lg mt-5'>{person}</p>
          <img src={obj.src} className="rounded-xl mt-5 w-5/6 h-2/3" />
          <p className='text-center'>---{obj.description}---</p>
        </div>
      )
    }
  }) 
  return (
    <> 
      <div className='mt-10 flex justify-center items-center'>
        <span className='mr-3 text-lg font-semibold'>{"Find a hero =>"}</span>
        <input type='text' onChange={handleChange} placeholder='Search' className='bg-white w-1/5 h-12 rounded-xl border-2 pl-2 text-lg font-bold'/>
        <IoIosSearch className='ml-4 text-3xl'/>
      </div>
      <div className=' mx-auto w-4/5 h-full grid grid-cols-3 gap-4'>
        {elements}
      <div className='h-20 w-full bg-whitesmoke'>

        </div>
      </div>
    </>  
  )
}

export default History