import { useState } from "react";

function withHoverHOC(WrappedComponent) {
    return function (props) {
      const [isHovered, setHovered] = useState(false);
  
      function handleMouseEnter() {
        setHovered(true);
      }
  
      function handleMouseLeave() {
        setHovered(false);
      }
  
      return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <WrappedComponent {...props} isHovered={isHovered} />
        </div>
      );
    };
  }
  
  export default withHoverHOC;