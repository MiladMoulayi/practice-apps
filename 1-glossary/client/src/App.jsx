import React from 'react';
import { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';

const API_BASE = "http://localhost:3000";

const App =  () => {
  const [entries, setEntries] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newWord, setNewWord] = useState("");
  const [newDef, setNewDef] = useState("");

  useEffect(() => {
    GetEntries();
  }, []);

  const GetEntries = () => {
    fetch(API_BASE + "/glossary")
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.error("Error: ", err))
  }

  // const editEntry = async id => {
  //   const data =  await fetch(API_BASE + "/glossary/edit/" + id, {method: "PUT"})
  //     .then(res => res.json());

  //   setEntries(entries => entries.map(entry => {
  //     if (entry._id === data._id) {
  //       entry.word = data.word;
  //       entry.definition = data.definition;
  //     }

  //     return entry;
  //   }));
  // }

  const deleteEntry = async id => {
    const data = await fetch(API_BASE + "/glossary/delete/" + id, {method: "DELETE"})
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
        definition: newDef
      })
    }).then(res => res.json());

    setEntries([...entries, data]);
    setPopupActive(false);
    setNewWord("");
    setNewDef("");
  }



  return (
    <div className="App">
      <div className="Entries">
        {entries.map(entry => (
          <div className="entry" key={entry._id}>
            <h4 className="word">{entry.word}</h4>
            <div className="definition"><h5>Definition:</h5>{entry.definition}</div>

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
              <div className="button" onClick={addEntry}>Create entry</div>
            </div>
          </div>
      ) : ''}

   </div>
  )
}

export default App;
