import React from "react";

function SignIn() {
  return (
    <div className="min-h-screen justify-center bg-gray-100 flex items-center">
      <div className="p-8 w-full max-w-md bg-white rounded-2xl shadow-lg border-2 border-red-500">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-600">
          Login Page
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 font-medium block">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 font-medium block">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="p-3 w-full border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="p-3 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
