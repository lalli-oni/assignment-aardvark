export interface Card {
  id: string;
  symbol: string;
  label: string;
  visibility: 'hidden' | 'revealed';
  matched: boolean;
}