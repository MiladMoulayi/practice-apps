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

export {findAndReplace, editEntry, deleteEntry, addEntry};