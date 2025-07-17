'use client'

import { useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { useUserInfoStore } from '@/stores/userStore'

type Params = {
  username: string
}
export default function UserPage({ params }: { params: Params }) {
  const { username } = params

  const router = useRouter()

  const userInfo = useUserInfoStore.getState()

  useEffect(() => {
    if (!userInfo) {
      router.push('/login')
    }
  }, [userInfo, router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-2">Welcome, {username}!</h1>
    </div>
  )
}
