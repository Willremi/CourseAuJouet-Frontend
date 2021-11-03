import * as Yup from "yup";

export const schemaFormLogin = Yup.object().shape({
  username: Yup.string().required("Required input"),
  password: Yup.string().required("Required input"),
});

export const schemaFormRegister = Yup.object().shape({
  firstname: Yup.string().required("Le nom est obligatoire"),
  lastName: Yup.string().required("Le Prénom est obligatoire"),
  email: Yup.string()
    .required("L'adresse E-mail est obligatoire")
    .email("veuillez entrez email valide "),
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
  phone: Yup.string().required("Le numéro de téléphone est obligatoire"),
  birthday_date: Yup.string().required("La date de naissance est obligatoire"),
});
