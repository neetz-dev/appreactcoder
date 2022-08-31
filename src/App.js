import './App.css';
import { Contador } from './components/Contador';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';





function App() {
  return (
  <>
    <Navbar />
    <ItemListContainer greeting='Welcome'/>
    <Contador />
  </>
  );
}



export default App;

