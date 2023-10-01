// "use client"
import { getOneGame } from "@/utils/getOneGame"
import Link from "next/link"
// import { Suspense, useEffect, useState } from "react"
import { BsFillCircleFill } from "react-icons/bs"
import { FaPlayCircle } from "react-icons/fa"
import { CgUnavailable } from "react-icons/cg"
import { ChangeImage } from "./components/ChangeImage"
import { Metadata } from "next"
import { notFound } from "next/navigation"
type Params = {
    params:{
        id: string
    }
}


// const changeImage = () =>{
//   const [currentImage, setCurrentImage] = useState(0)
//   useEffect(()=>{
//     const interval = setInterval(() =>{
//       setCurrentImage(prev => prev + 1)
//     },2000)
//     return () => clearInterval(interval)
//   })
  
// }

export  async function generateMetadata({ params: {id} }:Params): Promise<Metadata>{
  const game: Promise<oneGame> = getOneGame(id)
  const data = await game

  if (!data.title){
    return{
      title: `Not Found`
    }
  }

  return{
    title: data.title,
    description: `page of ${data.title}`
  }
}


export default async function page({ params: {id} }:Params) {
  const game: Promise<oneGame> = getOneGame(id)
  const data = await game
  // console.log(data)

  if(!data.title) notFound()

  return (
    <main className="flex flex-col gap-5 py-10">
      <div className="flex flex-col lg:flex-row gap-5 px-7 py-20">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div>
            <img src={data.thumbnail} className="w-[400px] rounded-lg"/>
          </div>
          <div>
            <ChangeImage data={data.screenshots} />
          </div>
        </div>
        <div className="flex flex-col gap-3 text-white relative">
          <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="text-xl font-semibold">
            {data.title}
          </div>
          <div className="flex flex-row gap-2">
          <div>
            {data.genre}
          </div>
          <div>
            {data.publisher}
          </div>
          </div>
          </div>
          <div className="flex flex-col gap-2 text-slate-300">
            {data.minimum_system_requirements ?
            <div>
                      <div className="flex flex-col gap-2 text-slate-300">
                        {data.minimum_system_requirements.graphics}
                      </div>
                      <div>
                        {data.minimum_system_requirements.memory}
                      </div>
                      <div>
                        {data.minimum_system_requirements.os}
                      </div>
                      <div>
                        {data.minimum_system_requirements.processor}
                      </div>
                      <div>
                        {data.minimum_system_requirements.storage}
                      </div>
            </div>
            :
            <div className="flex flex-row gap-2 justify-center items-center">
              <div className="line-through">
                System requiresment not available now
              </div>
              <CgUnavailable className="text-xl"/>
            </div>
            }
          </div>
          <div className="flex flex-row gap-1 text-red-600 items-center text-sm">
            <BsFillCircleFill />
          <div>
            {data.status && data.status}
          </div>
          </div>
          <Link href={data.game_url} className="flex flex-row gap-1 items-center w-fit p-2 bg-green-600 text-xl md:text-2xl font-medium rounded-lg self-center absolute -bottom-20  mx-3 lg:bottom-5 lg:left-20 hover:bg-red-600 transition-all duration-200">
            <div>
              Play Now!
            </div>
            <FaPlayCircle />
          </Link>
        </div>
      </div>
      <div className="max-w-6xl text-white self-center px-8 first-line:font-semibold text-center md:text-start">
            {data.description}
          </div>
    </main>
  )
}

// <div className="">
// {data.screenshots.length === 4 ? 
//             <div className="grid grid-cols-2 gap-2">
//               <img src={data.screenshots[0].image} className="w-[230px] rounded-xl"/>
//             <img src={data.screenshots[1].image} className="w-[230px] rounded-xl"/>
//             <img src={data.screenshots[2].image} className="w-[230px] rounded-xl"/>
//             <img src={data.screenshots[3].image} className="w-[230px] rounded-xl"/>
//             </div>
//             :
//   data.screenshots.length === 3 ? 
//   <div className="grid grid-cols-2 gap-2">
//   <img src={data.screenshots[0].image} className="w-[250px] rounded-xl"/>
//   <img src={data.screenshots[1].image} className="w-[260px] rounded-xl"/>
//   <img src={data.screenshots[2].image} className="w-[230px] rounded-xl"/>
//   </div>
//   :
//   data.screenshots.length === 2 ?
//   <div className="grid grid-cols-2 gap-2">
//   <img src={data.screenshots[0].image} className="w-[230px] rounded-xl"/>
//   <img src={data.screenshots[1].image} className="w-[230px] rounded-xl"/>
//   </div>
//   :
//   <div className="grid grid-cols-2 gap-2">
//   <img src={data.screenshots[0].image} className="w-[230px] rounded-xl"/>
//   </div>
// }
// </div>