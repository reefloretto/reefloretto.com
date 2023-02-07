import nextMDX from '@next/mdx'
import remarkGFM from 'remark-gfm'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGFM],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['reef.mypinata.cloud']
  },
  experimental: {
    appDir: true,
  },
}

export default withMDX(nextConfig)
