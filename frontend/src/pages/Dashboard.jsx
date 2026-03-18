import { useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
function Dashboard() {
    useEffect(() => {
        const fetchDashboard = async() => {
        try {
            const token = localStorage.getItem("token")
            const res = await axios.get("http://localhost:8000/api/dashboard", {
                headers: {
                    Authorization: token
                }
            }
            )
            console.log("DAta in dashboard",res.data)
        } catch (error) {
            console.log("Error in dash board",error)
        }
        
        }
    
    }, [])
   
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="flex justify-between items-center bg-white shadow px-8 py-4">
        <h1 className="text-xl font-bold">Dashboard</h1>

        <Link
          to="/"
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                 
        >
          Logout
        </Link>
      </div>

      {/* Content */}
      <div className="flex items-center justify-center mt-20">
        <div className="bg-white p-10 rounded shadow-md text-center">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to Dashboard 🎉
          </h2>

          <p className="text-gray-600">
            You have successfully logged in.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Dashboard