"use client"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { SlOptionsVertical } from "react-icons/sl"
import { AiFillHome } from "react-icons/ai"
import { BiSupport } from "react-icons/bi"
import Link from 'next/link'
import { IoMdLogIn } from 'react-icons/io'



const links = [
    { href: '/', label: 'Home', icon: <AiFillHome className="text-2xl" />},
    { href: '/support', label: 'Support', icon: <BiSupport className="text-2xl" />},
]



export const OptionScreenSm = () => {
  return (
    <div className='lg:hidden'>
            <Menu as="div" className="relative inline-block">
      <Menu.Button className="flex flex-row gap-1 justify-center items-center w-fit p-2 rounded-xl bg-slate-900 text-slate-300 text-sm md:text-base font-medium"><SlOptionsVertical className="text-white sm:text-xl" /></Menu.Button>
      <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
      <Menu.Items className="absolute left-1 mt-2 flex flex-col gap-2 min-w-[200px] p-5 bg-slate-600 rounded-xl">
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
        <Menu.Item>
        <div className="md:hidden">
      <Link href="/login" className="flex flex-row gap-1 justify-center items-center w-fit p-2 bg-red-600 rounded-xl text-white font-medium hover:opacity-90">
      Login
      <IoMdLogIn className="text-xl"/>
      </Link>
      </div>
        </Menu.Item>
      </Menu.Items>
      </Transition>
    </Menu>
    </div>
  )
}
