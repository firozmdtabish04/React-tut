import React, { use, useState, useRef } from "react";

// useState is a React hook that allows you to add state to functional components. In this code, we are using useState to manage the form data for a registration form. The form includes fields for name, email, and password, and when the form is submitted, the data is logged to the console and an alert is shown to indicate successful submission.
// function Form() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);
//     alert("Form submitted successfully!");
//   };

//   return (
//     <div>
//       <h1>Registration Form</h1>

//       <form onSubmit={handleSubmit}>
//         {/* Name */}
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* Password */}
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter your password"
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// useRef is a React hook that allows you to create a reference to a DOM element or a value that persists across renders. In this code, we are using useRef to create references for the name, email, and password input fields in the registration form. When the form is submitted, we can access the current values of these input fields using the refs and log them to the console.

function Form() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  console.log("Re-rendering Form component");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(inputRef.current.value);

    console.log("Name:", inputRef.current.value);

    alert("Form submitted successfully!");
  };

  return (
    <div className="px-4 min-h-screen bg-blue-600 justify-center flex items-center">
      <form
        onSubmit={handleSubmit}
        className="p-8 w-full max-w-md bg-white rounded-2xl shadow-2xl"
      >
        {/* Heading */}
        <h1 className="mb-8 text-3xl font-bold text-blue-700 text-center">
          Registration Form
        </h1>

        {/* Name Input */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="mb-2 text-sm font-semibold text-blue-900 block"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            ref={inputRef}
            placeholder="Enter your name"
            className="px-4 py-3 w-full border-2 border-blue-200 rounded-lg text-gray-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-3 w-full bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>

        {/* Display Name */}
        {name && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="mb-1 text-sm text-blue-500">Your Name</p>

            <h2 className="text-xl font-bold text-blue-800">{name}</h2>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
