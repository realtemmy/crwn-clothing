import {
  signInWIthGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";


const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user} = await signInWIthGooglePopup();
        createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;