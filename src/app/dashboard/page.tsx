'use client'

import { useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { useUserInfoStore } from '@/stores/userStore'

export default function Dashboard() {
  const router = useRouter()

  const userInfo = useUserInfoStore.getState()

  useEffect(() => {
    if (!userInfo) {
      router.push('/login')
    }
  }, [userInfo, router])

  const handleClick = () => {
    const username = userInfo?.name.trim().toLowerCase() || ''
    router.push(`/user/${username}`)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

      <p className="text-1xl text-gray-500">
        Welcome! You have successfully logged in. 🎉
      </p>

      <p className=" mt-5 text-gray-500">
        Click the button below to proceed to your profile page.
      </p>

      <button
        onClick={handleClick}
        className="mt-3 px-6 bg-blue-600 text-white py-2 rounded cursor-pointer"
      >
        Go
      </button>
    </div>
  )
}
