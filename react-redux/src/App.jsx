import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h2 className="text-center">Counter App</h2>
        <Counter/>
      </div>
    </>
  )
}

export default App
