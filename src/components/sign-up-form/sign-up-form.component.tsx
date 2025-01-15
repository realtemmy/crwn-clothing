import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from "./sign-up-form.style";
import { signUpStart } from "../../store/user/user-action";


const defaultFormfield = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormfield);
  const { displayName, email, password, confirmPassword } = formField;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormField(defaultFormfield);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields()
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Email already in use, cannot create user.");
      }
      console.log("error in ", error);
    }
    
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account yet?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
