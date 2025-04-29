import { Card } from "../models/card";

const elderFutharkRunes = [
  { rune: "ᚠ", transliteration: "f", meaning: "wealth" },
  { rune: "ᚢ", transliteration: "u", meaning: "aurochs" },
  { rune: "ᚦ", transliteration: "th", meaning: "giant" },
  { rune: "ᚨ", transliteration: "a", meaning: "god" },
  { rune: "ᚱ", transliteration: "r", meaning: "ride" },
  { rune: "ᚲ", transliteration: "k", meaning: "ulcer" },
  { rune: "ᚷ", transliteration: "g", meaning: "gift" },
  { rune: "ᚹ", transliteration: "w", meaning: "joy" },
  { rune: "ᚺ", transliteration: "h", meaning: "hail" },
  { rune: "ᚾ", transliteration: "n", meaning: "need" },
  { rune: "ᛁ", transliteration: "i", meaning: "ice" },
  { rune: "ᛃ", transliteration: "j", meaning: "year" },
  { rune: "ᛇ", transliteration: "ï", meaning: "yew" },
  { rune: "ᛈ", transliteration: "p", meaning: "lot cup" },
  { rune: "ᛉ", transliteration: "z", meaning: "elk" },
  { rune: "ᛊ", transliteration: "s", meaning: "sun" },
  { rune: "ᛏ", transliteration: "t", meaning: "Tyr" },
  { rune: "ᛒ", transliteration: "b", meaning: "birch" },
  { rune: "ᛖ", transliteration: "e", meaning: "horse" },
  { rune: "ᛗ", transliteration: "m", meaning: "man" },
  { rune: "ᛚ", transliteration: "l", meaning: "water" },
  { rune: "ᛜ", transliteration: "ŋ", meaning: "Ing" },
  { rune: "ᛞ", transliteration: "d", meaning: "day" },
  { rune: "ᛟ", transliteration: "o", meaning: "inheritance" }
];

// IDEA (LTJ): could enable triples by updating this to generateDeck(numberOfSets: number, setSize: number)
export function generateDeck(numberOfPairs: number): Array<Card> {
	const runes = shuffle(elderFutharkRunes)
	const deck: Array<Card> = []
	for (let i = 0; i < numberOfPairs; i++) {
		const rune = runes.pop()
		if (rune) {
			deck.push({ id: crypto.randomUUID(), symbol: rune.rune, label: rune.transliteration, visibility: 'hidden', matched: false })
			deck.push({ id: crypto.randomUUID(), symbol: rune.rune, label: rune.transliteration, visibility: 'hidden', matched: false })
		}
	}
	return deck
}
