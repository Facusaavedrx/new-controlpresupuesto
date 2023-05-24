import CerrarBtn from '../img/cerrar.svg'

function Modal ({ setModal }) {
  const ocultarModal = () => {
    setModal(false)
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
    </div>
  )
}

export default Modal
