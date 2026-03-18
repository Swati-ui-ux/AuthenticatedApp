
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
function Login() {
    let [loginFormData, setLoginFromData] = useState({ email: "", password: "" })
    let [show, setShow] = useState(false)
    const navigate = useNavigate()
    let handleChange = (e) => {
        setLoginFromData({
            ...loginFormData,
            [e.target.name]:e.target.value
        })
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/auth/login", loginFormData)
            localStorage.setItem("token", res.data.token)
            navigate("/dashboard")
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
        
        setLoginFromData({ email: "", password: "" })
        
    }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
                      type="email"
                      required
            placeholder="Email"
                      className="w-full border p-2 rounded"
                      name='email'
value={loginFormData.email}
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
              value={loginFormData.password}
            />

            <span
              className="cursor-pointer"
              onClick={() => setShow(prev => !prev)}
            >
              {show ? "🙈" : "👁️"}
            </span>
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Login
                  </button>
                  <Link to="/signup" className="text-blue-500 hover:underline">
            create new account
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login