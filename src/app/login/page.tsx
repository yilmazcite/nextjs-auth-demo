'use client'

import { FormEvent } from 'react'

import { useRouter } from 'next/navigation'

import { useUserInfoStore } from '@/stores/userStore'

export default function Login() {
  const router = useRouter()

  const [userInfo, setUserInfo] = useUserInfoStore()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (userInfo?.email && userInfo?.password && userInfo?.name) {
      router.push('/dashboard')
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="font-bold text-3xl mb-5">Login</h1>

        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={userInfo?.name || ''}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full px-4 py-2 border rounded"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={userInfo?.email || ''}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full px-4 py-2 border rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={userInfo?.password || ''}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, password: e.target.value }))
            }
            className="w-full px-4 py-2 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}
