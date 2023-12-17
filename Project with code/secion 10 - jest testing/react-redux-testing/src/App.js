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
    <div className="container">
    
      <form onSubmit={add} className="form-group">
    
        <div className="row">
          
          <div className="col-2">
              <label htmlFor="newCharacter">New Names</label>
          </div>

          <div className="col-3">
          <input
          type="text"
          id="newCharacter"
          value={newCharacter}
          onChange={(e) => setNewCharacter(e.target.value)}
          className="form-control"
          />
          </div>

          <div className="col-3">
          <button className="btn btn-success">Add Names</button>
          </div>

        </div>

      </form>


      <ol>
        {characters.map((character, i) => (
          <li key={i} data-testid="character">
            <div className="row offset-3">
            <div className="col-3">   <span data-testid="name">{character}</span>{" "}</div>
            <div className="col-3">   <button type="button" onClick={() => deleteCharacter(character)} className="btn btn-danger">
                  Delete
                  </button></div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
