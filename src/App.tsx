import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import uuid from 'uuid';

type listType = {
  id: string;
  desc: string;
  check: boolean;
}[]

const myList: listType = [
  {
    id: uuid(),
    desc: 'Gloves',
    check: false
  },
  {
    id: uuid(),
    desc: 'Keys',
    check: true
  },
  {
    id: uuid(),
    desc: 'Phone',
    check: true
  },
  {
    id: uuid(),
    desc: 'Mask',
    check: true
  },
  {
    id: uuid(),
    desc: 'Backpack',
    check: true
  },
  {
    id: uuid(),
    desc: 'Coffee',
    check: false
  },
]

function App() {
  const [newListItem, setNewListItem] = useState<string>("");
  const [editEdit, setEditItem] = useState<string>(""); // item id
  const [editItemInput, setEditItemInput] = useState<string>(""); // desc input

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
