import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';


export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const gitHubProvider = new GithubAuthProvider();

const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    const setUserNameAndPictureUrl = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, logInUser => {
            setUser(logInUser);
            setLoading(false);
        })
        return () => { unsubscribe();
        }
    }, [])

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }

    const authInfo = { user, createUser, logIn, setUserNameAndPictureUrl, logOut, signInWithGoogle, signInWithGitHub, loading }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;