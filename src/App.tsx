import './App.css'

import Board from './components/Board'

const initialState: Board = {
  state: 'ongoing',
  cards: []
}

  function onCardClick(card: Card) {
    throw new Error('Card click not implemented.')
  }

  return (
      <Board
        boardState={state}
        onCardClick={onCardClick}
      />
  )
}

export default App
