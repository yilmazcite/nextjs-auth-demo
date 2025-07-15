'use client'

import { createStore } from '@/chitate/store'

export type UserInfo = {
  name: string
  email: string
  password: string
}

export const useUserInfoStore = createStore<UserInfo | undefined>(undefined)
