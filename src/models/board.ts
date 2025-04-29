import { Card } from "./card";

export interface Board {
	state: 'ongoing' | 'completed';
	cards: Array<Card>;
}