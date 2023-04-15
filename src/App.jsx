import { useState } from 'react'
import { Inicio } from './components/pages/inicio'
import { Articulos } from './components/pages/Articulos'
import { Crear } from './components/pages/Crear'
import { Router } from './components/router/Router'
import "./app.css"


function App() {

  return (
    <div className='layout'>
<Router />
    </div>
  )
}

export default App
