

import {createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged} from 'firebase/auth'
import { createContext , useContext, useState, useEffect } from 'react';
import { auth_tool } from '../firebase';


const UserContext = createContext();

export const AuthContext = ({children}) => {


    const [user, setUser ] = useState({});
    

      ///firebase create user with email and password,
      /// which gets called inside the signin component
    const createUser =  (email, password) => {
        return createUserWithEmailAndPassword(auth_tool, email, password);
    }
    
    /***
     * 
     * firebase method for user to login with the registered email and
     * password
     */
    const  loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth_tool, email, password);
    }

    /***
     * when the user clicks the logout button inside account page
     * the signOut method gets called;
     * brings back the user to the login page
     * 
     * * */
    const logoutUser = () => {
        return signOut(auth_tool);
    }

    /*** while user is still logged in , keep the user in a state, once the the user logs out ,set the current user to no user logged in */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth_tool, (currentUser) => {
          setUser(currentUser)  
          console.log(currentUser);
        })
        return  () => {
          unsubscribe();
        }
      }, [])

    return(
        <UserContext.Provider value={{createUser, loginUser, logoutUser, user}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}
