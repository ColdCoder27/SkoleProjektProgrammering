import DescBox from "@/components/DescBox";
import Image from "next/image";
import pythonIcon from "../public/python.jpg"

export default function Home() {
  return (
    <div className="text-red-500 flex justify-center mt-20 h-full gap-20">
      
      <DescBox url="/python" head="python">
        Python is used in everything from machine learning to backend webdevelopment. Learn the powerfull language here!
      </DescBox>
      <DescBox url="/javascript" head="Javascript">Javascript is the MOST popular popular programming langauge in the world, and a corner stone in webdevelopment. Learn it Here!</DescBox>
      <DescBox url="/history" >The history of computing and code is a facinating one. Help power your motivation with tales of the innovators of the past!</DescBox>
    </div>
  );
}
