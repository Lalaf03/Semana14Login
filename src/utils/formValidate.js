export const formValidate = (getValues) => {
  return {
    required: {
      value: true,
      message: "campo obligatorio",
    },
    patternEmail: {
      value:
        /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
      message: "Formato de email incorrecto",
    },
    minLength: {
      value: 8,
      message: "minimo 8 caracteres",
    },
    validateTrim: {
      trim: (v) => {
        if (!v.trim()) {
          return "no se aceptan espacios como caracteres";
        } else {
          return true;
        }
      },
    },

    validateEquals(value) {
      return {
        equal: (v) => v === value || "No coinciden las contraseñas",
      };
    },
  };
};
