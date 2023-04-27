import React from 'react';
import { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import Button from '@mui/material/Button';
import {addEntry} from '../helpers';

const API_BASE = "http://localhost:3000";

const AddEntry = ({entries, setEntries, popupActive, setPopupActive}) => {
  const [newWord, setNewWord] = useState("");
  const [newDef, setNewDef] = useState("");
  // const [newPartOfSpeech, setNewPartOfSpeech] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const addEntry = async () => {
    const data = await fetch(API_BASE + "/glossary/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        word: newWord,
        definition: newDef,
        // partOfSpeech: newPartOfSpeech
      })
    }).then(res => res.json());

    console.log('entries: ', entries)

    setEntries([...entries, data]);
    setPopupActive(false);
    setNewWord("");
    setNewDef("");
    // setNewPartOfSpeech("");
  }

    if (popupActive) {

      return (
        <div className="popup">
          <div className="closePopup" onClick={() => setPopupActive(false)}>x</div>
          <div className="content">
            <h3>Add Entry</h3>
            <input
              type="text"
              className="add-word-input"
              placeholder="New word..."
              onChange={e => setNewWord(e.target.value)}
              value={newWord} />
            <input
              type="text"
              className="add-def-input"
              placeholder="New definition..."
              onChange={e => setNewDef(e.target.value)}
              value={newDef} />
            <div className="button" onClick={(addEntry)}>Add entry</div>
          </div>
        </div>
      )
    } else {
      return ""
    }
}

export default AddEntry;
