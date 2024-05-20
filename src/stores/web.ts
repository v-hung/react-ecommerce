import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'
import { Fetch } from "../lib/fetch"
import { Store } from "../types/store"

type State = {
  store: Store | null
}

type Actions = {
}

const useWebStore = create<State & Actions>((set, get) => ({
  store: null
}))

export default useWebStore