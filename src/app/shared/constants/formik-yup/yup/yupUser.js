import * as Yup from "yup";

export const schemaFormLogin = Yup.object().shape({
  email: Yup.string()
    .required("L'adresse E-mail est obligatoire")
    .email("veuillez entrez un email valide "),
  password: Yup.string().required("Required input"),
});

export const schemaFormRegister = Yup.object().shape({
  firstName: Yup.string()
    .required("Le prénom est obligatoire")
    .matches(/^[\p{L}\s]{2,}$/u, "Le prénom n'est pas au bon format"),
  lastName: Yup.string()
    .required("Le nom est obligatoire")
    .matches(/^[\p{L}\s]{2,}$/u, "Le nom n'est pas au bon format"),
  email: Yup.string()
    .required("L'adresse E-mail est obligatoire")
    .email("veuillez entrez un email valide "),
  password: Yup.string()
    .required("Le mot de passe est obligatoire")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Doit contenir au minimum 8 caratères dont une MAJUSCULE, une minuscule, un chiffre et un caractère spécial"
    ),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "les mots de passe ne sont pas identique "
    )
    .required("La confirmation du mot de passe est obligatoire"),
  phone: Yup.string().matches(
    /^[+]?[0-9]{8,}$/,
    "Le numéro de  telephone n'est pas au bon format"
  ),
  birthday_date: Yup.string().required(
    "Veuillez entrer votre date de naissance"
  ),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required("L'adresse E-mail est obligatoire")
    .email("veuillez entrez un email valide "),
});