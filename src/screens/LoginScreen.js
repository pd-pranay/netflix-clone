import React, { useState } from 'react'
import Netflix from '../img/netflix.png'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';
export default function Login() {
    const [signUp, setsignUp] = useState(false);
    return (
        <div className='login-screen'>
            <div className='login-screen-background'>
                <img
                    className='login-screen-logo'
                    // src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'
                    src={Netflix}
                />
                <button
                    className='login-screen-button'
                    onClick={() => setsignUp(true)}
                >
                    Sign In
                </button>
                <div className='login-screen-gradient'></div>
                <div className='login-screen-body'>
                    {
                        signUp ?
                            (<SignUpScreen />) : (
                                <>
                                    <h1>
                                        Unlimited movies, TV shows and more.
                                    </h1>
                                    <h2>
                                        Watch anywhere. Cancel anytime.
                                    </h2>
                                    <h3>
                                        Ready to watch? Enter your email to create or restart your membership.
                                    </h3>
                                    <div className='login-screen-input'>
                                        <form>
                                            <input
                                                placeholder='Email Address'
                                                type='email'
                                            />
                                            <button
                                                className='login-screen-get-started'
                                                onClick={() => setsignUp(true)}
                                            >
                                                Get Started
                                            </button>
                                        </form>
                                    </div>
                                </>
                            )}

                </div>
            </div>
        </div>
    )
}
