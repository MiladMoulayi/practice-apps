import React from 'react';
import { useState } from 'react';

const Form1 = ({ formState, setFormState }) => {

  const handleSubmit = (e) => {

    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    fetch('/users/form1', { method: form.method, body: formData });



  }

  if (formState) {
    return (
      <form className="form1" method="post" onSubmit={handleSubmit}>
        <label>First Name: <input name="first_name" placeholder="John..."></input></label>
        <br />
        <br />
        <label>Last Name: <input name="last_name" placeholder="Wick..."></input></label>
        <br />
        <br />
        <label>Email: <input name="email" placeholder="bulletTime@node.js..."></input></label>
        <br />
        <br />
        <label>Password: <input name="password" placeholder="password123..."></input></label>

      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>

      </form>
    )
  } else {
    return (
      "No form right now"
    )
  }


}

export default Form1;