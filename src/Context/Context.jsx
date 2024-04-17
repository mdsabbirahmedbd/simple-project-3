import { createContext, useEffect, useState} from "react"

import { PropTypes } from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './../firbase/firebase_config';




export const authContext = createContext(null)

const Context = ({children}) => {

    const auth = getAuth(app);
    const [user,setUser] = useState(null);


    useEffect(()=>{
      const unSubscription = onAuthStateChanged(auth,currentUser => {
        setUser(currentUser)
      })
      return ()=> unSubscription()
    },[])


    const googleProvider = new GoogleAuthProvider()
    const singInWithGoogle = ()=>{
        signInWithPopup(auth,googleProvider)
    }


    const registerForm = (email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginForm = (email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
    }

    const singOut = ()=>{
     return signOut(auth)
    }

    const userForm = {registerForm,loginForm,user,singOut,singInWithGoogle}



  return (
      <authContext.Provider value={userForm}>
        {children}
      </authContext.Provider>
  )
}

export default Context

Context.propTypes = {
    children:PropTypes.node
}