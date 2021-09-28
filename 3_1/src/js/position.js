export default function genPosition(currIndex) {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
  } while (currIndex === nextIndex);
  return nextIndex;
}
