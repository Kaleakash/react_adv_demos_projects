import { useState } from "react";
import { useSelector } from "react-redux";

function SeconComponent() {
    let [name,setState]=useState("Steven");
    let globalName = useSelector(gs=>gs.name)
    return(
        <div>
            <h3>Second Component</h3>
            <p>State variable value is {name}</p>
            <p>Global varilabe value is {globalName}</p>
        </div>
    )
    }
    export default SeconComponent;