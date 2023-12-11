const ProductComponent = ({ data, isLoading, error }) => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div style={{"display":"inline-block"}}>
        {data.map((product) => (
          <span>
        
          <img src={product.thumbnail} width="100px" height="100px" style={{"border":"1px solid black","borderRadius":"30px"}}/>
    
          </span>  
        ))}
      </div>
    );
  };

  export default ProductComponent;