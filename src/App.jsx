import { useState } from 'react'
import './App.css'
import Index from './routes/Index'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

function App() {
  return (
    <div className="app__container w-full">
        <Index />
     </div>
  )
}

export default App
