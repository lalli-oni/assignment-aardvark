import "./Card.css"

import { type Card } from "../models/card"

export interface CardProps {
  card: Card;
}

function Card(props: CardProps) {
  return <div
    className="playingCard"
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