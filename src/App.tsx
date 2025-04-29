import './App.css'

import Board from './components/Board'

const initialState: Board = {
  state: 'ongoing',
  cards: []
}

function App() {

  return (
      <Board boardState={initialState} />
  )
}

export default App
