import { useEffect, useReducer, useState } from 'react'

import './App.css'
import { boardReducer, initialState } from './state/boardReducer'
import { type Card } from './models/card'

import Board from './components/Board'
import Button from './components/Button'

function App() {
  const [state, dispatch] = useReducer(boardReducer, null, initialState)
  const [revealQueue, setRevealQueue] = useState<Array<Card>>([])

  function onCardClick(card: Card) {
    // short-circuit if we already have 2 or more cards revealed
    if (revealQueue.length > 1) return
    if (card.visibility === 'revealed' || card.matched) console.error('clicked a revealed or matched card')

    dispatch({ type: 'flip-card', payload: card.id })
    const cardToCompare = revealQueue[0]
    setRevealQueue([...revealQueue, card])

    if (revealQueue.length % 2 > 0) {
      if (cardToCompare === undefined) throw new Error('No card in queue to compare to.')

      // One card is already revealed, compare the two
      if (cardToCompare.symbol === card.symbol) {
        dispatch({ type: 'accept-pair', payload: [cardToCompare, card]})
        setRevealQueue([...revealQueue.slice(2)])
      } else {
        setTimeout(() => {
          dispatch({ type: 'hide-card', payload: card.id })
          dispatch({ type: 'hide-card', payload: cardToCompare.id })
          setRevealQueue([...revealQueue.slice(2)])
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
      <Button onClick={() => dispatch({ type: 'reset' })} label="Reset" />
    </div>
    <Board
      boardState={state}
      onCardClick={onCardClick}
    />
  </>
  )
}

export default App
