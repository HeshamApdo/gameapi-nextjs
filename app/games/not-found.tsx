
import { BiError } from "react-icons/bi"

export default function notFound() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center py-10 px-10 w-screen min-h-screen'>
        <div>
            <img src='/notFound.png' className='w-[400px]'/>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center text-white text-xl">
            <div className=''>
                Sorry, This page not found
            </div>
            <BiError className="text-3xl"/>
        </div>
    </div>
  )
}
