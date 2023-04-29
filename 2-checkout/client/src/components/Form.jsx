import React from 'react';
import { useState } from 'react';
import PhoneNumber from './PhoneNumber.jsx';

const Form = (props) => {

  const { formState1,
    setFormState1,
    formState2,
    setFormState2,
    formState3,
    setFormState3,
    formState4,
    setFormState4 } = props

  const [user, setUser] = useState({});

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

  const userLoop = () => {
    let res = [];
    for (let key in user) {
      res.push(<div key={key}>{key}: {user[key]}</div>)
    }
    return res;
  }

  if (formState1) {
    return (
      <form id="form" key={JSON.stringify(document.cookie)} method="post" onSubmit={handleSubmit}>
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
        <button type="submit">Next</button>

      </form>
    )
  } else if (formState2) {
    return (
      <form id="form" key={JSON.stringify(document.cookie)} method="post" onSubmit={handleSubmit}>
        <label>Address Line 1: <input name="address_line_one" placeholder="123 Main St..."></input></label>
        <br />
        <br />
        <label>Address Line 2: <input name="address_line_two" placeholder="Apt. #1..."></input></label>
        <br />
        <br />
        <label>City: <input name="city" placeholder="Los Angeles..."></input></label>
        <br />
        <br />
        <label>State: <input name="state" placeholder="CA..."></input></label>
        <br />
        <br />
        <label>ZIP Code: <input name="zip_code" placeholder="90210..."></input></label>
        <br />
        <br />
        <label>Phone Number: <PhoneNumber /></label>

        <button type="reset">Reset form</button>
        <button type="submit">Next</button>
      </form>
    )
  } else if (formState3) {
    // F3 collects credit card #, expiry date, CVV, and billing zip code.

    return (
      <form id="form" key={JSON.stringify(document.cookie)} method="post" onSubmit={handleSubmit}>
        <label>Credit Card #: <input name="credit_card_num" placeholder="1234-5678-9012-3456..."></input></label>
        <br />
        <br />
        <label>Expiration date: <input name="expiration_date" placeholder="04/28..."></input></label>
        <br />
        <br />
        <label>CVV: <input name="cvv" placeholder="123..."></input></label>
        <br />
        <br />
        <label>Billing ZIP code: <input name="billing_zip" placeholder="90210..."></input></label>

        <button type="reset">Reset form</button>
        <button type="submit">Submit</button>
      </form>
    )
  } else if (formState4) {
    // F3 collects credit card #, expiry date, CVV, and billing zip code.

    return (
      <form id="form" key={JSON.stringify(document.cookie)} method="post" onSubmit={handleSubmit}>
        <div className="confirmation" key={JSON.stringify(document.cookie)}>
          {userLoop()}
        </div>
        <button type="submit">Confirm</button>
      </form>
    )
  } else {
    return (
      "No form right now"
    )
  }


}

export default Form;

// <div className="header">
// <p>Hello, World!</p>
// <p>
//   <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
// </p>
// </div>