import React from 'react';
import { useState, useEffect } from 'react';
import Form1 from './components/Form1.jsx';

const App = () => {
  const [formState, setFormState] = useState(false);

  return (

    <div className="App">

      <div className="header">
        <p>Hello, World!</p>
        <p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        </p>
      </div>

      <button className="checkout-btn" onClick={() => setFormState(!formState)}>Checkout</button>

      <div className="Form1"><Form1 formState={formState} setFormState={setFormState} /></div>




    </div>

  )

}

export default App;