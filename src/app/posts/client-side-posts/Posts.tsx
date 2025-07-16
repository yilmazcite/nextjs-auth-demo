'use client'

import { useEffect, useState } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=50')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-gray-500">Loading posts...</p>

  return (
    <ul className="list-disc list-inside">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
