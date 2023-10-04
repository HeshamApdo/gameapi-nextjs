
import { Metadata } from "next"
import Link from "next/link"
import { GrPowerReset } from "react-icons/gr"
import { MdOutlineLogin } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { MdAlternateEmail } from "react-icons/md"


export const metadata:Metadata = {
  title: "login",
  description: "This login page"
}


export default function login() {
  return (
    <div className="flex justify-center items-center w-screen min-h-screen">
      <form className="flex flex-col gap-5 w-[260px] md:w-[300px] p-10 justify-center items-center text-slate-950 bg-slate-600 rounded-xl px-5 shadow-xl shadow-slate-900">
          <div className="flex flex-row gap-1 justify-center items-center rounded-md py-2 px-1 bg-slate-200">
            <CgProfile className="text-xl text-slate-800"/>
          <input type="text" placeholder="name" minLength={3} maxLength={10} className="bg-transparent outline-none w-[200px] md:w-[230px]" name="name" autoFocus required/>
          </div>
          <div className="flex flex-row gap-1 justify-center items-center rounded-md py-2 px-1 bg-slate-200">
            <MdAlternateEmail className="text-xl text-slate-800"/>
          <input type="email" placeholder="email" className="bg-transparent outline-none w-[200px] md:w-[230px]" name="name" required/>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button  type="reset" className="flex flex-row gap-1 justify-center items-center w-fit p-2 bg-slate-700 text-white rounded-xl cursor-pointer font-medium hover:bg-opacity-50">
            Reset
            <GrPowerReset className="text-lg"/>
            </button>
            <button type="submit" className="flex flex-row gap-1 justify-center items-center w-fit p-2 bg-slate-950 text-white rounded-xl cursor-pointer font-medium hover:bg-slate-700 hover:text-black transition-all duration-150">
            Login
            <MdOutlineLogin className="text-lg"/>
            </button>
          </div>
          <Link href="" className="underline decoration-slate-950 underline-offset-2 hover:text-white">
            <p>You don't have an account?</p>
          </Link>
      </form>
    </div>
  )
}
