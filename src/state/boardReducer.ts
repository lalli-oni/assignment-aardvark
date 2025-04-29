import { Board } from '../models/board';
import { Card } from '../models/card';

type BoardAction =
	{ type: 'reset' } |
	{ type: 'accept-pair', payload: [number, number] } |
	{ type: 'complete' }

export function boardReducer(state: Board, action: BoardAction): Board {
  switch (action.type) {
		case 'reset':
			throw new Error('Reset board feature not implemented.')
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