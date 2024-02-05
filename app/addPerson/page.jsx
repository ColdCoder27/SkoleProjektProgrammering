"use client"
import React, { useState } from 'react'
import { useRouter } from "next/navigation"
function AddPersons() {
    const [author, setAuthor] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [src, setSrc] = useState("")
    const [quote, setQuote] = useState("")
    const [story, setStory] = useState("")
    const router = useRouter()

    const nameChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const descriptionChange = (e) => {
        e.preventDefault()
        setDescription(e.target.value)
    }
    const quoteChange = (e) => {
        e.preventDefault()
        setQuote(e.target.value)
    }
    const srcChange = (e) => {
        e.preventDefault()
        setSrc(e.target.value)
    }
    const storyChange = (e) => {
        e.preventDefault()
        setStory(e.target.value)
    }
    const authorChange = (e) => {
        e.preventDefault()
        setAuthor(e.target.value)
    }

    const onSumbit = (e) => {
        e.preventDefault()
        const formObject = {
          name,
          story,
          src,
          description,
          quote,
          author       
        }
        fetch('https://localhost:3001/api/persons', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formObject), // Converting the object to a JSON string
        })
        .then(response => response.json())
        .then(res => console.log(res))
        .then(()=> router.push("/history"))
        .catch(err=>console.log("unsuccessfull:",err))
    }
    if(JSON.parse(localStorage.getItem("loggedIn")) === true){return (
        <>
            <div className='w-1/2 h-5/4 bg-white mx-auto mt-10 pt-5 rounded-2xl'>
                <form onSubmit={onSumbit} className='flex flex-col items-center'>
                    <p className='text-center text-3xl'>Add your person:</p>
                    <p className='text-center mt-8'>author Name:</p>
                    <input placeholder="Optional" className=' text-center h-10 border-2 border-black w-1/2 rounded-2xl mt-3' type="text" id="author" name='author' value={author} onChange={authorChange}/>
                    <p className='text-center mt-8'>Persons name:</p>
                    <input className='h-10 border-2 border-black w-1/2 rounded-2xl mt-3' type="text" id="name" name='name' value={name} onChange={nameChange}/>
                    <p className='mt-3'>A quick, dramatic description or nickname:</p>
                    <input className='h-10 border-2 border-black w-1/2 rounded-2xl mt-3' type="text" id="description" name='description' value={description} onChange={descriptionChange}/>
                    <p className='mt-3'>Image Link</p>
                    <input className='h-10 border-2 border-black w-3/4 rounded-2xl mt-3' type="text" id="src" name='src' value={src} onChange={srcChange}/>
                    <p className='mt-5'>A quote: try to pick a showy one </p>
                    <input className='h-10 border-2 border-black w-3/4 rounded-2xl mt-3' type="text" id="quote" name='quote' value={quote} onChange={quoteChange}/>
                    <p className='mt-3'>The story: Go into as much detail as you wish</p>
                    <input className='h-32 border-2 border-black w-3/4 rounded-2xl mt-3' type="text" id="story" name='story' value={story} onChange={storyChange}/>
                    <button className='bg-blue-900 h-12 w-56 mt-10 rounded-2xl text-white'>Sumbit Person</button>
                </form>
            </div>
            <div className='h-16 bg-inherit'>

            </div>
        </>
    )
    }
  else{
    router.push("/loggIn")
    return(
      <div>loading...</div>
    )
  }
}
export default AddPersons
