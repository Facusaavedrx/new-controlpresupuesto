import { useState, useEffect } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'

function Modal ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) {
  const [mensaje, setMensaje] = useState('')
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [categoria, setCategoria] = useState('')

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
    }
  }, [])
  const ocultarModal = () => {
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout(() => {
      setModal(false)
    }, 250)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')
      return
    }
    if (!Number(cantidad)) {
      setMensaje('Por favor ingrese un numero valido')
      return
    }

    guardarGasto({ nombre, cantidad, categoria })
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
          {mensaje && <Mensaje tipo='error'> {mensaje} </Mensaje>}

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
              value={cantidad}
            />
          </div>

          <div className='campo'>
            <label htmlFor='categoria'>Categoria:</label>
            <select value={categoria} name='categoria' id='categoria' onChange={(e) => setCategoria(e.target.value)}>
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
