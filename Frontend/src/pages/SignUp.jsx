import { useState } from "react"
import {Link} from "react-router-dom"

export default function SignUp() {
  const [formData, setFormData] = useState({})
  

  const handleChange = (e) => {
    setFormData({
      ...formData, // to keep the old data
      [e.target.id] : e.target.value, // add new data
    });
    
  };

  

  return (
    <div className="p-3 max-w-lg mx-auto mt-10">
      <h1 className="text-3xl text-center font-semibold mt-3 mb-3">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username"  onChange={handleChange}/>
        <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email" onChange={handleChange}/>
        <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password" onChange={handleChange}/>
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
          </button>
        
      </form>
      
      <div className="flex gap-2 mt-5">
        <p>Have an account? </p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700"> Sign in</span>
        </Link>
      </div>
   
    </div>
  )
}