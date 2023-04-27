import React from 'react';
import { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import Entries from './components/Entries.jsx';
import AddEntry from './components/AddEntry.jsx';
import EditEntry from './components/EditEntry.jsx';
import Dictionary from './components/Dictionary.jsx';
import Search from './components/Search.jsx'

const API_BASE = "http://localhost:3000";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [editEntryId, setEditEntryId] = useState("");
  const [dictActive, setDictActive] = useState(false);

  useEffect(() => {
    GetEntries();
  }, []);

  useEffect(() => {

  }, [filteredEntries])

  const GetEntries = () => {
    fetch(API_BASE + "/glossary")
      .then(res => res.json())
      .then(data => { setEntries(data); setFilteredEntries(data) })
      .catch(err => console.error("Error: ", err))
  }

  return (
    <div className="App">
      <div className="Search"><Search entries={entries} filteredEntries={filteredEntries} setFilteredEntries={setFilteredEntries}/></div>
      <div className="Entries"><Entries entries={entries} setEntries={setEntries} setEditEntryId={setEditEntryId} filteredEntries={filteredEntries} setFilteredEntries={setFilteredEntries}/></div>
      <div className="addPopup" onClick={() => setPopupActive(true)}>+</div>
      <div className="dictionaryLookup" onClick={() => setDictActive(true)}>Dictionary</div>

        <div className="add-entry"><AddEntry entries={entries} setEntries={setEntries} popupActive={popupActive} setPopupActive={setPopupActive}/></div>

        <div className="edit-entry"><EditEntry entries={entries} setEntries={setEntries} editEntryId={editEntryId} setEditEntryId={setEditEntryId}/></div>

        <div className="Dictionary"><Dictionary entries={entries} setEntries={setEntries} dictActive={dictActive} setDictActive={setDictActive}/></div>

        <a className ="surprise-me" target="_blank" href="https://en.wiktionary.org/wiki/Special:Random">Surprise Me</a>


    </div>
  )
}


export default App;
