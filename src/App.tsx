import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Eu gosto assim... amostradinho</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          João Amostradinho
        </p>
        <div className="tenor-gif-embed" data-postid="10766570176138083195" data-share-method="host" data-aspect-ratio="1.66667" data-width="100%">
          <a href="https://tenor.com/view/amostradinho-gosto-assim-gif-10766570176138083195">Amostradinho Gosto Assim GIF</a>from 
          <a href="https://tenor.com/search/amostradinho-gifs">Amostradinho GIFs</a>
        </div>
      </div>
    </>
  )
}

export default App
