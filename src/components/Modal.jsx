import CerrarBtn from '../img/cerrar.svg'

function Modal ({ setModal, animarModal, setAnimarModal }) {
  const ocultarModal = () => {
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 250)
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

      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <fieldset>
          <legend>Nuevo gasto</legend>

          <div className='campo'>
            <label htmlFor='nombre'>Nombre:</label>
            <input type='text' name='nombre' id='nombre' placeholder='Ejemplo: Netflix, Spotify.' />
          </div>

          <div className='campo'>
            <label htmlFor='cantidad'>Cantidad:</label>
            <input type='number' id='cantidad' name='cantidad' placeholder='Ejemplo: 150, 300, 550.' />
          </div>

          <div className='campo'>
            <label htmlFor='categoria'>Categoria:</label>
            <select name='categoria' id='categoria'>
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
