import * as Yup from 'yup'

export const schemaFormAddProduct = Yup.object().shape({
    product_name: Yup.string().required("Le nom du produit est requis"),
    trademark : Yup.string().required("La marque du produit est requis"),
    reference: Yup.string().required("La référence du produit est requis"),
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