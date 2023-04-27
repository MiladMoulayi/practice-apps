import React from 'react';
import { useState } from 'react';

const API_BASE = "http://localhost:3000";


const Entries = ({entries, setEntries, setEditEntryId, filteredEntries, setFilteredEntries}) => {

  const deleteEntry = async id => {
    const data = await fetch(API_BASE + "/glossary/delete/" + id, { method: "DELETE" })
      .then(res => res.json());

    setEntries(entries => entries.filter(entry => entry._id !== data._id));
  }

  return (
    <div className="Entries">
    {filteredEntries.map(entry => (
      <div className="entry" key={entry._id}>
        <h4 className="word">{entry.word}</h4>
        <div className="definition"><h5>Definition:</h5>{entry.definition}</div>
        <div className="definition"><h5>Part of Speech:</h5>{entry.partOfSpeech}</div>
        <div className="source"><a href={entry.source || "https://en.wiktionary.org/wiki/" + entry.word} target="_blank">Look up on Wiktionary</a></div>
        <div className="edit-entry" onClick={() => setEditEntryId(entry._id)}>Edit</div>
        <div className="delete-entry" onClick={() => deleteEntry(entry._id)}>Del</div>
      </div>
    ))}
    </div>
  )
}

export default Entries;
