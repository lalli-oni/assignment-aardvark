import "./Card.css"

import { type Card } from "../models/card"

export interface CardProps {
  card: Card;
  onClick: (card: Card) => void;
}

function Card(props: CardProps) {
  const enabled = !props.card.matched && props.card.visibility === 'hidden'

  return <div
    className="playingCard"
    onClick={() => { if (enabled) props.onClick(props.card) }}
  >
    {props.card.visibility === 'revealed' ?
      <span>
        {props.card.symbol}
      </span>
    :
      <span></span>
    }
  </div>
}

export default Card