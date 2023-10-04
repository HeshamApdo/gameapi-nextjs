"use client"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BiSolidCategory } from "react-icons/bi"
import { AiFillFire } from "react-icons/ai"
import { FiCodesandbox } from "react-icons/fi"
import { IoCarSportSharp } from "react-icons/io5"
import { BiBorderAll } from "react-icons/bi"
import { WiAlien } from "react-icons/wi"
import { GiExtractionOrb, GiJetFighter } from "react-icons/gi"


const links = [
    { href: '/games', label: 'All', icon: <BiBorderAll className="text-2xl" />},
    { href: '/shooter', label: 'Shooter', icon: <AiFillFire className="text-2xl" />},
    { href: '/racing', label: 'Racing', icon: <IoCarSportSharp className="text-2xl" /> },
    { href: '/action', label: 'Action', icon: <GiExtractionOrb className="text-2xl" /> },
    { href: '/sandbox', label: 'Sandbox', icon: <FiCodesandbox className="text-2xl" /> },
    { href: '/horror', label: 'Horror', icon: <WiAlien className="text-2xl" /> },
    { href: '/fighting', label: 'Fighting', icon: <GiJetFighter className="text-2xl" /> },
]


export const TypeGames = () => {
  return (
    <div>
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="flex flex-row gap-1 justify-center items-center w-fit p-2 rounded-xl bg-slate-900 text-slate-300 text-xs sm:text-base font-medium">Category<BiSolidCategory className="text-white sm:text-xl" /></Menu.Button>
      <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
      <Menu.Items className="absolute left-1 mt-2 flex flex-col gap-2 min-w-[200px] p-10 bg-slate-600 rounded-xl">
        {links.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={link.href} as={Fragment} className="bg-slate-600 w-fit p-2">
            {({ active }) => (
              <a
                href={link.href}
                className={`flex flex-row gap-1 justify-center items-center font-semibold ${
                  active ? 'bg-slate-400 w-fit p-2 rounded-xl text-white' : 'text-slate-950'
                }`}
              >
                {/* {link.label === "Account settings" && <RiAccountCircleFill />} */}
                {link.icon}
                {link.label}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
      </Transition>
    </Menu>
    </div>
  )
}
