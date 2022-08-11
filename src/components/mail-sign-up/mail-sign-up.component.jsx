import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";



const defaultdatafield = {
  email: "",
  password: "",
};


const SignUpWithMail = () => {

    const [data, setdata] = useState(defaultdatafield);
    const {email, password} = data;



     const handleChange = (e) => {
       const { name, value } = e.target;

       setdata({ ...data, [name]: value });
     };

     const handleSubmit = async (e) => {
       e.preventDefault();
       
       try {
         const { user } = await createAuthUserWithEmailAndPassword(
           email,
           password
         );
         createUserDocumentFromAuth(user, { displayName: email });
       } catch (error) {
         if (error.code === "auth/email-already-in-use") {
           alert("Email already in use, cannot create user.");
         }
         console.log("error in ", error);
       }
     };




  return (
    <div>
      <h2>Don't have an account yet?</h2>
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

        <Button> Sign In </Button>
      </form>
    </div>
  );
};

export default SignUpWithMail