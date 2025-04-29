export interface Card {
	id: string;
	symbol: string;
	visibility: 'hidden' | 'revealed';
	matched: boolean;
}