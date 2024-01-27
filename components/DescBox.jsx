
import Image from "next/image"
import React from 'react'
import pyImage from "../public/python.jpg"
import jsImage from "../public/realjava.jpg"
import history from "../public/history.jpg"
import Button from "./Button"

function DescBox({url, head, children}) {
    const image = head ? (head === "python" ? pyImage : jsImage) : history
    return (
        <div className='bg-white h-2/3 w-1/4 rounded-lg flex flex-col items-center relative transition transform duration-300 ease-in-out hover:scale-110'>
            <div className="flex flex-col items-center justify-center w-4/5 h-5/6 gap-8  flex-grow">
                <h2 className='text-3xl font-semibold text-black'>{head ? head : "History"}</h2>
                <Image src={image} className="w-1/2"/>
                <p className="text-center text-black">{children}</p>
                <Button url={url} head={head}/>
            </div>
        </div>
    )
}

export default DescBox