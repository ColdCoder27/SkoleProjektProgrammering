"use client"
import { useRouter } from 'next/navigation'
import React, { useState, useEffect, useRef } from 'react'
function Page({params}) {
  const [personsData, setPersonsData] = useState(undefined)
  const [remove, setRemove] = useState(false)
  const isMounted = useRef(false)
  console.log(params)
  const id = params.id && params.id
  const router = useRouter()
  useEffect(()=>{
    fetch(`https://localhost:3001/api/persons/${id}`,  {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
  })
      .then(res=> res.json())
      .then(res => setPersonsData(res))
  }, [])


  useEffect(()=>{
    isMounted.current = true
  }, [])
  const onClickDel = () => {
      if(isMounted.current === true){
        fetch(`https://localhost:3001/api/persons/${id}`, {
          method: 'Delete',
          headers: {
            'Content-Type': 'application/json',
          }
      })
          .then(res=> res.json())
          .then(()=> router.push("/history"))
          .catch(err=>console.log(err))
  }
}
  if(personsData){
    return(
      <div className='w-full mt-10 h-full flex flex-col items-center'>
        <p className="text-black text-2xl">{personsData.name}</p>
        <div className='w-1/4 mt-10 text-black text-lg text-center'>
          {personsData.story}
        </div>
        <button onClick={onClickDel} className='w-1/6 h-5p bg-red-600 rounded-xl absolute top-32 right-16 text-white flex justify-center items-center text-lg font-bold  transition transform duration-300 ease-in-out hover:scale-110 cursor-pointer hover:bg-red-400'>Delete</button>
      </div>  
    )
  } else{
    return(
      <div>
        Loading...
      </div>
    )
  }
}

export default Page