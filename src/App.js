
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    
    <div className="app">
      <h1 className=''>Tienda Postales</h1>
     <NavBar/> 
     <ItemListContainer greeting={'Tienda'}/>
        </div>



  )
}
export default App