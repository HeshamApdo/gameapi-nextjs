

// const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c2beb1a414msh06f40eba2589788p19222fjsn9949059576e4',
// 		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
// 	}
// };


const DATA_API: string = process.env.DATA_API_KEY as string

export async function getGames(){
    const res = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games",{
        method: "GET",
        headers: {
            'X-RapidAPI-Key': DATA_API,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })

    if (!res.ok) throw new Error ("Failed Fetch Data")

    return res.json()
}
