import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  // function handleLogin(e) {
  //   e.preventDefault();
  //   if (email === "mdtabishfiroz04@gmail.com" || password === "12345") {
  //     alert("Login Successfully");
  //     navigate("/home");
  //   } else {
  //     alert("Invalid User");
  //   }
  // }
  function handleLogin(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("wrong credential");
    }
    if (email === user.email && password === user.password) {
      alert("welcome back dear");
      navigate("/home");
    } else {
      alert("First register dear");
      navigate("/");
    }
  }
  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <input
          type="text"
          name=""
          id=""
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name=""
          id=""
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Login;
