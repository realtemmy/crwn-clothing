import { useState} from "react";
import { useDispatch } from "react-redux";
import {
} from "../../utils/firebase/firebase";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import {
  googleSignInStart,
  emailSignInstart,
} from "../../store/user/user-action";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.style";

const defaultdatafield = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch()
  const [data, setdata] = useState(defaultdatafield);
  const { email, password } = data;


  const resetFormFields = () => {
    setdata(defaultdatafield);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setdata({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(emailSignInstart(email, password))
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
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

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
            type="button"
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
