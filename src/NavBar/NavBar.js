import NavbarItem from "./NavbarItem";


const NavBar= (props) => {

const items =['Inicio','Categorias','Contacto']

  return (
   
   <nav>
  <ul className="nav justify-content-end">
  <ul className="nav nav-pills">
  {props.items?.map((texto,index)=>(
  <NavbarItem key={index}texto={texto}/>
  ))}
</ul>
</ul>
    </nav>
  );
}

export default NavBar
