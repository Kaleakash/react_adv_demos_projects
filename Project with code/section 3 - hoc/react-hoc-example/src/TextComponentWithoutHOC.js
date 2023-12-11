import { useState } from "react";

const TextComponentWithoutHOC = ({ text }) => {
    const [isHovered, setHovered] = useState(false);
  
    function handleMouseEnter() {
      setHovered(true);
    }
  
    function handleMouseLeave() {
      setHovered(false);
    }
  
    return (
      <>
        <p
          style={{ backgroundColor: isHovered ? "orange" : "white" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
              { text }
        </p>
      </>
    );
  };

  export default TextComponentWithoutHOC;