






// const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c2beb1a414msh06f40eba2589788p19222fjsn9949059576e4',
// 		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
// 	}
// };


const DATA_API: string = process.env.DATA_API_KEY as string

export async function getOneGame(id: string){
    const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
        method: "GET",
        headers: {
            'X-RapidAPI-Key': DATA_API,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })

    if (!res.ok) undefined

    return res.json()
}
