import { Board } from '../models/board';
import { Card } from '../models/card';

type BoardAction =
	{ type: 'reset' } |
	{ type: 'flip-card', payload: string } |
	{ type: 'accept-pair', payload: [Card, Card] } |
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
			const [firstCardIndex, secondCardIndex] = getCardPairIndices(action.payload, state.cards)
			const [firstCardMatched, secondCardMatched] = matchCards(action.payload)
			return {
				...state,
				cards: state.cards.toSpliced(firstCardIndex, 1, firstCardMatched).toSpliced(secondCardIndex, 1, secondCardMatched)
			}
		}
		case 'complete':
			return { ...state, state: 'completed' }
		default:
			throw new Error('Board reducer encountered unknown action type. ' + action)
	}
}

function getCardPairIndices(cardPair: [Card, Card], cards: Array<Card>): [number, number] {
	return [cards.findIndex((c) => c.id === cardPair[0].id), cards.findIndex((c) => c.id === cardPair[1].id)]
}

function matchCards(cardPair: [Card, Card]): [Card, Card] {
	return [{ ...cardPair[0], matched: true, visibility: 'revealed' }, { ...cardPair[1], matched: true, visibility: 'revealed' }]
}