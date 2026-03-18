import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Auth App</h1>

      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Home