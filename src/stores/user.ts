import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'
import { Fetch } from "../lib/fetch"

export type User = {
  id: number,
  name: string,
  email: string,
  avatar: string | null,
  created_at: Date,
  updated_at: Date
}

type State = {
  user: User | null,
  accessToken: string | null
}

type Actions = {
  login: (data: {email: string, password: string, remember: boolean}) => Promise<void>,
  register: (data: {email: string, password: string, name: string}) => Promise<void>,
  logout: () => void,
  logged: () => Promise<any>,
}

const useUserStore = create(persist<State & Actions>((set, get) => ({
  user: null,
  accessToken: null,

  login: async ({ email, password, remember}) => {
    // const data = await Fetch('/api/auth/login', {
    //   method: 'post',
    //   body: JSON.stringify({
    //     email, password, remember
    //   })
    // })

    const data = {
      user: {
        id: 1,
        name: "Việt Hùng",
        email: "viet.hung.2898@gmail.com"
      } as User,
      accessToken: "safddf"
    }

    await new Promise(res => setTimeout(() => res(1), 1000))

    if (data) {
      set({
        user: data.user,
        accessToken: data.access_token
      })
    }

  },
  register: async ({ email, password, name}) => {
    const data = await Fetch('/api/auth/register', {
      method: 'post',
      body: JSON.stringify({
        email, password, name
      })
    })

    if (data) {
      set({
        user: data.user,
        accessToken: data.access_token
      })
    }

  },
  logout: () => {
    const accessToken = get().accessToken
    
    Fetch('/api/auth/logout', {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })

    set({ user: null, accessToken: null })
  },
  logged: async () => {
    const body = await Fetch('/api/auth/logged', {
      method: 'post',
    }).catch(e => null)

    set({
      user: body?.user || null
    })

    return null
  }
}), {
  name: 'user-storage',
  storage: createJSONStorage(() => localStorage),
}))

export default useUserStore