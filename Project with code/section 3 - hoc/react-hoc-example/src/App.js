
import './App.css';

import InputComponent from './InputComponent';
import TextComponent from './TextComponent';
import TextComponentWithoutHOC from './TextComponentWithoutHOC';
import withHoverHOC from './withHoverHOC';
// Creating components that contain hover logic using
// Higher Order Component.
const TextComponentWithHover = withHoverHOC(TextComponent);
const InputComponentWithHover = withHoverHOC(InputComponent);


function App() {
  return (
    <div className="App">
      {/* <TextComponentWithoutHOC text="This is simple text change style without HOC!"></TextComponentWithoutHOC> */}
      <TextComponentWithHover
        text="This is simple text change style with HOC!"
      />
      <InputComponentWithHover text="input"></InputComponentWithHover>
      
    </div>
  );
}

export default App;
