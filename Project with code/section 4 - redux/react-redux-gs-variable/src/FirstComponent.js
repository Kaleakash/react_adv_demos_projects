import { useState } from "react";
import { useSelector } from "react-redux";

function FirstComponent() {
let [name,setState]=useState("John");
let globalName = useSelector(gs=>gs.name)

return(
    <div>
        <h3>First Component</h3>
        <p>State variable value is {name}</p>
        <p>Global varilabe value is {globalName}</p>
    </div>
)
}
export default FirstComponent;