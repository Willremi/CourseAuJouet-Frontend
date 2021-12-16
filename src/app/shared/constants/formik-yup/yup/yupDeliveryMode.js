import * as Yup from 'yup'

export const schemaFormDeliveryMode = Yup.object().shape({
    DeliveryMode: Yup.string().required("Veuillez selectionner votre mode de livraison"),
})