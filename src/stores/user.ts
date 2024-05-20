import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'
import { Fetch } from "../lib/fetch"

export type User = {
  id: number,
  email: string,
  fullName?: string,
  phoneNumber?: string,
  emailConfirmed: boolean,
  address?: string,
  image?: string,
  createdAt: Date,
  updatedAt: Date
}

type State = {
  user: User | null,
  token: string | null
  refreshToken: string | null
}

type Actions = {
  logout: () => void,
  logged: () => Promise<any>,
}

const useUserStore = create(persist<State & Actions>((set, get) => ({
  user: null,
  token: null,
  refreshToken: null,

  logout: () => {
    set({ user: null, token: null, refreshToken: null })
  },
  logged: async () => {
    const [data] = await Fetch('/api/account/current-user')

    set({
      user: data?.user || null
    })

    return null
  }
}), {
  name: 'user-storage',
  storage: createJSONStorage(() => localStorage),
}))

export default useUserStore