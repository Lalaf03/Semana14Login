import React, { useContext } from "react";
import { UserContext } from "../context/UserPovider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, signOutUser } = useContext(UserContext);
  const handleClickLogOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log("error en cerrar sesión: ", error.code);
    }
  };

  return (
    <>
      <div>
        {
          //Le damos la dirección donde está (si está logeado)
          user ? (
            <>
              <NavLink to="/">Inicio</NavLink>
              <button onClick={handleClickLogOut}>| LogOut |</button>
            </>
          ) : (
            <>
              <NavLink to="/login">| Login |</NavLink>
              <NavLink to="/register">| Register |</NavLink>
            </>
          )
        }
      </div>
    </>
  );
};

export default Navbar;
