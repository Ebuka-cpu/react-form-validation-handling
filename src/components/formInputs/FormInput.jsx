import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  // DESTRUCTURING OUR PROPS (TAKING EVERYTHING WE DONT NEED INSIDE INPUT TAG)
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  //DISPLAY ERRORS
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {   //  .6.
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label className="formInputLabel">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}  // THIS WORKS WHEN WE DONT FULFIL THE REQUIREMENTS OF THAT INPUT FIELD
        focused={focused.toString()} // JUST ONE CLICK
        onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)}   // THIS WORKS WHEN WE CLICK ON ANY ITEM
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
