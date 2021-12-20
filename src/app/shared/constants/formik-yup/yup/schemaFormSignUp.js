import * as Yup from 'yup';

export const schemaFormSignUp = Yup.object().shape({
    pseudo: Yup.string()
    .min(5,"Le pseudonyme doit contenir au moins 5 caratères")
    .required("Champs obligatoire"),
    email: Yup.string()
    .required("Champs obligatoire")
    .email('Saisissez une adresse e-mail valide'),
    password: Yup.string()
    .required("Champs obligatoire")
    .min(8,"Votre mot de passe doit contenir au moins 8 caractères")
    .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Doit contenir au minimum 8 caratères dont une MAJUSCULE, une minuscule, un chiffre et un caractère spécial"
    ),
    Confirmpassword: Yup.string()
    .required("Champs obligatoire")
    .min(8,"Votre mot de passe doit contenir au moins 8 caractères")
    .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Doit contenir au minimum 8 caratères dont une MAJUSCULE, une minuscule, un chiffre et un caractère spécial"
    )
    .oneOf([Yup.ref('password'), null], 'Les mots de passe ne sont pas identiques'),
});