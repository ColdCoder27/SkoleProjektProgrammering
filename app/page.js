"use client"
import DescBox from "@/components/DescBox";
import Image from "next/image";
import pythonIcon from "../public/python.jpg"
import { useContext } from "react";
import { Context } from "./context";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Home() {
  const name = "Alfred"
  const [text, count] = useTypewriter({
    words: ["Welcome Alfred"],
    delaySpeed: 2000
  })
  return (
    <>
      <p className="absolute top-32 left-28 text-3xl">{text}<Cursor/></p>
      <div className="text-red-500 flex justify-center mt-32 h-full gap-20">
        
        <DescBox url="/python" head="python">
          Python is used in everything from machine learning to backend webdevelopment. Learn the powerfull language here!
        </DescBox>
        <DescBox url="/javascript" head="Javascript">Javascript is the MOST popular popular programming langauge in the world, and a corner stone in webdevelopment. Learn it Here!</DescBox>
        <DescBox url="/history" >The history of computing and code is a facinating one. Help power your motivation with tales of the innovators of the past!</DescBox>
      </div>
    </>
  );
}
