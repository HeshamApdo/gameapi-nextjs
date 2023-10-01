type Game = {
    id:number
    title:string
    thumbnail:string
    short_description:string
    game_url:string
    genre:string
    platform:string
    publisher:string
    developer:string
    release_date:string
    freetogame_profile_url:string
}


type oneGame ={
    id: number,
    title: string,
    thumbnail: string,
    status: 'Live',
    short_description: string
    description: string
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    freetogame_profile_url: string,
    minimum_system_requirements: {
      os: string,
      processor: string,
      memory: string,
      graphics?: string,
      storage: string
    },
    screenshots?: [
      {
        id: number,
        image?: string
      },
      {
        id:number,
        image?: string
      },
      {
        id: number,
        image?: string
      },
      {
        id: number,
        image?: string
      }
    ]
  }

// {
//     id: 6,
//     title: 'Blade and Soul',
//     thumbnail: 'https://www.freetogame.com/g/6/thumbnail.jpg',
//     status: 'Live',
//     short_description: 'A free-to-play martial arts MMORPG that tasks players with learning combination attacks.',
//     description: 'Blade & Soul is a free-to-play, action combat MMORPG from NCSoft that initially released in 2012 in Korea but finally saw a Western release in January 2016. Blade & Soul is a martial arts inspired MMORPG that tasks players with learning action combat based combination attacks for each class. Currently, there are 7 classes available in the game; Assassin, Blade Master, Destroyer, Force Master, Kung-Fu Master, Summoner, and Blade Dancer. New players will want to research the classes prior to starting a new character since classes fall under various race restrictions when choosing from one of the game’s four currently available races.\r\n' +
//       '\r\n' +
//       'Blade & Soul’s most notable feature is perhaps the game’s combat. Skills are learned as you level up and are displayed on hotbars in the traditional MMORPG style, but the actual implementation of those skills differs from most other games in the genre. While you will work with “rotations” in combat, it is perhaps better to think of these rotations in the form of “combinations” as each class will have a plethora of skills that can be combined in succession to perform very well animated combination attacks. These combinations may only be two or three buttons or they could be MUCH longer. Unlike other action combat MMOs though, Blade & Soul isn’t going to spoon feed you the combinations by hitting one key to trigger the next strike in the combination. Instead, Blade & Soul requires you to actually learn not only the combination itself, but each ability’s timing, and the required position to execute certain parts of the combination (Your hot bar actually can change based on position. i.e. being knocked down may give you access to abilities that cannot be used while standing). Learning these combination, aiming them appropriately, and reacting to incoming attacks are the key to the game’s fast paced and sometimes complex combat. If you liked TERA’s combat, you’ll probably enjoy Blade & Soul’s quite a bit.\r\n' +
//       '\r\n' +
//       'Leveling brings the usual grind of story, side, and repeatable quests but the game’s environments change so often and are very well rendered that you won’t get bored by the scenery for quite some time. Transportaion is handled with sprint, glide, and even water walking abilities to speed up any backtracking you may have do. Instant teleports are available by spending in-game currency. Leveling requires completion of quests and along the way players will gain gear that can be upgraded along with your character. Feed equipment that you don’t need to your sword, for example, and you get a sword that levels up as your character does. This primary upgrading mechanic applies to many different gear pieces and keeps players going after loot simply to “feed” their primary equipment.\r\n' +
//       '\r\n' +
//       'The addition of a “Soul Shield” allows for extra stat customization provided you can find the pieces of the shield you desire. Skills can be further customized at about level 18 (it’s actually a story completion point that triggers this mechanic) by spending points in your martial tome to increase ability effectiveness.\r\n' +
//       '\r\n' +
//       'If you enjoy dungeons, Blade & Soul has quite a few options for you. Each dungeon (be it a full instance or just a cave on the world map) has numerous difficulty levels and varying party size requirements. This keeps the loot fest rolling as certain dungeons will drop the items needed to “Breakthrough” on your weapon and gear upgrading. The game’s matchmaking system makes finding a party for these runs very easy.\r\n' +
//       '\r\n' +
//       'Blade & Soul’s PvP is based on two main categories; World PvP and Arena PvP. Arena PvP is a 1v1 or 3v3/6v6 (currently only in Korea) affair. Versus matches are simply queued for while World PvP is based on what your character is wearing. You read that right. World PvP is based on what you are wearing. It’s a creative way to “flag” for PvP. Simply donning the costume of one of the game’s 2 factions makes you able to be attacked by a member of the opposing faction out in the world. Other costumes could turn normally friendly NPCs into enemy NPCs that will attack you on sight.\r\n' +
//       '\r\n' +
//       'Blade & Soul’s cash shop varies by geographic location but for the most part contains the normal consumables, costumes, and cosmetics. However, some materials are also available in the shop. The multiple shops actually utilize multiple currency types and a currency exchange system is in place to provide free players with a means to acquire cash shop items. A subscription service is also available and provides additional perks to players that opt for the payment.',
//     game_url: 'https://www.freetogame.com/open/blade-and-soul',
//     genre: 'MMORPG',
//     platform: 'Windows',
//     publisher: 'NCSoft',
//     developer: 'NCSoft',
//     release_date: '2016-01-19',
//     freetogame_profile_url: 'https://www.freetogame.com/blade-and-soul',
//     minimum_system_requirements: {
//       os: 'Windows XP',
//       processor: 'Intel Core 2 DUo E6600 2.4 GHz / AMD Athlon 64 X2 Dual Core 4600+',
//       memory: '2 GB',
//       graphics: 'GeForce 8600 GT / ATI Radeon HD 4650',
//       storage: '15GB'
//     },
//     screenshots: [
//       {
//         id: 26,
//         image: 'https://www.freetogame.com/g/6/Blade-and-Soul-1.jpg'
//       },
//       {
//         id: 27,
//         image: 'https://www.freetogame.com/g/6/Blade-and-Soul-2.jpg'
//       },
//       {
//         id: 28,
//         image: 'https://www.freetogame.com/g/6/Blade-and-Soul-3.jpg'
//       },
//       {
//         id: 29,
//         image: 'https://www.freetogame.com/g/6/Blade-and-Soul-4.jpg'
//       }
//     ]
//   }


type SearchResult = {
  query?: {
      pages?: Result[],
  },
}