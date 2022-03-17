import React from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'

import { HomeIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <div className="sticky top-0 z-50 mx-5 flex max-w-6xl items-center justify-between border-b bg-white shadow-sm xl:mx-auto">
      <div>
        <div className="relative hidden h-24 w-24 cursor-pointer lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
        <div className="relative h-10 w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className=" relative mt-1 rounded-md p-3">
        <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>
        <input
          className="bg-gray- block w-full rounded-md border-gray-300 pl-10 focus:border-black focus:ring-black sm:text-sm"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center justify-end space-x-4">
        <HomeIcon className="navBtn" />
        <div className="navBtn relative">
          <PaperAirplaneIcon className="navBtn rotate-45" />
          <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
            3
          </div>
        </div>
        <PlusCircleIcon className="navBtn" />
        <UserGroupIcon className="navBtn" />
        <HeartIcon className="navBtn" />
        <MenuIcon className="h-6 cursor-pointer md:hidden" />
        <img
          className="h-10 cursor-pointer rounded-full"
          src="https://links.papareact.com/3ke"
          alt="profile pic"
        />
      </div>
    </div>
  )
}

export default Header
