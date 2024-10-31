import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserPovider";

const Register = () => {
  const [email, setEmail] = useState("laurafe03@hotmail.com");
  const [password, setPassword] = useState("123456");
  const { registerUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault(); //previene recargar todo el sitio
    console.log("enviando datos: ", email, " ", password);
    try {
      await registerUser(email, password);
      console.log("usuario registrado");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <div>
        <h1>Register</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name=""
          id=""
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Register;
