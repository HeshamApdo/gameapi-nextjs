"use client"
import { Props } from "@/types"
import { useEffect, useState } from "react"
import { MdVideoLibrary } from "react-icons/md"
import { FiVideoOff } from "react-icons/fi"





export const ChangeImage = ({data}:Props) => {
        const [currentImage, setCurrentImage] = useState(0)
        useEffect(()=>{
        const interval = setInterval(() =>
        setCurrentImage(prev => (prev === data.length - 1 ? 0 : prev + 1))
        ,2000)
        return () => clearInterval(interval)
        },[])
    // console.log(data)
  return (
            <div className="">
              {data.length > 0 ? 
                            <div className="lg:grid grid-cols-2 gap-0">
                            <div className="relative">
                            <MdVideoLibrary className="md:text-xl lg:text-3xl font-semibold text-white absolute top-5 left-5"/>
                            <img src={data[currentImage].image} className="w-[390px] h-[220px] rounded-xl border-4 border-cyan-600 shadow-lg shadow-slate-900"/>
                            </div>
                          </div>
                  :
                  <div className="lg:grid grid-cols-2 gap-0 justify-center items-center">
                    <div className="w-[390px] h-[200px] bg-slate-700 rounded-xl flex flex-row gap-2 justify-center items-center text-white text-xl">
                      <div>
                        Not Available
                      </div>
                      <FiVideoOff className="text-red-600"/>
                    </div>
                  </div>
              }
        </div>
  )
}
