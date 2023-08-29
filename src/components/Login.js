import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggelSigninForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img alt='' src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg' />
            </div>
            <form className='w-3/12 absolute p-12 bg-black mt-40 mx-auto right-0 left-0 text-white rounded-lg opacity-90'>
                <h1 className='font-bold  text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700' />}
                <input type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700' />
                <input type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-700' />
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-4 cursor-pointer' onClick={toggelSigninForm}>{isSignInForm ? 'New to Netflix? Sign up now' : 'Already registered? Sign In now'}.</p>
            </form>
        </div>
    )
}

export default Login