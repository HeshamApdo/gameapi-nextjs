import Search from '@/components/Search'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col gap-2 justify-center items-center w-screen min-h-screen">
      <Search />
      <div className='text-2xl font-semibold'>
        Welcome To Our Games
      </div>
      <div className='w-fit px-5 md:px-[200px] text-center'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis eos, assumenda corrupti quia accusantium pariatur voluptas reprehenderit consequuntur? Enim cupiditate voluptates veritatis maiores ea officiis voluptate iusto odit sunt architecto.
      </div>
      <Link href="/games" className='w-fit p-2 font-semibold font-serif bg-slate-950 text-white'>
        Explore
      </Link>
    </main>
  )
}
