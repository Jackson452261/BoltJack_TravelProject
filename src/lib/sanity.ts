import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'vzkhitzw',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Query to get all blog posts
export const blogPostsQuery = `*[_type == "blogPost"] | order(date desc) {
  _id,
  title,
  slug,
  excerpt,
  image,
  category,
  date,
  readTime,
  rating,
  author->{
    name,
    image,
    role
  },
  content
}`

// Query to get a single blog post by slug
export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  image,
  category,
  date,
  readTime,
  rating,
  author->{
    name,
    image,
    role
  },
  content
}`

// Query to get a single blog post by ID
export const blogPostByIdQuery = `*[_type == "blogPost" && _id == $id][0] {
  _id,
  title,
  slug,
  excerpt,
  image,
  category,
  date,
  readTime,
  rating,
  author->{
    name,
    image,
    role
  },
  content
}`
