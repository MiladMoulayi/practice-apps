import React from 'react';
import { useState, useEffect } from 'react';
import Form from './components/Form.jsx';

const App = () => {
  const [formState1, setFormState1] = useState(false);
  const [formState2, setFormState2] = useState(false);
  const [formState3, setFormState3] = useState(false);
  const [formState4, setFormState4] = useState(false);
  let user = {};

  const props = {
    formState1: formState1,
    setFormState1: setFormState1,
    formState2: formState2,
    setFormState2: setFormState2,
    formState3: formState3,
    setFormState3: setFormState3,
    formState4: formState4,
    setFormState4: setFormState4,
    user: user
  }


  return (

    <div className="App">

      <button className="checkout-btn" id="checkout-btn" onClick={() => setFormState1(!formState1)}>Checkout</button>

      <div className="Form" id="checkout-btn"><Form {...props} /></div>

    </div>

  )

}

export default App;
