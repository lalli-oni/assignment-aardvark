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
    {props.card.visibility === 'revealed' ?
      <div className="front">
        {props.card.symbol}
      </div>
    :
      <div className="back"></div>
    }
  </div>
}

export default Card