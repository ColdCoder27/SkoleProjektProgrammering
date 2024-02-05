"use client"
import { fetchFunction } from '@/data/fetch-function'
import LearningBox from '@/components/LearningBox'
import React, { useState } from 'react'
import {jsArray} from "@/data/learning-data.jsx"
import { useRouter } from 'next/navigation'
function Javascript() {
  const [sourceCode, setSourceCode] = useState("")
  const [show, setShow] = useState(false)
  const [compiledCode, setCompiledCode] = useState("")
  const router = useRouter()
  
  const sourceCodeChange = (e) => {
    e.preventDefault()
    setSourceCode(e.target.value)
    console.log(sourceCode)
  }
  const output = () => {
    const startIndex = sourceCode.indexOf('"') + 1;
    const endIndex = sourceCode.lastIndexOf('"');
    const value = sourceCode.slice(startIndex, endIndex);
    setCompiledCode(value)
    setShow(true)
  }
  const outputRem = () => {
    setCompiledCode("")
    setShow(false)
  }
  if(JSON.parse(localStorage.getItem("loggedIn")) === true){
    return (
      <div className='h-full w-full flex'>
        <LearningBox array={jsArray} type="javascript"/>
        <div className='flex flex-col absolute right-44 bottom-20'>
          <input className='h-96 w-96 bg-white rounded-2xl text-black text-center' type="text" name="sourceCode" id='sourceCode' value={sourceCode} onChange={sourceCodeChange}/>
          {show
          ? <button onClick={outputRem} className='w-1/1 h-12 bg-blue-900 rounded-xl text-white flex justify-center items-center text-lg font-bold  transition transform duration-300 ease-in-out hover:scale-110 cursor-pointer hover:bg-blue-400'>Clear and run new</button>
          :<button onClick={output} className='w-1/1 h-12 bg-blue-900 rounded-xl text-white flex justify-center items-center text-lg font-bold  transition transform duration-300 ease-in-out hover:scale-110 cursor-pointer hover:bg-blue-400'>Run code</button>
          
          }
          { show &&  <div className='w-full mt-3 border-2 border-black h-24 bg-white rounded-2xl text-black'>
              <p className='text-center mt-2'>Output:</p>
              <p className='text-center mt-3'>{compiledCode}</p>
            </div> }
        </div>
        </div>
    )
  } else{
    window.history.pushState({}, '', '/javascript');
    router.push("/loggIn")
    return(
      <div>loading...</div>
    )
  }
}

export default Javascript