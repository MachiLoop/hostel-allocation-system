import React, { useState } from "react";

const FormInput = ({ label, title, type, placeholder, inputFieldStyle }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <p>{label}</p>
      <div className={inputFieldStyle}>
        <input
          type={showPassword ? "text" : type}
          name={title}
          id={title}
          placeholder={placeholder}
          className="outline-0 w-full"
        />
        {title == "password" && (
          <img
            src={showPassword ? "eye.png" : "eyeHide.png"}
            alt=""
            className="w-6 h-6"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    </div>
  );
};

export default FormInput;
