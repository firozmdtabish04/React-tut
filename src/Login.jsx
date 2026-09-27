import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // function handleLogin(e) {
  //   e.preventDefault();
  //   if (email === "tabish04@gmail.com" && password === "12345") {
  //     document.write("Login Successfully");
  //     alert("Navigate");
  //   } else {
  //     alert("Invalid Credentials");
  //   }
  // }

  function handleLogin(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No user found. Please register first.");
      return;
    }

    if (email === user.email && password === user.password) {
      alert(`Welcome ${user.name}! Login Successful`);
      console.log("Navigate to Dashboard");
      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
  }

  return (
    <div className="min-h-screen justify-center bg-gray-100 flex items-center">
      <div className="p-8 bg-white rounded-xl shadow-lg w-96">
        <h1 className="mb-6 text-2xl font-bold text-center">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-full border rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 w-full border rounded-lg"
            required
          />

          <button
            type="submit"
            className="p-3 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
