import React from 'react';
import { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import Button from '@mui/material/Button';
import {addEntry} from '../helpers';


const AddEntry = (setNewWord, setNewDef, setNewPartOfSpeech, setPopupActive) => {


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
        <div className="partsOfSpeech">
          <Button
            variant={buttonClicked ? "contained" : "text"}
            size="small"
            color={buttonClicked ? "success" : "secondary"}
            onClick={() => {
              setNewPartOfSpeech("Noun");
              setButtonClicked(!buttonClicked);
            }}>Noun</Button>
          <Button
            variant="text"
            size="small"
            color="secondary"
            onClick={() => { setNewPartOfSpeech("Pronoun") }}>Pronoun</Button>
          <Button
            variant="text"
            size="small"
            color="secondary"
            onClick={() => { setNewPartOfSpeech("Verb") }}>Verb</Button>
          <Button
            variant="text"
            size="small"
            color="secondary"
            onClick={() => { setNewPartOfSpeech("Adverb") }}>Adverb</Button>
          <Button
            variant="text"
            size="small"
            color="secondary"
            onClick={() => { setNewPartOfSpeech("Adjective") }}>Adjective</Button>
          <Button
            variant="text"
            size="small"
            color="secondary"
            onClick={() => { setNewPartOfSpeech("Preposition") }}>Preposition</Button>
          <Button
            variant="text"
            size="small"
            color="secondary"
            onClick={() => { setNewPartOfSpeech("Conjunction") }}>Conjunction</Button>
        </div>
        <div className="button" onClick={(addEntry)}>Add entry</div>
      </div>
    </div>

  )
}

export default AddEntry;
