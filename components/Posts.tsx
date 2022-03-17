import React from 'react'
import Post from './Post'

function Posts() {
  const posts = [
    {
      id: 1,
      username: 'jigyu120',
      userImg: 'https://links.papareact.com/3ke',
      img: 'https://links.papareact.com/3ke',
      caption: 'this is a test caption',
    },
    {
      id: 2,
      username: 'jingyu123',
      userImg: 'https://links.papareact.com/3ke',
      img: 'https://links.papareact.com/3ke',
      caption: 'this is a test caption',
    },
    {
      id: 3,
      username: 'jingyu1347',
      userImg: 'https://links.papareact.com/3ke',
      img: 'https://links.papareact.com/3ke',
      caption: 'this is a test caption',
    },
  ]
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
