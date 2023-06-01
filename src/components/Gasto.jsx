function Gasto ({ gasto }) {
  const { nombre, cantidad, categoria, id, fecha } = gasto
  return (
    <div className='sombra gasto'>
      <div className='contenido-gasto'>
        <div className='descripcion-gasto'>
          <p className='categoria'> {categoria} </p>
          <p className='nombre-gasto'> {nombre} </p>
        </div>
      </div>
    </div>
  )
}

export default Gasto
