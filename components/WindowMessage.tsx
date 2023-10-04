"use client"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BiSupport } from "react-icons/bi"
import { LuHeartHandshake } from "react-icons/lu"

export const WindowMessage = () => {
    let [isOpen, setIsOpen] = useState(true)
  return (
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog open={isOpen} onClose={() => setIsOpen(true)} className="absolute top-0 right-0 left-0 z-50 flex justify-center items-center min-w-screen min-h-screen bg-black/50">
        <div className='px-5'>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
        <Dialog.Panel className="w-fit p-5 bg-white rounded-xl shadow-2xl">
        <Dialog.Title className="flex flex-row gap-1 justify-normal items-center font-medium text-slate-950"><BiSupport className="text-xl"/> Support</Dialog.Title>
        <Dialog.Description className='opacity-50'>
        This is our support page 
        </Dialog.Description>

        <p className='opacity-50'>
        You can contact us and tell us your problems and we will try as soon as possible to solve your problem.
            <br />
            <span className='flex flex-row gap-1 items-center'>thank you <LuHeartHandshake /></span>
        </p>

    <div className='flex flex-row gap-3 mt-2'>
        <button onClick={() => setIsOpen(false)} className='w-fit p-2 bg-slate-950 text-white font-semibold outline-none rounded-xl hover:opacity-90'>Cancel</button>
    </div>
      </Dialog.Panel>
      </Transition.Child>
        </div>
    </Dialog>
    </Transition>
  )
}
