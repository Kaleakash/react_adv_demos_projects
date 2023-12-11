import { Link, Outlet, useParams } from "react-router-dom";
import Product from "./Product";


function Products() {

let params = useParams() || 100;
    let products = [
        {"pid":101,"pname":"TV","price":56000},
        {"pid":102,"pname":"Computer","price":45000},
        {"pid":103,"pname":"Laptop","price":90000},
    ]
    return(
        <div>
        <h4>Product Information</h4> 
        {products.map(p=> 
            <Link to={`product/${p.pid}`}>{p.pname}</Link>
        )}
        <Product params={params} products={products}/>
        </div>
    )
}

export default Products;