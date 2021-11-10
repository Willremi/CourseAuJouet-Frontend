import * as Yup from "yup";

export const schemaFormLogin = Yup.object().shape({
  email: Yup.string().required("L'adresse email est requise")
            .email("L'adresse mail n'est pas valide"),
  password: Yup.string().required("Le mot de passe est requis"),
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
  birthday_date: Yup.string().matches(
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
    "La date n'est pas au bon format"
  ),
});
