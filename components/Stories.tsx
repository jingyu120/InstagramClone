import React, { useEffect, useState } from 'react'
import faker from '@faker-js/faker'
import Story from './Story'

const Stories = () => {
  const [suggestions, setSuggestions] = useState<any>(null)
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])
  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6">
      {suggestions &&
        suggestions.map(
          (profile: { id: number; avatar: string; username: string }) => (
            <Story
              key={profile.id}
              img={profile.avatar}
              username={profile.username}
            />
          )
        )}
    </div>
  )
}

export default Stories
