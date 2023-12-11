const InputComponent = ({ type, isHovered }) => {
    return (
      <input
        type={type}
        style={{ backgroundColor: isHovered ? "orange" : "white" }}
      />
    );
  };

  export default InputComponent;