import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const toggelSigninForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handleButtonClick = () => {
        // validate form data 
        let validate = null
        if (isSignInForm) {
            validate = checkValidateData(email.current.value, password.current.value, "signin");
        } else {
            validate = checkValidateData(email.current.value, password.current.value, "signup", name.current.value);
        }
        setErrorMessage(validate)
        // sign in /sign up
        if (validate) return;
        if (!isSignInForm) {
            // sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // update the profile
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                        console.log(user)
                        navigate('/browse')
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        } else {
            // signin logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate('/browse')

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }

    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img alt='' src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black mt-40 mx-auto right-0 left-0 text-white rounded-lg opacity-90'>
                <h1 className='font-bold  text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700' />}
                <input ref={email} type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700' />
                <input ref={password} type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-700' />
                <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-4 cursor-pointer' onClick={toggelSigninForm}>{isSignInForm ? 'New to Netflix? Sign up now' : 'Already registered? Sign In now'}.</p>
            </form>
        </div>
    )
}

export default Login