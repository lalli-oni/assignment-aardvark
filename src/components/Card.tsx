import "./Card.css"

import { type Card } from "../models/card"

export interface CardProps {
  card: Card;
  onClick: (card: Card) => void;
}

function Card(props: CardProps) {
  const enabled = !props.card.matched && props.card.visibility === 'hidden'

  return <div
    className="playing-card"
    onClick={() => { if (enabled) props.onClick(props.card) }}
  >
    <div className={`flip-container ${props.card.visibility === 'revealed' ? 'reveal' : ''}`}>
      <div className="front">
        <div className="front-content">
          {props.card.symbol}
        </div>
      </div>
      <div className="back"></div>
    </div>
  </div>
}

export default Card