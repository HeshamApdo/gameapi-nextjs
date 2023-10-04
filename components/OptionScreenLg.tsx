import Link from "next/link"
import { AiFillHome } from "react-icons/ai"
import { BiSupport } from "react-icons/bi"



export const OptionScreenLg = () => {
  return (
    <div className="hidden lg:block">
    <div className="w-fit p-2 bg-slate-950 rounded-xl flex flex-row gap-3 justify-center items-center text-xl mx-5 text-slate-950">
      <Link href="/">
      <AiFillHome className="w-fit p-2 bg-slate-500 rounded-full text-4xl hover:bg-slate-800 hover:text-white transition-all duration-150" title="Home"/>
      </Link>
      <Link href="/support">
      <BiSupport className="w-fit p-2 bg-slate-500 rounded-full text-4xl hover:bg-slate-800 hover:text-white transition-all duration-150" title="Support"/>
      </Link>
    </div>
    </div>
  )
}
