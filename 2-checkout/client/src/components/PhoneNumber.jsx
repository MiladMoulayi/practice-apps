import React from 'react';
import { useState } from 'react';

const PhoneNumber = () => {
  const [number, setNumber] = useState("");

  const formatPhoneNum = (phoneNumber) => {
    const number = phoneNumber.trim().replace(/[^0-9]/g, "");

    if (number.length < 4) return number;
    if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
    return number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
  }

  const onChange = (e) => {
    const targetValue = (formatPhoneNum(e.target.value));
    setNumber(targetValue);
  }

  return (
    <input name="phone_number" placeholder="555-424-3636..." onChange={onChange} value={number} maxLength={12}></input>
  )
}

export default PhoneNumber;