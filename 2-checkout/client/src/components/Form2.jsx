import React, { useState } from 'react';
import PhoneNumber from './PhoneNumber.jsx';

const Form2 = ({ handleSubmit }) => {

  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL',
    'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT',
    'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI',
    'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ]

  return (
    <form id="form" key={JSON.stringify(document.cookie)} method="post" onSubmit={handleSubmit}>
      <label key="address-line-1-label">Address Line 1: <input name="address_line_one" maxLength={50} required></input></label>
      <br />
      <br />
      <label key="address-line-2-label">Address Line 2: <input name="address_line_two" maxLength={50}></input></label>
      <br />
      <br />
      <label key="city-label">City: <input name="city" maxLength={20} required></input></label>
      <br />
      <br />
      <label htmlFor="state-label" id="state" key="state-label">State: </label>
      <select key="state-select" name="state" id="state">{states.map(state => <option key={state} value={state}>{state}</option>)}</select>
      <br />
      <br />
      <label key="zip-label">ZIP Code: <input name="zip_code" maxLength={5} required></input></label>
      <br />
      <br />
      <label key="phone-number-label">Phone Number: <PhoneNumber /></label>

      <button type="reset">Reset form</button>
      <button type="submit">Next</button>
    </form>

  )

}

export default Form2;