import { useState } from "react";
import { useSelector } from "react-redux";

function Customer() {

    let customer = useSelector(gs=>gs.customer)

    return(
        <div>
            <h3>Customer Information</h3>
            <p>Customer Id {customer.cid} Name is {customer.name} Age is {customer.age}</p>
        </div>
    )
}

export default Customer;