import CartWidget from "../CartWidget/CartWidget";
const NavBar= () => {
  return (

    <nav>
      <ul className="nav justify-content-end">
  <li className="nav-item">
    <p className="nav-link active" aria-current="page" >Active</p>
  </li>
  <li className="nav-item">
    <p className="nav-link" >Link</p>
  </li>
  <li classNameName="nav-item">
    <p className="nav-link" >Link</p>
  </li>
  <li className="nav-item">
    <p className="nav-link disabled">Disabled</p>
  </li>
  <CartWidget/>
</ul>

      
    </nav>
  );
}

export default NavBar
