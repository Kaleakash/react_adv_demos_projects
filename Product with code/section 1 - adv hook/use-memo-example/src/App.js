import logo from './logo.svg';
import './App.css';
import WithoutUseMemo from './WithoutUseMemo';
import WithUseMemo from './WithUseMemo';
import UseMemoWithDependency from './UseMemoWithDependency';

function App() {
  return (
    <div className="App">
      <WithoutUseMemo></WithoutUseMemo>
      <WithUseMemo></WithUseMemo>
      <UseMemoWithDependency></UseMemoWithDependency>
    </div>
  );
}

export default App;
