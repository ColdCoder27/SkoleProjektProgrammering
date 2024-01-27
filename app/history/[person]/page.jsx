"use client"
import React, { useState } from 'react'
import { personsData } from '@/data/persons-data'
function Page({params}) {
  console.log(params)
  const personName = params.person ? params.person.toLowerCase() : ""
  const index = personName ? personsData.findIndex(obj => obj.name.split(" ").join("").toLowerCase() === personName):0
  return(
    <div className='w-full mt-10 h-full flex flex-col items-center'>
      <p className="text-black text-2xl">{personsData[index].name}</p>
      <div className='w-1/4 mt-10 text-black text-lg text-center'>
        {personsData[index].story}
      </div>
    </div>  
  )
}

export default Page