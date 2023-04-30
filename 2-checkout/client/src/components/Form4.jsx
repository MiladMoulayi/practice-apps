import React, { useState } from 'react';

const Form4 = ({ handleSubmit, user }) => {

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

  return (
    <form id="form" key={JSON.stringify(document.cookie)} method="post" onSubmit={handleSubmit}>
      <div className="confirmation" key={JSON.stringify(document.cookie)}>
        {userLoop()}
      </div>
      <button type="submit">Confirm</button>
    </form>
  )

}

export default Form4;