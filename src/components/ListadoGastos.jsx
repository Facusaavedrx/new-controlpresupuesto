import Gasto from './Gasto'

function ListadoGastos ({ gastos }) {
  return (
    <div className='listado-gastos contenedor'>
      <h2> {gastos.length ? 'Gastos' : 'No hay gastos disponibles'} </h2>

      {gastos.map(gasto => {
        return (
          <Gasto key={gasto.id} gasto={gasto} />
        )
      })}
    </div>
  )
}

export default ListadoGastos
