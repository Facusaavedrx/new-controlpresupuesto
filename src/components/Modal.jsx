import { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'

function Modal ({ setModal, animarModal, setAnimarModal }) {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [categoria, setCategoria] = useState('')

  const ocultarModal = () => {
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 250)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(nombre)
  }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img
          src={CerrarBtn}
          alt='Boton: Cerrar modal'
          onClick={ocultarModal}
        />
      </div>

      <form
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <fieldset>
          <legend>Nuevo gasto</legend>

          <div className='campo'>
            <label htmlFor='nombre'>Nombre:</label>
            <input
              type='text'
              name='nombre'
              id='nombre'
              placeholder='Ejemplo: Netflix, Spotify.'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className='campo'>
            <label htmlFor='cantidad'>Cantidad:</label>
            <input
              type='number'
              id='cantidad'
              name='cantidad'
              placeholder='Ejemplo: 150, 300, 550.'
              onChange={(e) => setCantidad(Number(e.target.value))}
            />
          </div>

          <div className='campo'>
            <label htmlFor='categoria'>Categoria:</label>
            <select name='categoria' id='categoria' onChange={(e) => setCategoria(e.target.value)}>
              <option value=''>Seleccionar</option>
              <option value='ahorro'>Ahorro</option>
              <option value='comida'>Comida</option>
              <option value='casa'>Casa</option>
              <option value='gastos'>Gastos varios</option>
              <option value='ocio'>Ocio</option>
              <option value='salud'>Salud</option>
              <option value='suscripciones'>Suscripciones</option>
            </select>
          </div>

          <input type='submit' value='Añadir gasto' />
        </fieldset>
      </form>
    </div>
  )
}

export default Modal
