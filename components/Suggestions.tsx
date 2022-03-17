import faker from '@faker-js/faker'
import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [suggestions, setSuggestions] = useState<any[]>([])
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])
  return (
    <div>
      <div className="ml-10 mt-5">
        <div className="mb-5 flex justify-between text-sm">
          <h3 className="text-sm font-bold text-gray-400">
            Suggestions For You
          </h3>
          <button className="font-semibold text-gray-600">See All</button>
        </div>
        {suggestions &&
          suggestions.map((profile) => (
            <div
              key={profile.id}
              className="mt-3 flex items-center justify-between"
            >
              <img
                src={profile.avatar}
                alt="avatar"
                className="h-10 w-10 rounded-full border p-[2px]"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-sm font-semibold">{profile.username}</h2>
                <h3 className="text-xs text-gray-400">
                  Works at {profile.company.name}
                </h3>
              </div>
              <button className="text-xs font-bold text-blue-400">
                Follow
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Suggestions
