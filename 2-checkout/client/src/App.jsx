import React from 'react';
import { useState, useEffect } from 'react';
import Form from './components/Form.jsx';

const App = () => {
  const [formState1, setFormState1] = useState(false);
  const [formState2, setFormState2] = useState(false);
  const [formState3, setFormState3] = useState(false);
  let user = {};

  const props = {
    formState1: formState1,
    setFormState1: setFormState1,
    formState2: formState2,
    setFormState2: setFormState2,
    formState3: formState3,
    setFormState3: setFormState3,
    user: user
  }


  return (

    <div className="App">

      <button className="checkout-btn" onClick={() => setFormState1(!formState1)}>Checkout</button>

      <div className="Form"><Form {...props} /></div>

    </div>

  )

}

export default App;



// <div className="header">
// <p>Hello, World!</p>
// <p>
//   <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
// </p>
// </div>