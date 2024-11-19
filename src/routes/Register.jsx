import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserPovider";
import { Form, useNavigate } from "react-router-dom";
import { useFormAction } from "react-router-dom";
import { useForm } from "react-hook-form";
import { formValidate } from "../utils/formValidate";
import { erroresFirebase } from "../utils/erroresFirebase";

import FromInput from "../components/FromInput";
import FormError from "../components/FormError";
import Title from "../components/Title";
import Button from "../components/Button";

const Register = () => {
  //const [email, setEmail] = useState("laurafe03@hotmail.com");
  //const [password, setPassword] = useState("123456");
  const { registerUser } = useContext(UserContext);
  const navegate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const { required, patternEmail, minLength, validateTrim, validateEquals } =
    formValidate();

  const onSubmit = async ({ email, password }) => {
    console.log("procesando formulario-->_", email, password);
    try {
      await registerUser(email, password);
    } catch (error) {
      console.log(error, code);
    }
  };

  /*const handleSubmit = async (e) => {
    e.preventDefault(); //previene recargar todo el sitio
    console.log("enviando datos: ", email, " ", password);
    try {
      await registerUser(email, password);
      console.log("usuario registrado");
    } catch (error) {
      console.log(error.code);
    }
  };*/

  return (
    <>
      <Title text="Register" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FromInput
          type="email"
          name=""
          id=""
          placeholder="email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          label="Ingresa tu correo"
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FromInput>

        {errors.email && <p>{errors.email.message}</p>}

        <FromInput
          type="password"
          name=""
          id=""
          placeholder="password"
          {...register("password", {
            required,
            minLength,
            validate: validateTrim,
          })}
          label="ingresa tu contraseña"
          error={errors.password}
        ></FromInput>

        <FromInput
          type="password"
          name=""
          id=""
          placeholder="password2"
          {...register("password2", {
            validate: validateEquals(getValues("password2")),
          })}
          label="Repite contraseña"
          error={errors.password2}
        >
          <FormError error={errors.password2} />
        </FromInput>
        <button type="submit">Enviar</button>
        {/*<Button type="submit" text="Register" />*/}
      </form>
    </>
  );
};

export default Register;
