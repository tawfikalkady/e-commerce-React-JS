import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

const provider = new GoogleAuthProvider();
const auth = getAuth();

const LoginDemo = () => {
//////////////////////////////////////////////////////
    const handleLogin=() => {
        signInWithPopup(auth, provider).then((result) => {

            const user = result.user;
            alert('login successfully done!')
          }).catch((error) => {
            //handle errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
////////////////////////////////////////////////////////////


//     const handleLogin=() => {
// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   })
//     }

  return (
    <div className='m-5 p-5'>
        <button className="bg-primary px-4 text-white" onClick={handleLogin}>login</button>
    </div>
  )
}

export default LoginDemo