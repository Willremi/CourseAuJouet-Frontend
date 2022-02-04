import { Form, Formik } from "formik";
import { Icon } from "@iconify/react";
import { StockFormSchema } from "../../constants/formik-yup/yup/yupProduct";

const StockForm = ({submit}) => (
    <Formik
        initialValues={{stock:""}}
        validationSchema={StockFormSchema}
        onSubmit={submit}
    >
        <Form>
            <input
            id="stock"
            name="stock"
             type="text"
             className="w-2/3 h-8"/>
                <button type="submit">
                    <Icon
                      icon="dashicons:update-alt"
                      className="scale-200 text-nav-blue mx-3"
                      />
                </button>
        </Form>
    </Formik>
);

export default StockForm