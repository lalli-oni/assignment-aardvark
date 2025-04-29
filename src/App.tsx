import { useReducer } from 'react'

import { boardReducer } from './state/boardReducer'

import './App.css'

import Board from './components/Board'

import { type Card } from './models/card'
import { generateDeck } from './util-functions/deckFunctions'

function App() {
  const [state, dispatch] = useReducer(boardReducer, { state: 'ongoing', cards: generateDeck(15) })

  function onCardClick(card: Card) {
    // Flip the card
    dispatch({ type: 'flip-card', payload: card.id })
  }

  return (
      <Board
        boardState={state}
        onCardClick={onCardClick}
      />
  )
}

export default App
