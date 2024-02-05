"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
function Python() {
  
  const router = useRouter()
  if(JSON.parse(localStorage.getItem("loggedIn")) === true){
    return (
      <div className='h-full w-full flex'>
        Python page
      </div>
    )
  } else{
    window.history.pushState({}, '', '/python');
    router.push("/loggIn")
    return(
      <div>loading...</div>
    )
  }
}

export default Python