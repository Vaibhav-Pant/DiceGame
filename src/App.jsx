import StartGame from './components/MainPage'
import Game from './components/Game'
import { useState } from 'react'

function App() {

  const [isStarted, setisStarted] = useState(false);

  const togglePlay = () => {
    setisStarted((prev) => !prev)
  }

  return (
    <>
      {
        isStarted ? <Game />: <StartGame toggle={togglePlay} />
      }
    </>
  )
}

export default App
