import React from 'react';
import { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import Button from '@mui/material/Button';
import Entries from './components/Entries';
import AddEntry from './components/AddEntry';
import EditEntry from './components/EditEntry';

const API_BASE = "http://localhost:3000";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newWord, setNewWord] = useState("");
  const [newDef, setNewDef] = useState("");
  const [newPartOfSpeech, setNewPartOfSpeech] = useState("");
  const [editEntryId, setEditEntryId] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    GetEntries();
  }, []);

  const GetEntries = () => {
    fetch(API_BASE + "/glossary")
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.error("Error: ", err))
  }


  return (
    <div className="App">
      <div className="Entries"><Entries entries={entries} setEditEntryId={setEditEntryId}/></div>

      <div className="addPopup" onClick={() => setPopupActive(true)}>+</div>

      {popupActive ? (
        <AddEntry
          setNewWord={setNewWord}
          setNewDef={setNewDef}
          setNewPartOfSpeech={setNewPartOfSpeech}
          setPopupActive={setPopupActive}/>
        ) : ''}

      {editEntryId ? (
        <EditEntry
          setNewWord={setNewWord}
          setNewDef={setNewDef}
          setNewPartOfSpeech={setNewPartOfSpeech}
          editEntryId={editEntryId}
          setEditEntryId={setEditEntryId}/>
        ) : ''}

    </div>
  )
}

export default App;
