import React from 'react';
import { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import Button from '@mui/material/Button';
import {deleteEntry} from '../helpers';

const Entries = (entries, setEditEntryId) => {

  return (
    <div className="Entries">
    {entries.map(entry => (
      <div className="entry" key={entry._id} onClick={() => setEditEntryId(entry._id)}>
        <h4 className="word">{entry.word}</h4>
        <div className="definition"><h5>Definition:</h5>{entry.definition}</div>
        <div className="definition"><h5>Part of Speech:</h5>{entry.partOfSpeech}</div>
        <div className="delete-entry" onClick={() => deleteEntry(entry._id)}>x</div>
      </div>
    ))}
    </div>
  )
}

export default Entries;
