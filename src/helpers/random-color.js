export function generateRandomColor() {
  const red = Math.floor(Math.random() * 80 + 150);
  const green = Math.floor(Math.random() * 80 + 150);
  const blue = Math.floor(Math.random() * 80 + 150);

  return `rgb(${red}, ${green}, ${blue})`;
}
