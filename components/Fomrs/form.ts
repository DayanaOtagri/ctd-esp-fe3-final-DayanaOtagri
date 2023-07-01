import * as yup from "yup";

export const DataPersonalForm = yup.object({
  nombre: yup
    .string()
    .required("El nombre es requerido")
    .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/, "El nombre debe contener solo letras"),

  apellido: yup
    .string()
    .required("El apellido es requerido")
    .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/, "El apellido debe contener solo letras"),

  email: yup
    .string()
    .required("El email es requerido")
    .email("Ingrese un formato de email válido"),
});

export const DataDirection = yup.object({
  direccion: yup.string().required("La dirección es requerida"),

  ciudad: yup.string().required("La ciudad es requerida"),

  provincia: yup.string().required("La provincia es requerida"),

  codigopostal: yup
    .string()
    .required("El código postal es requerido")
    .matches(/^([0-9])*$/, "El código postal debe contener solo números"),
});

export const DataPayment = yup.object({
  numtarjeta: yup
    .string()
    .required("El número de la tarjeta es requerido")
    .min(16, "Ingrese los 16 dígitos de la tarjeta"),

  nombretarjeta: yup
    .string()
    .required("El nombre de la tarjeta es requerido")
    .matches(
      /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/,
      "El nombre de tarjeta debe contener solo letras"
    ),

  fechadeexpiración: yup
    .string()
    .required("La fecha de expiración es requerida")
    .matches(/^([0-9])*$/, "La fecha debe contener solo números")
    .min(4, "Ingrese 4 números")
    .max(4, "Ingrese 4 números"),

  codigodeseguridad: yup
    .string()
    .required("El código de seguridad es requerido")
    .min(3, "Ingrese 3 números")
    .max(3, "Ingrese 3 números"),
});
