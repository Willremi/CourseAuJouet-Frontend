import * as Yup from 'yup'

export const schemaFormAddProduct = Yup.object().shape({
    product_name: Yup.string().required("Le nom du produit est requis")
    .max(65, "La taille du nom est limitée à 65 caractères"),
    trademark : Yup.string().required("La marque du produit est requis")
    .max(65, "La taille de la marque est limitée à 65 caractères"),
    reference: Yup.string().required("La référence du produit est requis")
    .max(30, "La taille de la réference est limitée à 30 caractères"),
    Stock: Yup.number().required("Entrez votre stock en possession")
    .min(0,"Le stock ne peut pas être négatif"),
    Price: Yup.number().required("Votre produit n'a pas de prix")
    .min(0,"Le prix ne peut pas être négatif"),
    required_age: Yup.string().required("La tranche d'âge est requis"),
    category: Yup.string().required("Quel est la catégorie du produit ?"),
    images: Yup.array().of(Yup.string()
    .min(1,"Veuillez ajouter au moins une image")
    .required("Veuillez ajouter au moins une image")
    ),
    description: Yup.string().required("La description de l'article est obligatoire"),
})

export const ModifyProductSchema = Yup.object().shape({
    product_name: Yup.string()
      .required("Le nom est obligatoire")
      .max(65, "La taille du nom est limitée à 65 caractères"),
      trademark: Yup.string()
        .required("La marque est nécessaire")
        .max(65, "La taille de la marque est limitée à 65 caractères"),
    reference: Yup.string()
      .required("La réference est obligatoire")
      .max(30, "La taille de la réference est limitée à 30 caractères"),
    stock: Yup.string()
      .required("Le stock est obligatoire")
      .matches(/^[0-9]*$/, "Le stock doit être exprimé en chiffres"),// REGEX pour uniquement des chiffres
    price: Yup.string()
      .required("Le prix est nécessaire")
      .matches(/^[0-9]*$/, "Le prix doit être exprimé en chiffres"),
    required_age: Yup.string()
      .required("La tranche d'âge est requis"),
    category: Yup.string()
      .required("La catégorie est nécessaire"),
    subcategory: Yup.string()
      .notRequired("La sous-catégorie est nécessaire"),
    images: Yup.array().of(Yup.string()),
    description: Yup.string()
      .required("Une description du produit est nécessaire"),
    status: Yup.boolean()
      .required("Le statut est nécessaire")
  });
  