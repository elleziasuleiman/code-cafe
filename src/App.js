import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { items } from './items';

function App() {
  return (
    <div>
      <Header />
      <Home items={items} />
    </div>
  );
}

//Comment Daus
//Comment 2
export default App;
