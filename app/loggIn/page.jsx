"use client"
import React, { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { Context } from '../context'

function page() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const {rerender, setRerender} = useContext(Context)

  const emailChange = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }
  const passwordChange = (e) => {
    setPassword(e.target.value)
    console.log(password)
  }
  const onSumbit = (e) => {
    e.preventDefault()
    const formObject = {
      email,
      password
    }
    fetch('https://localhost:3001/api/loggIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject), // Converting the object to a JSON string
    })
    .then(response => response.json()) // Parsing the JSON response
    .then(data => {
        console.log(data)
        const jasonAuthKey = JSON.stringify(data)
        jasonAuthKey.value 
        ? console.log("Password doesn't match or email not found")
        : (
            localStorage.setItem("authorized", jasonAuthKey),
            localStorage.setItem("loggedIn", true)
            
        )    
        return Promise.resolve
    })
    .then(()=>{
        setRerender(!rerender)
    })
    .catch(error => console.error('Error:', error)); // Handling any errors
  } 
  const signup = () => {
    router.push("/signUp")
  }
  useEffect(()=>{
    if(rerender===true){
        router.back()
    }
  }, [rerender])
  return (
    <>
      <p className='text-center mt-6 text-red-600 text-lg'>Logg/Sign in to see the page</p>
      <div className="w-1/3 h-60p mx-auto bg-white mt-10 pt-8 rounded-2xl">
        <h1 className="text-center text-2xl ">Logg in</h1>
        <form className='flex flex-col items-center' onSubmit={onSumbit}>
          <label className='mt-3' htmlFor='email'>Email</label>
          <input type="text" id='email' name='email' value={email} onChange={emailChange} className="w-3/4 border-2 border-black h-12 rounded-xl mb-5"/>
          <label htmlFor="password">Password</label>
          <input type="text" id='password' name='password' value={password} onChange={passwordChange} className="w-3/4 border-2 border-black h-12 rounded-xl"/>
          <button className='bg-blue-900 h-12 w-3/4 rounded-2xl text-white mt-10 text-lg'>Logg In</button>
        </form>
        <h2 className="text-center mt-8">Don't have an Account?</h2>
        <h2 className="text-center mt-4 font-bold hover:cursor-pointer" onClick={signup}>Sign In Here</h2>
      </div>
      <button className='w-52 h-10 bg-blue-900 text-white rounded-2xl fixed bottom-10 left-10 text-lg' onClick={signup}>Sign Up</button>
    </> 
  )
}

export default page