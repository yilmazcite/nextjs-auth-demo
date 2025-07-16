'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleLoginClick = () => {
    router.push('/login')
  }

  const handlePostsClick = () => {
    router.push('/posts')
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <button
        onClick={handleLoginClick}
        className="px-8 mb-5 bg-blue-500 text-white py-2 rounded cursor-pointer"
      >
        Login
      </button>
      <button
        onClick={handlePostsClick}
        className="px-8 bg-blue-500 text-white py-2 rounded cursor-pointer"
      >
        Posts
      </button>
    </div>
  )
}
