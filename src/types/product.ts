export interface ProductCategoryWidthProductCount {
  productCategory: ProductCategory
  productCount: number
}

export interface ProductCategory {
  id: number
  title: string
  slug: string
  description: any
  image?: string
  order: any
  status: boolean
  createdAt: string
  updatedAt: string
}

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  content: string
  image: string
  galleryString: string
  gallery: string[]
  price: number
  compareAtPrice: number
  isHot: boolean
  isFeatured: boolean
  sold: number
  stock: number
  guideImage: any
  additionalInformation: any
  metaKeyword: any
  metaDescription: any
  status: boolean
  categories: ProductCategory[]
  tags: any[]
  orderDetails: any[]
  reviews: any[]
  createdAt: string
  updatedAt: string
}

export interface ProductWidthReview {
  product: Product
  reviewCount: number
  rating: number
}