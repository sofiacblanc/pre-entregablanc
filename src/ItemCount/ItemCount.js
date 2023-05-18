import {useState} from 'react'

const ItemCount = () => {

const [numero, setNumero] = useState(0)

//let numero = 0
const sumar = () => setNumero (numero + 1) 
const restar =() => setNumero (numero - 1)
const resetear=() =>setNumero (0)




  return (
    <div className='d-flex justify-around'>
     <div>
     <button onClick={sumar} type="button" className="btn btn-dark">+</button>
     </div>
     <h3 className='text-center'> Total: {numero}</h3>
     <div>
     <button onClick={restar} type="button" className="btn btn-dark">-</button>
     </div>
     <div>
     <button onClick= {resetear}type="button" className="btn btn-dark">reset</button>
     </div>
    </div>
  )
}

export default ItemCount