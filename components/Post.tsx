import React from 'react'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'

interface Prop {
  username: string
  userImg: string
  img: string
  caption: string
}
export default function Post(props: Prop) {
  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center p-5">
        <img
          className="mr-3 h-12 rounded-full border object-contain p-1"
          src={props.userImg}
          alt="user image"
        />
        <p className="flex-1 font-bold">{props.username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <div>
        <img className="w-full object-cover" src={props.img} alt="post image" />
      </div>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <p className="truncate p-5">
        <span className="mr-1 font-bold">{props.username}</span>
        {props.caption}
      </p>
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border-none outline-none focus:ring-0"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  )
}
