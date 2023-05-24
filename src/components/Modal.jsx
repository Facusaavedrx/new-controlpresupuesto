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
      <p>Hola desde Modal</p>

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

        </fieldset>
      </form>
    </div>
  )
}

export default Modal
