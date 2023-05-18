
import './App.css';
import './index.css'
import NavBar from './NavBar/NavBar'
import ItemCount from './ItemCount/ItemCount';
import funk from './assets/funk.jpg'
import Card from './Card/Card';


function App() {
const contenido = [{
  Titulo:'Funk',
  Descripcion:'Verano',
  imagen: funk
}]

  return (
    
    <div className="app">
    <div className="header__logo">
    <h1>Tienda Postales</h1>
    </div>
     <NavBar items={['Inicio', 'Categorias','Contacto',]}/>
      
    
     {contenido.map((postales)=>(
      <Card titulo={ postales.Titulo} descripcion={postales.Descripcion} imagen={postales.imagen}/>
     ))}
    <ItemCount/>   
      </div>

  );
}
export default App