import { useFormik } from 'formik';
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useState } from 'react';
import  Alert from 'react-bootstrap/Alert';
 
const Login = () => {
  const [,setToken] = useLocalStorage('token');
  const [error,setError] = useState('');
   
  const {
        handleSubmit, 
        handleChange, 
        handleBlur, 
        errors,
        touched,
        values
      } = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string()
            .min(3, "Must be 3 characters or more")
            .required("Required")
        }),
        onSubmit: async (values) => {
          axios({
            method: "post",
            url: "http://challenge-react.alkemy.org/",
            data: {
              email: values.email,
              password: values.password,
            },
          })
            .then((res) => {
              setToken(res.data.token);
            })
            .catch(({ response }) => {
              const message = response.data.error;
              const status = `Error ${response.status}: ${response.statusText}`;
              setError(JSON.stringify(`${message}. ${status}`));
            });
        },
      });

  return (
    <div style = {{ width:" 100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center" 
        }}
    >

    <Card body border="primary" 
      style = {{ flexBasis: "20rem",
        height: "min-content",
        margin: "0 1em" 
      }}
    >
      <Card.Title>Log In</Card.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            isValid={touched.email && !errors.email}
            isInvalid={touched.email && errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            isValid={touched.password && !errors.password}
            isInvalid={touched.password && errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
    </div>
    

  );
 };

 export default Login;