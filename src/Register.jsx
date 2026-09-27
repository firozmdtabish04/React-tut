import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function handleRegister(e) {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      phone,
      username,
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successfully");
    navigate("/login");

    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setUsername("");
  }

  return (
    <>
      <div>
        <div>
          <form action="" onSubmit={handleRegister}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="enter name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter password"
              required
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="enter username"
              required
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="enter phone"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
