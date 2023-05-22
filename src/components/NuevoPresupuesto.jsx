import { useState } from 'react'
import Mensaje from './Mensaje.jsx'

function NuevoPresupuesto ({ presupuesto, setPresupuesto }) {
  const [mensaje, setMensaje] = useState('')

  // Validacion del formulario
  const handlePresupuesto = (e) => {
    e.preventDefault()
    if (!Number(presupuesto) || presupuesto <= 0) {
      setMensaje('No es un presupuesto valido')
    } else {
      console.log('Es un presupuesto valido')
    }
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>

        <div className='campo'>
          <label>Definir presupuesto</label>
          <input
            type='number'
            className='nuevo-presupuesto'
            placeholder='Añade tu presupuesto'
            value={presupuesto}
            onChange={e => setPresupuesto(e.target.value)}
          />
        </div>

        <input type='submit' value='Añadir' />

        {mensaje && <Mensaje tipo='error'> {mensaje} </Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto
