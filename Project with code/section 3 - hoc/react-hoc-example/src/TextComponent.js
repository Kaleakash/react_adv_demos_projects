const TextComponent = ({ text, isHovered }) => {
    return (
      <>
        <p style={{ backgroundColor: isHovered ? "orange" : "white" }}>{text}</p>
      </>
    );
  };

  export default TextComponent;