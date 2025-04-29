import "./Board.module.css"

// NOTE (LTJ): removing the type keyword introduces a local module conflict. is this a valid smell?
import { type Board } from "../models/board"

import Card from "./Card";

export interface BoardProps {
  boardState: Board;
}

function Board(props: BoardProps) {
  const { boardState } = props

  return <main>
    {boardState.cards.map((card) => (<Card key={card.id} card={card} />))}
  </main>
}

export default Board