import LearningBox from '@/components/LearningBox'
import React from 'react'
import {jsArray} from "@/data/learning-data.jsx"
function Javascript() {
  return (
    <div className='h-full w-full flex'>
      <LearningBox array={jsArray} type="javascript"/>
    </div>
  )
}

export default Javascript