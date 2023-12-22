import { createContext, useEffect, useState } from "react";
import app from "./Firebase";
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContex = createContext()

const AuthProvider = ({ children }) => {
    const Auth = getAuth(app)
    const [loing, setLoding] = useState(true)
    const [users, setusers] = useState([])

    const Regester = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const Login = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const Googleprovider = new GoogleAuthProvider();
    const GoogleLogin = () => {
        setLoding(true)
        return signInWithPopup(Auth, Googleprovider);
    }

    const GithubProvider = new GithubAuthProvider();
    const GithubLogin = () => {
        setLoding(true)
        return signInWithPopup(Auth, GithubProvider)
    }

    const updatePhoto = (name, Url) => {
        // setLoding(true)
        return updateProfile(Auth.currentUser, {
            displayName: name, photoURL: Url
        })
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(Auth, user => {
            console.log(user)
            setusers(user)

            setLoding(false)
        })
        return () => {
            setLoding(true)
            unSubscribe()
        }
    }, [Auth])

    const logout = () => {
        setLoding(true)
        return signOut(Auth)
    }

    const authinfo = {
        Regester,
        Login,
        GoogleLogin,
        GithubLogin,
        loing,
        users,
        updatePhoto,
        logout
    }
    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;