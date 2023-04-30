import React, { useState } from 'react';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import Form4 from './Form4.jsx';

const Form = () => {
  const [formState1, setFormState1] = useState(false);
  const [formState2, setFormState2] = useState(false);
  const [formState3, setFormState3] = useState(false);
  const [formState4, setFormState4] = useState(false);

  const [user, setUser] = useState({ session_id: JSON.stringify(document.cookie) });

  const handleSubmit = (e) => {

    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log('user before: ', user)
    for (let key in formJson) {
      setUser((prevState) => ({
        ...prevState,
        [key]: formJson[key],
      }));
    }

    document.getElementById("form").reset();
    console.log('user: ', user);

    if (formState1) {
      setFormState1(!formState1);
      setFormState2(!formState2);
    } else if (formState2) {
      setFormState2(!formState2);
      setFormState3(!formState3);
    } else if (formState3) {
      setFormState3(!formState3);
      setFormState4(!formState4);
    } else if (formState4) {
      setFormState4(!formState4);
      handleFinal();
    }

  }

  const handleFinal = (e) => {

    fetch('/users/', {
      method: form.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });

  }

  if (!formState1 && !formState2 && !formState3 && !formState4) {
    return (
      <button className="checkout-btn" id="checkout-btn" onClick={() => setFormState1(!formState1)}>Checkout</button>
    )
  } else if (formState1) {
    return (
      <Form1 handleSubmit={handleSubmit} />
    )
  } else if (formState2) {
    return (
      <Form2 handleSubmit={handleSubmit} />
    )
  } else if (formState3) {
    return (
      <Form3 handleSubmit={handleSubmit} />
    )
  } else if (formState4) {
    return (
      <Form4 handleSubmit={handleSubmit} user={user} />
    )
  } else {
    return (
      "No form right now"
    )
  }


}

export default Form;
