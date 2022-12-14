import React from "react";
import { useFormik } from "formik";
import * as Yup from "react-yup";

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string()
                .min(5, "Must be 5 characters or more")
                .required("Required")
        }),
        onSubmit: (values) => {
            (JSON.stringify(values, null, 2));
            console.log(values)        
        }

        // function handleClick() {         
        //     console.log(values);
        //  }      

    });
    // function handleClick() {         
    //     console.log();
    //  }      

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
                <div className="input-feedback">{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className="input-feedback">{formik.errors.password}</div>
            ) : null}

            <button type="submit" >Submit</button>
        </form>
    );
};

export default LoginForm;
