import Posts from './Posts'

export default function ClientPostsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Client-side Rendered Posts</h1>
      <Posts />
    </div>
  )
}
