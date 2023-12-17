import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import charactersSlice from './charactersSlice';

import buildStore from "./buildStore";
import "./index.css";

const store = buildStore();
const actions = charactersSlice.actions;

export default function App() {
  return (
    <Provider store={store}>
      <OfficeCharacters />
    </Provider>
  );
}

export function OfficeCharacters() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state);
  const [newCharacter, setNewCharacter] = useState("");

  function add(e) {
    e.preventDefault();
    dispatch(actions.add(newCharacter));
    setNewCharacter("");
  }

  function deleteCharacter(character) {
    dispatch(actions.remove(character));
  }

  return (
    <>
      <form onSubmit={add}>
        <label htmlFor="newCharacter">New Character</label>
        <input
          type="text"
          id="newCharacter"
          value={newCharacter}
          onChange={(e) => setNewCharacter(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul>
        {characters.map((character, i) => (
          <li key={i} data-testid="character">
            <span data-testid="name">{character}</span>{" "}
            <button type="button" onClick={() => deleteCharacter(character)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
