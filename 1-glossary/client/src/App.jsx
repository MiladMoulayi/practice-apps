import React from 'react';
import { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import { Button } from '@mui/material'

const API_BASE = "http://localhost:3000";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newWord, setNewWord] = useState("");
  const [newDef, setNewDef] = useState("");
  const [newPartOfSpeech, setNewPartOfSpeech] = useState("");
  const [editEntryId, setEditEntryId] = useState("");

  useEffect(() => {
    GetEntries();
  }, []);

  const GetEntries = () => {
    fetch(API_BASE + "/glossary")
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.error("Error: ", err))
  }

  const findAndReplace = (list, data, id) => {
    let updated = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i]._id === data._id) {
        updated.push({
          "_id": id,
          "word": newWord,
          "definition": newDef
        });
      } else {
        updated.push(list[i]);
      }
    }
    return updated;
  }

  const editEntry = async id => {
    const data = await fetch(API_BASE + "/glossary/edit/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        word: newWord,
        definition: newDef
      })
    }).then(res => res.json());

    setEntries(findAndReplace(entries, data, id));
    setEditEntryId("");
    setNewWord("");
    setNewDef("");
    setNewPartOfSpeech("");
  }

  const deleteEntry = async id => {
    const data = await fetch(API_BASE + "/glossary/delete/" + id, { method: "DELETE" })
      .then(res => res.json());

    setEntries(entries => entries.filter(entry => entry._id !== data._id));
  }

  const addEntry = async () => {
    const data = await fetch(API_BASE + "/glossary/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        word: newWord,
        definition: newDef,
        partOfSpeech: newPartOfSpeech
      })
    }).then(res => res.json());

    setEntries([...entries, data]);
    setPopupActive(false);
    setNewWord("");
    setNewDef("");
    setNewPartOfSpeech("");
  }



  return (
    <div className="App">
      <div className="Entries">
        {entries.map(entry => (
          <div className="entry" key={entry._id} onClick={() => setEditEntryId(entry._id)}>
            <h4 className="word">{entry.word}</h4>
            <div className="definition"><h5>Definition:</h5>{entry.definition}</div>
            <div className="definition"><h5>Part of Speech:</h5>{entry.partOfSpeech}</div>

            {/* <div className="editBtn"></div> */}

            <div className="delete-entry" onClick={() => deleteEntry(entry._id)}>x</div>

          </div>
        ))}
      </div>

      <div className="addPopup" onClick={() => setPopupActive(true)}>+</div>

      {popupActive ? (
        <div className="popup">
          <div>newWord: {newWord} newDef: {newDef}</div>
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
              <Button variant="text" size="small" color="secondary" onClick={() => { setNewPartOfSpeech("Noun") }}>Noun</Button>
              <Button variant="text" size="small" color="secondary" onClick={() => { setNewPartOfSpeech("Pronoun") }}>Pronoun</Button>
              <Button variant="text" size="small" color="secondary" onClick={() => { setNewPartOfSpeech("Verb") }}>Verb</Button>
              <Button variant="text" size="small" color="secondary" onClick={() => { setNewPartOfSpeech("Adverb") }}>Adverb</Button>
              <Button variant="text" size="small" color="secondary" onClick={() => { setNewPartOfSpeech("Adjective") }}>Adjective</Button>
              <Button variant="text" size="small" color="secondary" onClick={() => { setNewPartOfSpeech("Preposition") }}>Preposition</Button>
              <Button variant="text" size="small" color="secondary" onClick={() => { setNewPartOfSpeech("Conjunction") }}>Conjunction</Button>
            </div>
            <div className="button" onClick={(addEntry)}>Add entry</div>
          </div>
        </div>
      ) : ''}


      {editEntryId ? (
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
      ) : ''}






    </div>
  )
}

export default App;
