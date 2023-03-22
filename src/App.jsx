import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Dropzone, Footer, Navbar } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <div className='boxes'>
        
        <Dropzone className="box"/>
        <div className="box text__box">
          <h1>Simple, private file sharing</h1>
          <p>Wormhole lets you share files with end-to-end encryption and a link that automatically expires. So you can keep what you share private and make sure your stuff doesn't stay online forever.</p>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
