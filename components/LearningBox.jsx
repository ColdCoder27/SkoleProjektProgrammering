"use client"
import React, {useState} from "react";
import { FaPython } from "react-icons/fa"
import { TbBrandJavascript } from "react-icons/tb";
function LearningBox({array, type}) {
    const [state, setState] = useState(0)
    const onClickPluss = () => {
        state < 3 ? setState(prevState => prevState + 1) : setState(0)
    }
    const onClickMinus = () => {
        state === 0 ? setState(3) : setState(prevState => prevState - 1)
    }
  return (
    <div className="w-3/10 h-2/3 bg-white rounded-xl flex flex-col items-center absolute top-40 left-20">
        <h2 className="text-xl mt-10">{array[state].header}</h2>
        {type === "python" ? <FaPython className="absolute top-1 left-1"/> : <TbBrandJavascript className="absolute top-1 left-1"/>}
        <div className="w-3/4 text-center mt-10">
            {array[state].text}
        </div>
        <div className="w-3/4 mt-5">
            <p className="text-lg">Task:</p>
            <div className="text-center mt-3">{array[state].task}</div>
        </div>
        <div className="flex gap-5 mt-9 w-full items-center">
            <button className="bg-blue-400 w-4/10 h-10 text-white rounded-lg ml-auto" onClick={onClickMinus}>Previous</button>
            <button className="bg-blue-400 w-4/10 h-10 text-white rounded-lg mr-auto" onClick={onClickPluss}>Next</button>
        </div>
    </div>
  )
}

export default LearningBox