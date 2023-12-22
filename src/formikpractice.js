import React from "react";
import { Formik } from "formik";
import { Card } from "react-bootstrap";

const Formikpractice = () => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email Address!!";
        }
        if(!values.password){
            errors.password="Required"
        }
        return errors;

       
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="container-fluid">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" ,backgroundColor:"seagreen"}}
        >
          <div className="row">
            <Card style={{ width: '50rem' }}>
              <Card.Header>
                <h4>Form</h4>
              </Card.Header>
              <div className="col-sm-3">
                <form onSubmit={handleSubmit} style={{justifyContent:"center" }}>
                    <span>
                        <b>Full Name</b>
                        <input type="text" name="name"  onChange={handleChange}></input>
                    </span>
                  <span>
                    <b>Email address</b>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  {errors.email && touched.email && errors.email}
                  <span>
                    <b>Password</b>
                    <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  ></input>
                  </span>
                  
                  {errors.password && touched.password && errors.password}
                  <center>
                  <button type="submit">
                    Submit
                  </button>
                  </center>
                </form>
              </div>
            </Card>
          </div>
        </div>
        </div>
      )}
    </Formik>
  </div>
);

export default Formikpractice;
