import React, { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export const UserContext = createContext();

const UserPovider = (props) => {
  const [user, setUser] = useState(false); //Falso porque cuando el usuario entra en un principio no está logeado

  //registro con firebase
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  //Login con firebase
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  //LogOut con firebase
  const singOutUser = () => {
    signOut(auth);
  };

  //mantener al ususario presente en el sitio
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const { email, photoURL, displayName, uid } = user;
        setUser({ email, photoURL, displayName, uid });
      } else {
        setUser(null);
      }
    });

    return () => unsuscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, registerUser, loginUser, singOutUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

//Validación de props
UserPovider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserPovider;
