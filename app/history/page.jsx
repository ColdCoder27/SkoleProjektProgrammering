"use client"
import Head from "next/head"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { personsData, quotes } from '@/data/persons-data'
import { useRouter } from 'next/navigation'
import { IoIosSearch } from "react-icons/io";
import { BsFillPlusSquareFill } from "react-icons/bs";
import ProfileIcon from "@/components/ProfileIcon"

function History() {
  const [personsArray, setPersonsArray] = useState(undefined)
  const [toggleForm, setToggleForm] = useState(false)
  const router = useRouter()
  const [input, setInput] = useState("")
  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input)
  }
  
  const addPerson = () => {
    router.push("./addPerson")
  }
  fetch(`https://localhost:3001/api/persons`)
    .then(res => res.json())
    .then(resj=>setPersonsArray(resj))
  const pLength = personsArray && personsArray.length
  const calc = pLength && pLength % 2 
  const elements = personsArray!==undefined && personsArray.map((obj)=>{
    const person = obj.name
    const personW =  person.split(" ").join("").toLowerCase()
    const searchVal = personW.includes(input.toLowerCase())
    if(input===""){
      return(
        <div onClick={()=>{router.push(`/history/${obj._id}`)}} key={obj.name} className='mt-10 w-5/6 h-80 mx-auto bg-white rounded-xl flex transition transform duration-300 ease-in-out hover:scale-110 cursor-pointer'>
          <img src={obj.src} className="rounded-xl h-full max-w-80" />
          <div className='flex flex-col items-center w-full'>
            <p className='text-center text-xl mt-5 font-semibold'>{person}</p>
            <p className='text-center mt-10 font-gamja-flower text-lg w-3/4'>- {obj.description}</p>
            <p className="mt-10 text-center w-1/2 font-gamja-flower text-md">&quot;{obj.quote && obj.quote}&quot;</p>
            <p className="text-center absolute bottom-4 right-18 font-gamja-flower text-xs">written by: {obj.author ? obj.author : "an anonymous admirer"}</p>
          </div>
        </div>
      )
    } if(searchVal) {
      return(
        <div onClick={()=>{router.push(`/history/${person.split(" ").join("")}`)}} key={obj.name} className='mt-10 w-5/6 h-80 mx-auto bg-white rounded-xl flex transition transform duration-300 ease-in-out hover:scale-110 cursor-pointer'>
          <img src={obj.src} className="rounded-xl h-full max-w-80" />
          <div className='flex flex-col items-center w-full'>
            <p className='text-center text-xl mt-5 font-semibold'>{person}</p>
            <p className='text-center mt-10 font-gamja-flower text-lg w-3/4'>- {obj.description}</p>
            <p className="mt-10 text-center w-1/2 font-gamja-flower text-md">&quot;{obj.quote}&quot;</p>
            <p>{person}</p>
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
      <div onClick={addPerson} className="w-1/6 h-5p bg-blue-900 rounded-xl absolute top-32 left-16 text-white flex justify-center items-center text-lg font-bold  transition transform duration-300 ease-in-out hover:scale-110 cursor-pointer hover:bg-blue-400">
          Legg til en Person
          <BsFillPlusSquareFill className="ml-3 text-xl"/>
      </div>
      <div className=' w-5/5 h-full grid grid-cols-2'>
        {elements}
      </div>
      <div className='h-20 w-full bg-whitesmoke'>
      
      </div>

    </>  
  )
}

export default History