import { useEffect, useReducer } from 'react'

import './App.css'
import { boardReducer, initialState } from './state/boardReducer'
import { type Card } from './models/card'

import Board from './components/Board'

function App() {
  const [state, dispatch] = useReducer(boardReducer, initialState())

  function onCardClick(card: Card) {
    const currentlyRevealedCards = state.cards.filter((c) => c.visibility === 'revealed' && c.matched === false)
    // Flip the card
    dispatch({ type: 'flip-card', payload: card.id })

    if (currentlyRevealedCards.length > 1) {
      throw new Error(`Currently ${currentlyRevealedCards.length} cards are revealed.`)
    } else if (currentlyRevealedCards.length > 0) {
      // NOTE (LTJ): Card becomes disabled when revealed.
      if (currentlyRevealedCards[0].id === card.id) throw new Error('Attempting to reveal the same card that is already flipped')

      // One card is already revealed, compare the two
      if (currentlyRevealedCards[0].symbol === card.symbol) {
        dispatch({ type: 'accept-pair', payload: [currentlyRevealedCards[0], card]})
      } else {
        setTimeout(() => {
          dispatch({ type: 'flip-card', payload: card.id })
          dispatch({ type: 'flip-card', payload: currentlyRevealedCards[0].id })
        }, 3000)
      }
    }
  }

  // TODO (LTJ): Extracted this to a useEffect hook because it didn't evaluate right after the `accept-pair` dispatch
  useEffect(() => {
    if (state.cards.every((c) => c.matched && c.visibility === 'revealed')) {
      dispatch({ type: 'complete' })
    }
  }, [state.cards])

  return (<>
    <div>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
    <Board
      boardState={state}
      onCardClick={onCardClick}
    />
  </>
  )
}

export default App
