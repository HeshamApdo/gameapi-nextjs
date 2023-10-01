// "use client"
// import { useState } from "react"
import { getGames } from "@/utils/getGames"
import Link from "next/link"
import { RiPlayFill } from "react-icons/ri"
import { CgDetailsMore, CgArrowTopRight } from "react-icons/cg"
import { Metadata } from "next"
import Search from "@/components/Search"

export const metadata: Metadata = {
  title: "Games",
  description: "Chose your favourite game and play it Now"
}

export default async function games() {
  const games: Promise<Game[]> = getGames()
  const data = await games
  // const [search, setSearch] = useState("")
  // console.log(data)
  return (
    <main>
      <div className="w-full h-20 bg-slate-500 fixed top-0 z-50 flex flex-row gap-2 md:gap-20 justify-center items-center">
      {/* <div>
      <SelectedGame data={data} />
      </div> */}
      <div>
        <Search />
      </div>
      </div>
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
    </main>
  )
}


//  <div className="flex flex-row gap-5 flex-wrap justify-center items-center my-10 px-1">
// {data.map((game) =>(
//   <div className="relative flex flex-col gap-3 w-[150px] h-[270px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[530px] rounded-b-xl bg-slate-700 shadow-md text-white/80">
//     <div>
//       <img src={game.thumbnail} className="w-full shadow-md"/>
//     </div>
//     <div className="text-center text-sm md:text-xl font-semibold px-1">
//       {game.title}
//     </div>
//     <div className="flex flex-col lg:flex-row gap-1 md:gap-5 px-2 md:px-5 justify-center items-center">
//       <div className="text-center text-xs md:text-lg">
//         {game.publisher}
//       </div>
//       <div className="text-slate-500 text-xs">
//         {game.release_date}
//       </div>
//     </div>
//     <div className="px-2 py-1 hidden lg:block text-center">
//       {game.short_description}
//     </div>
//     <div className="flex flex-row justify-between w-full px-2 md:px-10 items-center absolute bottom-2">
//       <Link href={game.freetogame_profile_url} className="w-fit p-2 text-xs md:text-lg font-medium text-white bg-red-600 rounded-xl hover:opacity-80">
//         Details
//       </Link>
//       <Link href={game.game_url} className="w-fit p-2 text-xs md:text-lg font-medium text-white bg-green-500 rounded-xl hover:opacity-80">
//         Play
//       </Link>
//     </div>
//   </div>
// ))}
// </div> 

{/* <div className="w-full h-20 fixed top-0 left-0 z-50 bg-slate-500 flex justify-center items-center">
<input id="se" type="text" placeholder="Search" className="w-[200px] h-10"/>
</div> */}