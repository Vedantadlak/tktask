import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


import React, { useState } from 'react'
import { auth } from './firebase';

import axios from 'axios'

function Register(){
      

    const[email, setemail] =useState('');
    const [password, setpassword] = useState('');

    function register(e){
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error)
            })

        var user ={

           
            email:email,
            password:password
        }
        axios.post('',user).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err); 
        })
    }


    return(
        <div>
            <h1>Register</h1>

            <form onSubmit={register}>
                <input type="Email" placeholder='Email' className='form-control'
                    value={email} onChange={(e) => { setemail(e.target.value) }}/>
                <input type="password" placeholder='Password' className='form-control'
                    value={password} onChange={(e) => { setpassword(e.target.value) }}/>
                <input type="submit" className='btn btn-primary' value='SIGN-UP' />
            </form>
        </div>
    )
}
export default Register;
