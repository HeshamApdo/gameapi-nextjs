"use client"
import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import { BiSearchAlt } from "react-icons/bi"

export default function Search() {
    const [search, setSearch] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setSearch("")
        router.push(`/${search}/`)
    }
  return (
    <form className="flex flex-row items-center gap-1" onSubmit={handleSubmit}>
        <input type="text" className="w-[120px] sm:w-[150px] md:w-[200px] h-9 md:h-10 bg-white rounded-xl p-2 text-sm  outline-none" value={search} onChange={e => setSearch(e.target.value)} placeholder="Type of Games" required />
        <button className="flex flex-row gap-1 justify-center items-center w-fit p-2 bg-slate-800 rounded-xl text-white text-sm md:text-lg hover:opacity-90">
            <BiSearchAlt />
        </button>
    </form>
  )
}
