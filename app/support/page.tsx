
import { BsPerson, BsSendCheck } from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiSpeakFill } from 'react-icons/ri'
import { FiMessageSquare } from 'react-icons/fi'
import { WindowMessage } from "@/components/WindowMessage"
import { Metadata } from 'next'


export const metadata:Metadata = {
  title: "support",
  description: "This support page"
}


export default function support() {
  return (
    <main className='flex justify-center items-center w-screen min-h-screen'>
        {/* Form  */}
        <form className='flex flex-col gap-5 w-[260px] md:w-[300px] p-10 justify-center items-center text-slate-950 bg-slate-600 rounded-xl px-5 shadow-xl shadow-slate-900'>
        <div className="flex flex-row gap-1 justify-center items-center rounded-xl py-2 px-1 bg-slate-200">
            <BsPerson className="text-xl text-slate-500"/>
          <input type="text" placeholder="name" minLength={3} maxLength={10} className="bg-transparent outline-none w-[200px] md:w-[230px]" name="name" autoFocus required/>
          </div>
        <div className="flex flex-row gap-1 justify-center items-center rounded-xl py-2 px-1 bg-slate-200">
            <MdOutlineMailOutline className="text-xl text-slate-500"/>
          <input type="text" placeholder="email" className="bg-transparent outline-none w-[200px] md:w-[230px]" name="email" required/>
          </div>
        <div className="flex flex-row gap-1 justify-center items-center rounded-xl py-2 px-1 bg-slate-200">
            <RiSpeakFill className="text-xl text-slate-500"/>
          <input type="text" placeholder="object" minLength={3} maxLength={15} className="bg-transparent outline-none w-[200px] md:w-[230px]" name="object" required/>
          </div>
        <div className="flex flex-row gap-1 justify-center rounded-xl py-2 px-1 bg-slate-200">
            <FiMessageSquare className="text-xl text-slate-500"/>
          <textarea placeholder="message" minLength={10} maxLength={100} className="bg-transparent outline-none w-[200px] md:w-[230px]" rows={4} name="message" required/>
          </div>
          <button type="submit" className="flex flex-row gap-1 justify-center items-center w-fit p-2 bg-slate-950 text-white rounded-xl cursor-pointer font-medium hover:bg-slate-700 hover:text-black transition-all duration-150">
            Send
            <BsSendCheck className="text-lg"/>
            </button>
        </form>
    {/* Window Message  */}
    <WindowMessage />
    </main>
  )
}
