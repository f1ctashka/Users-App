import { React, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './styles.scss';
import Card from "../../routes/Posts/Card";

const PostForm = () => {
  const [posts, setPosts] = useState([])

  return (
      <Formik
          initialValues={{
            text: '',
            textarea: '',
            select: '0'
          }}

          validationSchema={Yup.object({
            text: Yup.string().required('Required'),
            textarea: Yup.string().required('Required')
          })}

          onSubmit={(values) => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify({
                title: values.text,
                body: values.textarea,
                userId: values.select,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
                .then((response) => response.json())
                .then((json) => {
                  setPosts([...posts, json])
                });
          }}
      >
        <div className="container">
          <div className="form">
            <Form action="" id="form">
              <h2>Post</h2>
              <Field name="text" type="text"/>
              <ErrorMessage name="text" component="span" />
              <Field name="textarea" as="textarea"/>
              <ErrorMessage name="textarea" component="span" />
              <Field name="select" as="select">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Field>
              <Field type="submit" value="Send"/>
            </Form>
          </div>
          {posts.length > 0 ?
              posts.map((item) => (
                  <Card post={item}/>
              )) : <Card post={{userId: '', title: 'You have not written anything here :(', body: 'Nothing here'}}/>}
        </div>
      </Formik>
  )
};

export default PostForm