import "./Board.module.css"

import { type Board } from "../models/board"

import Card from "./Card";

export interface BoardProps {
  boardState: Board;
  onCardClick: (card: Card) => void;
}

function Board(props: BoardProps) {
  const { boardState, onCardClick } = props

  return <>
    <div>{boardState.state === 'completed' ? "You won!" : null}</div>
    <main>
      {boardState.cards.map((card) => (<Card key={card.id} card={card} onClick={onCardClick} />))}
    </main>
  </>
}

export default Board