import NuevoPresupuesto from './NuevoPresupuesto.jsx'
import ControlPresupuesto from './ControlPresupuesto.jsx'

function Header ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos }) {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto
        ? (
          <ControlPresupuesto
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
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
