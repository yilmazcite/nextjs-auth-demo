export default async function ServerPostsPage() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=50',
    {
      // cache: 'no-store',
      next: { revalidate: 60 }, // optional caching
    },
  )
  const posts = await res.json()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Server-side Rendered Posts</h1>
      <ul className="list-disc list-inside">
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
