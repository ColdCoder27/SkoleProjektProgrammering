"use client"
import Head from "next/head"
import React, { useState } from 'react'
import Image from 'next/image'
import { personsData, quotes } from '@/data/persons-data'
import { useRouter } from 'next/navigation'
import { IoIosSearch } from "react-icons/io";

function History() {
  const router = useRouter()
  const [input, setInput] = useState("")
  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input)
  }
  
  const compArray = personsData.map((obj)=>{
    const itemToAdd = quotes.find(element => element.name === obj.name)
    return {...obj, quote: itemToAdd ? itemToAdd.quote : null}
  })
  console.log(compArray)
  const elements = compArray.map((obj)=>{
    const person = obj.name
    const personW =  person.split(" ").join("").toLowerCase()
    const searchVal = personW.includes(input.toLowerCase())
    if(input===""){
      return(
        <div onClick={()=>{router.push(`/history/${person.split(" ").join("")}`)}} key={obj.name} className='mt-10 w-5/6 h-80 mx-auto bg-white rounded-xl flex transition transform duration-300 ease-in-out hover:scale-110 cursor-pointer'>
          <img src={obj.src} className="rounded-xl w-auto h-full" />
          <div className='flex flex-col items-center w-full'>
            <p className='text-center text-xl mt-5 font-semibold'>{person}</p>
            <p className='text-center mt-10 font-gamja-flower text-lg w-3/4'>-{obj.description}</p>
            <p className="mt-10 text-center w-1/2 font-gamja-flower text-md">"{obj.quote && obj.quote}"</p>
          </div>
        </div>
      )
    } if(searchVal) {
      return(
        <div onClick={()=>{router.push(`/history/${person.split(" ").join("")}`)}} key={obj.name} className='mt-10 w-5/6 h-80 mx-auto bg-white rounded-xl flex transition transform duration-300 ease-in-out hover:scale-110 cursor-pointer'>
          <img src={obj.src} className="rounded-xl w-auto h-full" />
          <div className='flex flex-col items-center w-full'>
            <p className='text-center text-xl mt-5 font-semibold'>{person}</p>
            <p className='text-center mt-10 font-gamja-flower text-lg w-3/4'>-{obj.description}</p>
            <p className="mt-10 text-center w-1/2 font-gamja-flower text-md">"{obj.quote}"</p>
          </div>
        </div>
      )
    }
  }) 
  return (
    <> 
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Single+Day&display=swap" rel="stylesheet" />
      </Head>
      <div className='mt-10 flex justify-center items-center'>
        <span className='mr-3 text-lg font-semibold'>{"Find a hero =>"}</span>
        <input type='text' onChange={handleChange} placeholder='Search' className='bg-white w-1/5 h-12 rounded-xl border-2 pl-2 text-lg font-bold'/>
        <IoIosSearch className='ml-4 text-3xl'/>
      </div>
      <div className=' w-5/5 h-full grid grid-cols-2'>
        {elements}
        <div className='h-20 w-full bg-whitesmoke'>

        </div>
      </div>
    </>  
  )
}

export default History