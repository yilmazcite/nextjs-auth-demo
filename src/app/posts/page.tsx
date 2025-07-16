import Link from 'next/link'

export default function PostsIndex() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold mb-6">Posts Demo</h1>

      <Link
        href="/posts/server-side-posts"
        className="p-2 px-6 bg-blue-500 underline rounded cursor-pointer"
      >
        Go to Server-Side Posts
      </Link>

      <Link
        href="/posts/client-side-posts"
        className="p-2 px-7 bg-blue-500 underline rounded cursor-pointer"
      >
        Go to Client-Side Posts
      </Link>
    </div>
  )
}
