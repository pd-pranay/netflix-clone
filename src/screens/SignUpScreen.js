import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SignUpScreen.css'

export default function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.register();

        auth, createUserWithEmailandPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        })
            .catch((error) => {
                console.log(error);
            })
    }
    const signIn = (e) => {
        e.register();
    }
    return (
        <div className='signupscreen'>
            <form>
                <h1>Sign In</h1>
                <input
                    ref={emailRef}
                    placeholder='Email'
                    type='email'
                />
                <input
                    ref={passwordRef}
                    placeholder='Password'
                    type='password'
                />
                <button type='submit'
                    onClick={signIn}
                >
                    Sign In
                </button>
                <h4>
                    <span className="signupscreen-gray">New to Netflix?</span>
                    <span className="signupscreen-link" onClick={register}>Sign Up Now.</span>
                </h4>
            </form>
        </div>
    )
}
