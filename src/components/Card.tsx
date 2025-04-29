import "./Card.css"

import { type Card } from "../models/card"

export interface CardProps {
  card: Card;
  onClick: (card: Card) => void;
}

function Card(props: CardProps) {
  return <div
    className="playingCard"
    onClick={() => props.onClick(props.card)}
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