import { create } from "zustand"
import { ProductCategoryWidthProductCount } from "../types/product"

type State = {
  productCategories: ProductCategoryWidthProductCount[]
}

type Actions = {
}

const useProductStore = create<State & Actions>((set, get) => ({
  productCategories: []
}))

export default useProductStore