import { Target } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleRegister(e) {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Welcome to learning");
    navigate("/login");
    setEmail("");
    setName("");
    setPassword("");
  }

  return (
    <div>
      <form action="" onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Register;
