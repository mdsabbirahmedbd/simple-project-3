import { createContext, useEffect, useState} from "react"

import { PropTypes } from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from './../firbase/firebase_config';




export const authContext = createContext(null)

const Context = ({children}) => {

    const auth = getAuth(app);
    const [user,setUser] = useState(null);

    const [loading,setLoading] = useState(true)


    useEffect(()=>{
      const unSubscription = onAuthStateChanged(auth,currentUser => {
        setLoading(false)
        setUser(currentUser)
      })
      return ()=> unSubscription()
    },[])


    const googleProvider = new GoogleAuthProvider()
    const singInWithGoogle = ()=>{
      setLoading(true)
      return  signInWithPopup(auth,googleProvider)
    }
    const gitHubProvider = new GithubAuthProvider()
    const singinWithGithub = ()=>{
      setLoading(true)
      return  signInWithPopup(auth,gitHubProvider)
    }


    const registerForm = (email,password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginForm = (email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    const singOut = ()=>{
      setUser(null)
     return signOut(auth)
    }

    const userForm = {registerForm,loginForm,user,singOut,singInWithGoogle,singinWithGithub,loading}



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