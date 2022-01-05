import * as Yup from 'yup'

export const schemaFormAddProduct = Yup.object().shape({
    product_name: Yup.string().required("Le nom du produit est requis"),
    trademark : Yup.string().required("La marque du produit est requis"),
    reference: Yup.string().required("La référence du produit est requis"),
    Stock: Yup.string().required("Entrez votre stock en possession"),
    Price: Yup.string().required("Votre produit n'a pas de prix"),
    required_age : Yup.string().required("l'age minimum est requis"),
    category: Yup.string().required("Quel est la catégorie du produit ?"),
    images: Yup.array().of(Yup.string()
    .min(1,"Veuillez ajouter au moins une image")
    .required("Veuillez ajouter au moins une image")
    ),
    description: Yup.string().required("La description de l'article est obligatoire"),
})

export const ModifyProductSchema = Yup.object().shape({
    product_name: Yup.string()
      .required("Le nom est obligatoire"),
      trademark: Yup.string()
        .required("La marque est nécessaire"),
    reference: Yup.string()
      .required("La réference est obligatoire"),
    stock: Yup.string()
      .required("Le stock est obligatoire")
      .matches(/^[0-9]*$/, "Le stock doit être exprimé en chiffres"),// REGEX pour uniquement des chiffres
    price: Yup.string()
      .required("Le prix est nécessaire")
      .matches(/^[0-9]*$/, "Le prix doit être exprimé en chiffres"),
    required_age: Yup.string()
      .required("L'age est nécessaire"),
    category: Yup.string()
      .required("La catégorie est nécessaire"),
    subcategory: Yup.string()
      .required("La sous-catégorie est nécessaire"),
    // image: Yup.string()
    //   .required("Une URL d'image est requise"),
    description: Yup.string()
      .required("Une description du produit est nécessaire"),
    status: Yup.boolean()
      .required("Le statut est nécessaire")
  });
  