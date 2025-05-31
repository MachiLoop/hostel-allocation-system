import React from "react";
import { useLocation } from "react-router-dom";
import CustomButton from "./customButton";

const Navigation = () => {
  const location = useLocation();

  if (location.pathname == "/" || location.pathname == "/admin") return;

  return (
    <div
      style={{ backgroundColor: "#000080", color: "#fff" }}
      className="text-white px-8 pt-1 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-6 items-center">
        <img src="UIlogo2.png" alt="ui logo" />
        <div className="flex flex-col gap-3 justify-between">
          <p className="py-2 px-2 hover:pl-2 hover:bg-white hover:text-blue-900  hover:rounded-md">
            Dashboard
          </p>
          <p className="py-2 px-2 hover:pl-2 hover:bg-white hover:text-blue-900 hover:rounded-md">
            Hostel Application
          </p>
          <p className="py-2 px-2 hover:pl-2 hover:bg-white hover:text-blue-900 hover:rounded-md">
            Block Allocation
          </p>
          <p className="py-2 px-2 hover:pl-2 hover:bg-white hover:text-blue-900 hover:rounded-md">
            Room Allocation
          </p>
          <p className="py-2 px-2 hover:pl-2 hover:bg-white hover:text-blue-900  hover:rounded-md">
            Hostel Registration
          </p>
          <p className="py-2 px-2 hover:pl-2 hover:bg-white hover:text-blue-900 hover:rounded-md">
            Checkout Form & ID
          </p>
        </div>
      </div>
      <div className="mb-6 flex items-center gap-2 px-2">
        <img
          src="logout.png"
          alt="Logout button"
          className="w-4 h-4"
          color="red"
        />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Navigation;
