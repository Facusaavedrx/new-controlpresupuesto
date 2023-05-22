import NuevoPresupuesto from './NuevoPresupuesto.jsx'

function Header ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto
        ? (
          <p>Presupuesto valido</p>
          )
        : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
          )}
    </header>
  )
}

export default Header
