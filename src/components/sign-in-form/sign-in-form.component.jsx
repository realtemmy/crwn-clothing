import { useState} from "react";
import {
  signInWIthGooglePopup,
  SignInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.style.scss";

const defaultdatafield = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [data, setdata] = useState(defaultdatafield);
  const { email, password } = data;


  const resetFormFields = () => {
    setdata(defaultdatafield);
  };

  const signInWithGoogle = async () => {
    await signInWIthGooglePopup();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setdata({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await SignInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password");
          break;

        case "auth/user-not-found":
          alert("Email does not exist");
          break;
        case "auth/network-request-failed":
          alert("Please check your internet connection");
          break;

        default:
          alert("An error occured, please recheck info");
          console.log(error);
          break;
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
