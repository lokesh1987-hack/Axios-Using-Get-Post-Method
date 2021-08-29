import './App.css';
import Data from './Data'
import Header from './Header'
import Input from './Input'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Input />
        <Data /> 
      </header>
    </div>
  );
}

export default App;
