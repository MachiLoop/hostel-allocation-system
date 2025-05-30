import React from "react";

const FormInput = ({
  label,
  title,
  type,
  placeholder,
  inputFieldStyle,
  length,
}) => {
  return (
    <div>
      <p>{label}</p>
      <div className={inputFieldStyle}>
        <input
          type={type}
          name={title}
          id={title}
          placeholder={placeholder}
          maxLength={length || null}
          className="outline-0 w-full"
        />
        {title == "password" && (
          <img src="eyeHide.png" alt="" className="w-6 h-6" />
        )}
      </div>
    </div>
  );
};

export default FormInput;
