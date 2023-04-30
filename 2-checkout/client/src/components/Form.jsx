import React from 'react';
import { useState } from 'react';
import PhoneNumber from './PhoneNumber.jsx';
import CreditCardNumber from './CreditCardNumber.jsx';
import States from './States.jsx';

const Form = (props) => {

  const { formState1,
    setFormState1,
    formState2,
    setFormState2,
    formState3,
    setFormState3,
    formState4,
    setFormState4 } = props

  const [user, setUser] = useState({session_id: JSON.stringify(document.cookie)});

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
      if (key === "password") {
        let mask = "";
        for (let i of user[key]) {
          mask += "•"
        }
        res.push(<div key={key}>{key}: {mask}</div>)
      } else {
        res.push(<div key={key}>{key}: {user[key]}</div>)
      }
    }
    return res;
  }

  if (formState1) {
    return (
      <form id="form" key={JSON.stringify(document.cookie)} method="post" onSubmit={handleSubmit}>
        <label>First Name: <input name="first_name" maxLength={30} required></input></label>
        <br />
        <br />
        <label>Last Name: <input name="last_name" maxLength={30} required></input></label>
        <br />
        <br />
        <label>Email: <input type="email" name="email" maxLength={30} required></input></label>
        <br />
        <br />
        <label>Password (must be at least 8 characters): <input type="password" name="password" minLength={8} maxLength={30} required></input></label>
        <br />
        <br />
        <label>date: <input type="month" name="date"></input></label>
        <br />
        <br />
        <label>hidden: <input type="hidden" id="custId" name="custId" value="3487"/></label>

        <button type="reset">Reset form</button>
        <button type="submit">Next</button>

      </form>
    )
  } else if (formState2) {
    return (
      <form id="form" key={JSON.stringify(document.cookie)} method="post" onSubmit={handleSubmit}>
        <label>Address Line 1: <input name="address_line_one" maxLength={50} required></input></label>
        <br />
        <br />
        <label>Address Line 2: <input name="address_line_two" maxLength={50}></input></label>
        <br />
        <br />
        <label>City: <input name="city" maxLength={20} required></input></label>
        <br />
        <br />
        <States />
        <br />
        <label>ZIP Code: <input name="zip_code" maxLength={5} required></input></label>
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
        <CreditCardNumber />
        <br />
        <br />
        <label>CVV: <input type="password" name="cvv" maxLength={3} required></input></label>
        <br />
        <br />
        <label>Billing ZIP code: <input name="billing_zip" maxLength={5} required></input></label>

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

{/* <div className="header">
<p>Hello, World!</p>
<p>
  <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
</p>
</div> */}