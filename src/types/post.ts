export interface Post {
  id: number
  title: string
  slug: string
  description: string
  content: string
  image: string
  views: number
  metaKeyword: any
  metaDescription: any
  status: boolean
  categories: any[]
  tags: any[]
  createdAt: string
  updatedAt: string
}

export interface PostCategory {
  id: number
  title: string
  slug: string
  description: any
  image: any
  order: any
  status: boolean
  createdAt: string
  updatedAt: string
}