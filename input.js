let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
  }
  switch (e.key) {
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
  }
  switch (e.key) {
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
  }
  switch (e.key) {
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
