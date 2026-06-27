import { prepareWithSegments, walkLineRanges } from '@chenglou/pretext';

/**
 * Finds the "balanced" width for a piece of text.
 * Balanced means the lines are as close to each other in width as possible.
 */
export function findBalancedWidth(text: string, font: string, containerWidth: number): number {
  const prepared = prepareWithSegments(text, font);
  
  let bestWidth = containerWidth;
  let minDifference = Infinity;

  // We try different widths from containerWidth down to containerWidth / 2
  // and see which one gives the most balanced lines.
  // This is a simplified version; a more robust one would use binary search or 
  // Knuth-Plass style penalty functions.
  
  for (let w = containerWidth; w > containerWidth * 0.5; w -= 5) {
    let lineWidths: number[] = [];
    walkLineRanges(prepared, w, (line) => {
      lineWidths.push(line.width);
    });

    if (lineWidths.length <= 1) continue;

    const max = Math.max(...lineWidths);
    const min = Math.min(...lineWidths);
    const diff = max - min;

    // We also want to avoid too many lines if possible
    const penalty = diff + (lineWidths.length * 20); 

    if (penalty < minDifference) {
      minDifference = penalty;
      bestWidth = w;
    }
  }

  return bestWidth;
}
