import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { login } from "./features/userSlice"

function Login() {
    const dispatch = useDispatch();

    // Sing in with google pop up
    const singIn = () => {
        auth
            .signInWithPopup(provider)
            .then(({user}) => {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                        // This photo URL is the Photo URL of google authentication
                })
            );
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i02.appmifile.com/images/2019/05/25/65d91020-cff7-4ccd-b469-e5a5296e2e55.jpg" alt=""/>
                <Button
                    className="login__button"
                    variant="contained"
                    color="primary"
                    onClick={singIn}
                >Log In</Button>
            </div>
        </div>
    )
}

export default Login
