import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'
import { Fetch } from "../lib/fetch"

type State = {
  title: string,
  logo: string
}

type Actions = {
}

const useWebStore = create<State & Actions>((set, get) => ({
  title: "Việt Hùng",
  logo: "/logo.png"
}))

export default useWebStore