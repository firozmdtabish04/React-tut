import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer";
import Home from "../Home";

function Conditional() {
  const isLoggedIn = false;

  // return (
  //   <>
  //     {isLoggedIn ? (
  //       <>
  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //           <Route path="/footer" element={<Footer />} />
  //         </Routes>

  //         <Footer />
  //       </>
  //     ) : (
  //       <Routes>
  //         <Route path="/" element={<Login />} />
  //         <Route path="/signup" element={<SignUp />} />
  //       </Routes>
  //     )}
  //   </>
  // );

  // Using conditional rendering with Routes and Route components
  return (
    <>
      <Routes>
        {isLoggedIn && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/footer" element={<Footer />} />
          </>
        )}

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default Conditional;
