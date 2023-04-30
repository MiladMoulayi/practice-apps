import React, { useState } from 'react';
import CreditCardNumber from './CreditCardNumber.jsx';

const Form3 = ({ handleSubmit }) => {

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

}

export default Form3;