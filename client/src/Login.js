import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import React, { useState ,useEffect} from 'react'
import { auth } from './firebase';

function Login() {


    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    
    const [auth, setAuth] = useState(
        false || window.localStorage.getItem('auth') === 'true'
    );
    const [token, setToken] = useState('');

    

    function login(e) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                if (userCredential) {
                    setAuth(true);
                    window.localStorage.setItem('auth', 'true');
                    userCredential.getIdToken().then((token) => {
                        setToken(token);
                        
                    });

                    console.log({token})
                }
            }).catch((error) => {
                console.log(error)
            })

        var user = {


            email: email,
            password: password
        }
    }


    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={login}>
                <input type="Email" placeholder='Email' className='form-control'
                    value={email} onChange={(e) => { setemail(e.target.value) }} />
                <input type="password" placeholder='Password' className='form-control'
                    value={password} onChange={(e) => { setpassword(e.target.value) }} />
                <input type="submit" className='btn btn-primary' value='SIGN-IN' />
            </form>
        </div>
    )
}
export default Login;
