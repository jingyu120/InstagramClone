import React from 'react'

function MiniProfile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://links.papareact.com/3ke"
          alt="profile pic"
          className="mr-1 w-16 rounded-full border p-1"
        />
        <div>
          <h2 className="font-bold">justintime1347</h2>
          <h3 className="text-sm text-gray-500">Justin Zhang</h3>
        </div>
      </div>
      <button className="font-semibold text-blue-400">Switch</button>
    </div>
  )
}

export default MiniProfile
