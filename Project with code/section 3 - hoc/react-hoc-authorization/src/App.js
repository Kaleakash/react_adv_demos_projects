import { useState } from "react";
import PrivateComponent from "./PrivateComponent";
import checkPermission from "./checkPermission";
import withAuthorization from "./withAuthorization";


const PrivateComponentComponentWithAuthorization = withAuthorization(
  PrivateComponent,
  checkPermission
);

export default function App() {
  let [role,setRole]=useState("");
  return (
    <div className="App">
      <input type="text" value={role} onChange={(e)=>setRole(e.target.value)}/>
      <br/>
      <PrivateComponentComponentWithAuthorization userRole={role} />
    </div>
  );
}