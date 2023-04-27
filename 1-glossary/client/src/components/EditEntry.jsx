import React from 'react';
import { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import Button from '@mui/material/Button';
import {editEntry, findAndReplace} from '../helpers';

const EditEntry = (setNewWord, setNewDef, setNewPartOfSpeech, editEntryId, setEditEntryId) => {

  return (

    <div className="popup">
    <div className="closePopup" onClick={() => setEditEntryId("")}>x</div>
    <div className="content">
      <h3>editEntryId: {editEntryId}</h3>
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
      <div className="button" onClick={() => editEntry(editEntryId)}>Edit entry</div>
    </div>
  </div>

  )
}

export default EditEntry;