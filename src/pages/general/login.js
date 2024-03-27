import React from 'react'

//app from firebaseConfig
import {auth, provider} from '../firebase/firebase'

import { signOut, signInWithPopup } from "firebase/auth";

//cookies for keeping user logged in
import Cookies from "universal-cookie";

const cookies = new Cookies();

const login = ({ isAuth, setIsAuth, setIsInChat, setUser}) => {

    const signInWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          setUser(result.user.email);
          console.log(result.user.email);
          
          cookies.set("auth-token", result.user.refreshToken);
          setIsAuth(true);
        } catch (err) {
          console.error(err);
        }
    };

    const signUserOut = async () => {
        await signOut(auth);
        cookies.remove("auth-token");
        setIsAuth(false);
        setIsInChat(false);
    };

  return (
    <div className='login'>
        { isAuth?
        (<button onClick={signUserOut}> Sign Out</button>)
        :
        (<button onClick={signInWithGoogle}>G-Login</button>) }
    </div>
  )
}

export default login
