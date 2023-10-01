// "use client"
// import { SelectedGame } from "@/components/SelectedGame"
import { getSelectedGame } from "@/utils/getSelectedGame"
import { useState } from "react"


export default async function page() {
    const games: Promise<Game[]> = getSelectedGame()
    const data = await games
    // console.log(data)

    // const [selected, setSelected] = useState("Jade Goddess")
  return (
    <div>
        {/* <form>
            <input type="text" id="hh"/>
        </form> */}
        {/* {data.map((game) =>(
            <div className="text-white">
                {game.title === "Shop Titans" ? 
                <div>
                                    <div>{game.title}</div>
                <div>{game.id}</div>
                </div>
                :
                ""
                }
            </div>
        ))} */}
        {/* <SelectedGame data={data} /> */}
    </div>
  )
}
