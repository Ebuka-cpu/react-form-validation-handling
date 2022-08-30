import FormInput from "./components/formInputs/FormInput";
import "../src/app.css";
import { useState } from "react";

export default function App() {
  // SEETING OUR STATE VALUES OBJECTS  .1.
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  // CREATING OUR INPUTS ARRAY   .2.
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:"Username should be 8-15 characters and shouldn't include any special character",
      label: "Usename",
      pattern:"^[A-Za-z0-9]{8,15}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage:"Email should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "birthday",
      errorMessage:"",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:"Choose a strong password and should be 8-15 characters and should include atleast 1 letter, 1 number, and 1 special character",
      label: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage:"password doesn't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  //ENTERING VALUES IN FORMS   .5.
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // SUBMITTING OUR FORMS   .4.
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Join us</h1>
        {inputs.map((input) => (
          <FormInput     // CREATE YOUR FORM COMPONENT AND PASS IN YOUR PROPS .3.
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            
          />
        ))}
        <button>Submit</button>

      </form>
    </div>
  );
}
