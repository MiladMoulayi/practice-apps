import React from "react";
import { render } from "react-dom";
import {App} from "./App.jsx";
export {Entries} from './components/Entries.jsx';
export {AddEntry} from './components/AddEntry.jsx';
export {EditEntry} from './components/EditEntry.jsx';
export {Dictionary} from './components/Dictionary.jsx';
export {Search} from './components/Search.jsx';
export {Random} from './components/Random.jsx';

render( <App />, document.getElementById("root") );
