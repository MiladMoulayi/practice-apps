import React from 'react';
import { useState } from 'react';

const CreditCardNumber = () => {
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  const formatCreditCardNum = (creditCardNum) => {
    const number = creditCardNum.trim().replace(/[^0-9]/g, "");

    if (number.length < 5) return number;
    if (number.length < 9) return number.replace(/(\d{4})(\d{1})/, "$1 $2");
    if (number.length < 13) return number.replace(/(\d{4})(\d{4})(\d{1})/, "$1 $2 $3");
    return number.replace(/(\d{4})(\d{4})(\d{4})(\d{1})/, "$1 $2 $3 $4");

  }

  const formatExpiryDate = (expiryDate) => {
    const date = expiryDate.trim().replace(/[^0-9]/g, "");

    if (date.length < 3) return date;
    return date.replace(/(\d{2})(\d{1})/, "$1/$2");

  }

  const onChangeNum = (e) => {
    const targetValue = (formatCreditCardNum(e.target.value));
    setNumber(targetValue);
  }

  const onChangeDate = (e) => {
    const targetValue = (formatExpiryDate(e.target.value));
    setDate(targetValue);
  }

  return (
    <div id="credit-card">
      <label>Credit card #: <input name="credit_card_num" onChange={onChangeNum} value={number} maxLength={19} required></input></label>
      <label>Expiration date: <input name="expiration_date" onChange={onChangeDate} value={date} maxLength={5} required></input></label>
    </div>
  )
}


export default CreditCardNumber;