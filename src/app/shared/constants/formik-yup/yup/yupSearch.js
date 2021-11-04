import * as Yup from 'yup'

export const schemaFormSearch = Yup.object().shape({
    search: Yup.string().required("Required input"),
})