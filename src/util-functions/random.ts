// Returns a copy of a shuffled array
// NOTE (LTJ): This is a seedable (pure) function (with default: 1)
export function shuffle<T>(array: Array<T>, seed: number = 1): Array<T> {
  // NOTE (LTJ): Not particularly efficient. Chose readability over performance.
  return [...array
          .map((value) => ({ value, sort: Math.sin(seed++) }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)]
}