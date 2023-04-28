import React from 'react';
import { useState, useEffect } from 'react';
import { API_BASE } from '../App.jsx'

const Dictionary = ({entries, setEntries, dictActive, setDictActive}) => {
  const [newWord, setNewWord] = useState("");
  const [newDef, setNewDef] = useState("");
  const [newPartOfSpeech, setNewPartOfSpeech] = useState("");
  const [sourceURL, setSourceURL] = useState("");

  useEffect(() => {
    if (newDef && newPartOfSpeech && sourceURL) {
      addEntry();
    }
  }, [newDef, newPartOfSpeech, sourceURL]);

  const lookup = async () => {
    const data = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + newWord)
      .then(res => res.json())
      .catch(err => console.error("Error: ", err));

    setNewDef(data[0].meanings[0].definitions[0].definition);
    setNewPartOfSpeech(data[0].meanings[0].partOfSpeech);
    setSourceURL(data[0].sourceUrls[0]);
  };

  const addEntry = async () => {
    const data = await fetch(API_BASE + "/glossary/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        word: newWord,
        definition: newDef,
        partOfSpeech: newPartOfSpeech,
        source: sourceURL
      })
    }).then(res => res.json());

    setEntries([...entries, data]);
    setDictActive(false);
    setNewWord("");
    setNewDef("");
    setNewPartOfSpeech("");
    setSourceURL("");
  };

  if (dictActive) {

    return (
      <div className="popup">
        <div className="closePopup" onClick={() => setDictActive(false)}>x</div>
        <div className="content">
          <h3>Look up in dictionary</h3>
          <input
            type="text"
            className="add-word-input"
            placeholder="Word..."
            onChange={e => setNewWord(e.target.value)}
            value={newWord} />
          <div className="button" onClick={(lookup)}>Look up</div>
        </div>
      </div>
    )
  } else {
    return ""
  }

}



export {Dictionary};