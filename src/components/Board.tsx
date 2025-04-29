import "./Board.module.css"

// NOTE (LTJ): removing the type keyword introduces a local module conflict. is this a valid smell?
import { type Board } from "../models/board"

import Card from "./Card";

export interface BoardProps {
  boardState: Board;
}

function Board(props: BoardProps) {

  const onCardClick = (card: Card) => {
    throw new Error('Not implemented on card click.')
  }

  return <main>
    {boardState.cards.map((card) => (<Card key={card.id} card={card} onClick={onCardClick} />))}
  </main>
}

export default Board