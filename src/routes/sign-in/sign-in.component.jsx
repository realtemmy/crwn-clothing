import {
  signInWIthGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";


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
        </div>
    )
}

export default SignIn;