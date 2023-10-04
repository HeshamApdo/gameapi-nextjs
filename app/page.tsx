"use client"
import { motion } from 'framer-motion'
import Search from '@/components/Search'
import Link from 'next/link'
import { HiRectangleGroup } from "react-icons/hi2"

const viewAnimation={
  initial: {
      // x: -5,
      // y: -5,
      opacity: 0,
  },
  animate: {
      // x: 0,
      // y: 5,
      opacity: 1,
      transition:{
          delay: 0.2,
          duration: 4
      }
  }
}
const viewAnimation2={
  initial: {
      x: 400,
      opacity: 0,
  },
  animate: {
      x: 0,
      opacity: 1,
      transition:{
          delay: 0.2,
          duration: 2
      }
  }
}
const viewAnimation3={
  initial: {
      x: -10,
      opacity: 0,
  },
  animate: {
      x: 1000,
      opacity: 1,
      transition:{
          delay: 0.2,
          duration: 2
      }
  }
}

export default function Home() {
  return (
    <main className="relative flex justify-center items-center min-w-screen h-screen overflow-hidden">
      <motion.div
                  variants={viewAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                      once: true
                  }}
      className='flex justify-center items-center'>
      <div className='absolute left-1 md:left-5 top-[35%] md:top-[50%] translate-y-[-50%] -z-10'>
        <img src='/dragon.png' className='max-w-sm'/>
      </div>
      <div className='absolute left-0 md:left-24 top-[43%] md:top-[50%] translate-y-[-50%] -z-10'>
        <img src='/war.png' className='max-w-sm'/>
      </div>
      </motion.div>
      <motion.div
                  variants={viewAnimation3}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                      once: true
                  }}
      className='hidden lg:block'>
      <div className='absolute right-1 md:right-5 top-[35%] md:top-[50%] translate-y-[-50%] -z-10'>
        <img src='/war2.png' className='max-w-sm'/>
      </div>
      </motion.div>
      <motion.div
                        variants={viewAnimation2}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true
                        }}
      className='flex flex-col gap-3 justify-center items-center text-center px-10 z-10'>
        <Search />
        <p className='max-w-xl text-slate-200'>Welcome to our game store here there are about <b>1000</b> game, including wars, racing and others, you can select the types of games you want, choose your favorite game and enjoy playing.</p>
        <Link href="/games" className='flex flex-row gap-1 justify-center items-center w-fit p-2 bg-slate-500 rounded-xl text-white font-medium hover:opacity-90 transition-all duration-150'>
          <div>
          Games
          </div>
          <HiRectangleGroup className="text-2xl text-slate-950"/>
        </Link>
      </motion.div>
    </main>
  )
}
