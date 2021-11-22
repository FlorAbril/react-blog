import { useFormik } from "formik";
import { Card , Button, Form, FloatingLabel} from "react-bootstrap";
import * as Yup from "yup";


export default function Post ({handleSave, handleCancel, post = {}}) {
    const {title, body} = post

    const {
      handleSubmit, 
      handleChange, 
      handleBlur, 
      errors,
      touched,
      values
    } = useFormik({
      initialValues: {
        title ,
        body
      },
      validationSchema: Yup.object({
        title: Yup.string().required("Required"),
        body: Yup.string().required("Required")
      }),
      onSubmit: () => {
        handleSave({id: post.id, ...values})
      },
    });



    return (
    <Card body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <FloatingLabel
            label="Title"
          >
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter title"
              onChange={handleChange}
              value={values.title}
              onBlur={handleBlur}
              isInvalid={touched.title && errors.title}
              size="lg"
            />
          </FloatingLabel>
          <Form.Control.Feedback type="invalid">
            {errors.title}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="body"
              placeholder="body"
              onChange={handleChange}
              value={values.body}
              onBlur={handleBlur}
              isInvalid={touched.body && errors.body}
              as="textarea"
              style={{ height:"10rem"}}
            />
          <Form.Control.Feedback type="invalid">
            {errors.body}
          </Form.Control.Feedback>
        </Form.Group>
        <div style={{display: "flex", gap: "1em", justifyContent: "flex-end"}}>
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </Card>
  );
}