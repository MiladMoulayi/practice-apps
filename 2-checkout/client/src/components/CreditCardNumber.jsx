import React from 'react';
import { useState } from 'react';

const CreditCardNumber = () => {
  const [number, setNumber] = useState("");

  const formatCreditCardNum = (creditCardNum) => {
    const number = creditCardNum.trim().replace(/[^0-9]/g, "");

    if (number.length < 5) return number;
    if (number.length < 9) return number.replace(/(\d{4})(\d{1})/, "$1 $2");
    if (number.length < 13) return number.replace(/(\d{4})(\d{4})(\d{1})/, "$1 $2 $3");
    return number.replace(/(\d{4})(\d{4})(\d{4})(\d{1})/, "$1 $2 $3 $4");

  }

  const onChange = (e) => {
    const targetValue = (formatCreditCardNum(e.target.value));
    setNumber(targetValue);
  }

  return (
    <input name="credit_card_num" placeholder="" onChange={onChange} value={number} maxLength={19}></input>
  )
}


export default CreditCardNumber;