import React from 'react';
import { useState } from 'react';
import { API_BASE } from '../App.jsx'

const EditEntry = ({entries, setEntries, editEntryId, setEditEntryId}) => {
  const [newWord, setNewWord] = useState("");
  const [newDef, setNewDef] = useState("");
  const [newPartOfSpeech, setNewPartOfSpeech] = useState("");

  const findAndReplace = (list, data, id) => {
    let updated = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i]._id === data._id) {
        updated.push({
          "_id": id,
          "word": newWord,
          "definition": newDef,
          "partOfSpeech": newPartOfSpeech
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
        definition: newDef,
        partOfSpeech: newPartOfSpeech
      })
    }).then(res => res.json());

    setEntries(findAndReplace(entries, data, id));
    setEditEntryId("");
    setNewWord("");
    setNewDef("");
    setNewPartOfSpeech("");
  }


  if (editEntryId) {

    return (
      <div className="popup">
      <div className="closePopup" onClick={() => setEditEntryId("")}>x</div>
      <div className="content">
        <input
          type="text"
          className="add-word-input"
          placeholder="Word..."
          onChange={e => setNewWord(e.target.value)}
          value={newWord} />
        <input
          type="text"
          className="add-def-input"
          placeholder="Definition..."
          onChange={e => setNewDef(e.target.value)}
          value={newDef} />
        <input
          type="text"
          className="add-pos-input"
          placeholder="Part of speech..."
          onChange={e => setNewPartOfSpeech(e.target.value)}
          value={newPartOfSpeech} />
        <div className="button" onClick={() => editEntry(editEntryId)}>Edit entry</div>
      </div>
    </div>
    )
  } else {
    return "";
  }
}

export {EditEntry};