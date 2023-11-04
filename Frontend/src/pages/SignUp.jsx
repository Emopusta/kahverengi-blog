import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import toast from "react-hot-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register] = useRegisterMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Registered Successfully");
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto mt-10">
      <h1 className="text-3xl text-center font-semibold mt-3 mb-3">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 rounded-lg"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          className="border p-3 rounded-lg"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="
        bg-slate-700 
        text-white 
        p-3 
        rounded-lg 
        uppercase 
        hover:opacity-95 
        disabled:opacity-80
        "
        >
          Sign up
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an account? </p>
        <Link to="/sign-in">
          <span className="text-blue-700"> Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
