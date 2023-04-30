import React, { useState } from 'react';

const Form1 = ({ handleSubmit }) => {

  return (

    <form id="form" key={JSON.stringify(document.cookie)} method="post" onSubmit={handleSubmit}>
    <label key="first-name-label">First Name: <input name="first_name" maxLength={30} required></input></label>
    <br />
    <br />
    <label key="last-name-label">Last Name: <input name="last_name" maxLength={30} required></input></label>
    <br />
    <br />
    <label key="email-label">Email: <input type="email" name="email" maxLength={30} required></input></label>
    <br />
    <br />
    <label key="password-label">Password (must be at least 8 characters): <input type="password" name="password" minLength={8} maxLength={30} required></input></label>

    <button type="reset">Reset form</button>
    <button type="submit">Next</button>

  </form>

  )



}

export default Form1;
