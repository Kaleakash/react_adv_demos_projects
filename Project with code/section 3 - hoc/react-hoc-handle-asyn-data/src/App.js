import ProductComponent from "./ProductComponent";
import fetchProducts from "./fetchProducts";
import withDataFetch from "./withDataFetch";

const PostComponentWithData = withDataFetch(ProductComponent, fetchProducts);

export default function App() {
  return (
    <div className="App">
      <PostComponentWithData />
    </div>
  );
}