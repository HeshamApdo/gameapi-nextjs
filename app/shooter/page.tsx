import Link from "next/link"
import { RiPlayFill } from "react-icons/ri"
import { CgDetailsMore, CgArrowTopRight } from "react-icons/cg"
import { Metadata } from "next"
import { BiError } from "react-icons/bi"
// import { SelectedGame } from "@/components/SelectedGame"
import Search from "@/components/Search"
import { getShooterGames } from "@/utils/getShooterGames"
import { TypeGames } from "@/components/TypeGames"
import { IoMdLogIn } from "react-icons/io"
import { OptionScreenLg } from "@/components/OptionScreenLg"
import { OptionScreenSm } from "@/components/OptionScreenSm"

export const metadata: Metadata = {
  title: 'shooter',
  description: 'Page of shooter games',
}

export default async function searchTerm() {
  const games: Promise<Game[]> = getShooterGames()
  const data = await games
  // console.log(data)
  // const results: Result[] | undefined = data?.query?.pages // results is object contain information

  // if (!searchTerm) notFound()
  return (
    <main>
      <div className="w-full h-20 bg-slate-500 fixed top-0 z-50 flex flex-row gap-2 md:gap-20 justify-between md:justify-center items-center px-3">
      <OptionScreenLg />
      <OptionScreenSm />
        <TypeGames />
        <div>
          <Search />
        </div>
        <div className="hidden md:block">
      <Link href="/login" className="flex flex-row gap-1 justify-center items-center w-fit p-2 bg-red-600 rounded-xl text-white font-medium hover:opacity-90">
      Login
      <IoMdLogIn className="text-xl"/>
      </Link>
      </div>
      </div>
      {data.length > 0?
            <div className="flex flex-row gap-5 flex-wrap justify-center items-center my-32 px-1">
            {data.map((game) =>(
            <div className="relative flex flex-col gap-3 w-[150px] h-[270px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[530px] rounded-b-xl bg-slate-700 shadow-md text-white/80">
              <Link href={`/games/${game.id}`}>
                <div className="absolute top-2 md:top-3 left-2 w-fit p-2 bg-white/40 rounded-full hover:bg-red-400 hidden md:block">
                <CgArrowTopRight className="text-xl text-white"/>
                </div>
                <img src={game.thumbnail} className="w-full shadow-md"/>
              </Link>
              <div className="text-center text-sm md:text-xl font-semibold px-1">
                {game.title}
              </div>
              <div className="flex flex-col lg:flex-row gap-1 md:gap-5 px-2 md:px-5 justify-center items-center">
                <div className="text-center text-xs md:text-lg">
                  {game.publisher}
                </div>
                <div className="text-slate-500 text-xs">
                  {game.release_date}
                </div>
              </div>
              <div className="px-2 py-1 hidden lg:block text-center">
                {game.short_description}
              </div>
              <div className="flex flex-row justify-between w-full px-2 md:px-10 items-center absolute bottom-2">
                <Link href={`/games/${game.id}`} className="flex flex-row gap-1 justify-center items-center w-fit p-2 text-xs md:text-lg font-medium text-white bg-red-600 rounded-xl hover:opacity-80">
                  Details
                  <CgDetailsMore />
                </Link>
                <Link href={game.game_url} className="flex flex-row gap-1 justify-center items-center w-fit p-2 text-xs md:text-lg font-medium text-white bg-green-500 rounded-xl hover:opacity-80">
                  Play
                  <RiPlayFill />
                </Link>
              </div>
            </div>
            ))}
            </div> 
            :
            <div className='flex flex-col gap-5 justify-center items-center py-10 px-10 w-screen min-h-screen'>
            <div>
                <img src='/notFound.png' className='w-[400px]'/>
            </div>
            <div className="flex flex-row gap-3 justify-center items-center text-white text-xl">
                <div className=''>
                    Sorry, This <span className="font-bold underline decoration-red-600 underline-offset-8">{searchTerm}</span> page not found
                </div>
                <BiError className="text-3xl"/>
            </div>
        </div>
      }
    </main>
  )
}
