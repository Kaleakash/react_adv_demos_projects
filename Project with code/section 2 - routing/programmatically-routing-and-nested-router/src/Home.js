import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Home() {
const navigate = useNavigate();

return(
    <div className="container">

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header" style={{"textAlign":"center"}}>
      <a className="navbar-brand" href="#" onClick={()=>navigate("customer")}>Customer</a>
      <a className="navbar-brand" href="#" onClick={()=>navigate("products")}>Product</a>
      <a className="navbar-brand" href="#" onClick={()=>navigate("order")}>Order</a>
      <a className="navbar-brand" href="#" onClick={()=>navigate("/")}>Logout</a>
    </div>
  </div>
</nav>
<hr/>
        <h2>Welcome to Home Component</h2>
        <div style={{"margin":"50px"}}>
            <Outlet/>
        </div>
    </div>
)
}

export default Home;