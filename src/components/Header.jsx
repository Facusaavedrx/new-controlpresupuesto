import NuevoPresupuesto from './NuevoPresupuesto.jsx'

function Header ({ presupuesto, setPresupuesto }) {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
    </header>
  )
}

export default Header
