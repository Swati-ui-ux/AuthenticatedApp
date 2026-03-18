import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
function SignUp() {

  const [show, setShow] = useState(false)
  const navigate = useNavigate()
 const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:""
 })
  let handleChange = (e) => {
   setFormData({...formData,[e.target.name]:e.target.value})
  }
  let handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/signup", formData)
      console.log(res.data)
      navigate("/dashboard")
    } catch (error) {
      console.log("Error in from Data",error)
    }
    setFormData(
    {name:"",
    email:"",
    password:""}
 )
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            type="text"
            required
            placeholder="Name"
            className="w-full border p-2 rounded outline-none"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-full border p-2 rounded outline-none"
            value={formData.email}
              onChange={handleChange}
          />

          <div className="w-full border p-2 rounded flex justify-between">
            <input
              required
              type={show ? "text" : "password"}
              placeholder="Password"
              className="outline-none"
              name="password"
                onChange={handleChange}
              value={formData.password}
            />

            <span
              className="cursor-pointer"
              onClick={() => setShow(prev => !prev)}
            >
              {show ? "🙈" : "👁️"}
            </span>
          </div>

          <button className="w-full mt-2 bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Sign Up
          </button>

          <Link to="/login" className="text-blue-500 hover:underline">
            I already have an account
          </Link>

        </form>

      </div>
    </div>
  )
}

export default SignUp