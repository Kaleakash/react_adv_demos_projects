import { render, screen, within, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import buildStore from "./buildStore";
import { OfficeCharacters } from "./App";
import charactersSlice from "./charactersSlice";
describe("OfficeCharacters", () => {
  function renderOfficeCharacters() {
    const store = buildStore();

    render(
      <Provider store={store}>
        <OfficeCharacters />
      </Provider>
    );

    return {
      newCharacter: screen.getByLabelText("New Names"),
      addButton: screen.getByText("Add Names"),
      getCharacters() {
        return screen.getAllByTestId("character").map((item) => ({
          name: within(item).getByTestId("name").textContent,
          deleteButton: within(item).getByText("Delete")
        }));
      }
    };
  }

  it("should add a character", () => {
    const { newCharacter, addButton, getCharacters } = renderOfficeCharacters();

    const pam = "Pam Beesly";

    // verify pam is NOT in the initial list
    expect(
      getCharacters().find((character) => character.name === pam)
    ).toBeFalsy();

    // add pam
    fireEvent.change(newCharacter, { target: { value: pam } });
    fireEvent.click(addButton);

    // verify pam is first in the list
    expect(
      getCharacters().findIndex((character) => character.name === pam)
    ).toBe(0);
  });

  it("should delete a character", () => {
    const { getCharacters } = renderOfficeCharacters();

    const jim = "Jim Halpert";

    const deleteJim = getCharacters().find(
      (character) => character.name === jim
    ).deleteButton;

    // delete character
    fireEvent.click(deleteJim);

    // verify character is NOT in list
    expect(
      getCharacters().find((character) => character.name === jim)
    ).toBeFalsy();
  });
});
