function Product({params,products}) {

console.log(params)
console.log(products)
    return(
        <div>
            {products.filter(p=>p.pid==eval(params.pid)).map(p=>
                <div>
                    PId {p.pid} PName {p.pname} Price {p.price}
                </div>
                )}
        </div>
    )
}
export default Product;