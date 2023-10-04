
const DATA_API: string = process.env.DATA_API_KEY as string


export async function getActionGames(){
    const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=action`,{
        method: "GET",
        headers: {
            'X-RapidAPI-Key': DATA_API,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })

    if (!res.ok) undefined

    return res.json()
}
