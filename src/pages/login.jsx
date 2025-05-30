import React from "react";

const Login = () => {
  return (
    <div className="grid grid-cols-2 w-full h-full">
      <div className="bg-gray-500 flex flex-col items-center justify-center">
        <img src="uiLogo.png" alt="UI logo" width={150} height={150} />
        <p className="font-bold text-xl mt-2">
          University Hostel Allocation System
        </p>
        <p className="font-bold text-xl">Login</p>
      </div>
      {/* right column */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <div className="mt-5">
            <h1 className="font-semibold text-gray-500 text-2xl mb-0.5">
              Welcome Back!
            </h1>
            <p>Enter your details to get Started</p>
          </div>
          <div className="flex flex-col gap-3 mt-6">
            <div>
              <p>Matric No</p>
              <input
                type="number"
                name="matricNo"
                id="matricNo"
                placeholder="Matric no"
                maxLength={6}
                className="border px-2 py-1.5 w-64 rounded-lg mt-1"
              />
            </div>
            <div>
              <div>
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border px-2 py-1.5 w-64 rounded-lg mt-1"
                />
              </div>
              <p className="mt-1.5">Forgot your password?</p>
            </div>
          </div>
          <button className="bg-gray-400 py-2 px-2 mt-6  rounded-lg w-full">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
