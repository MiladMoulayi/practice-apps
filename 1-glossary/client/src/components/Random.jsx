import React from 'react';
import { useState } from 'react';

const Random = () => {


  const getRandom = async () => {
    const data = await fetch("https://random-word-api.herokuapp.com/word")
      .then(res => res.json())
      .catch(err => console.error("Error: ", err));
  };



  return (
    ""

  )



}

export {Random};