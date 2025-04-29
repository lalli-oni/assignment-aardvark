import { Board } from '../models/board';
import { Card } from '../models/card';

type BoardAction =
	{ type: 'reset' } |
	{ type: 'flip-card', payload: string } |
	{ type: 'accept-pair', payload: [number, number] } |
	{ type: 'complete' }

export function boardReducer(state: Board, action: BoardAction): Board {
  switch (action.type) {
		case 'reset':
			throw new Error('Reset board feature not implemented.')
		case 'flip-card': {
			const cardIndex = state.cards.findIndex((c) => c.id === action.payload)
			if (cardIndex === -1) throw new Error(`Can't find card ${action.payload}`)
			const card = state.cards[cardIndex]
			const flippedCard: Card = { ...card, visibility: card.visibility === 'hidden' ? 'revealed' : 'hidden' }
			return {
				...state,
				cards: state.cards.toSpliced(cardIndex, 1, flippedCard)
			}
		}
		case 'accept-pair': {
			const [firstCard, secondCard] = getCardPair(action.payload, state.cards)
			return {
				...state,
				cards: state.cards.toSpliced(action.payload[0], 1, firstCard).toSpliced(action.payload[1], 1, secondCard)
			}
		}
		case 'complete':
			throw new Error('Complete game feature not implemented.')
		default:
			throw new Error('Board reducer encountered unknown action type. ' + action)
	}
}

function getCardPair(idPair: [number, number], cards: Array<Card>): [Card, Card] {
	return [cards[idPair[0]], cards[idPair[1]]]
}