// This content script places the cursor in the first text box on the page.
// Update the selector to target a specific input if needed.

let interval;
let paused = false;

function placeCursor() {
  if (paused) return false;
  console.log('Trying to place cursor...');
  // Find the element with id="numBadgeID" and then the first input inside it
  const container = document.getElementById('numBadgeID');
  const textBox = container ? container.querySelector('input') : null;
  
  if (textBox) {
    textBox.focus();
    // Optionally, place cursor at the end
    if (textBox.setSelectionRange) {
      const len = textBox.value.length;
      textBox.setSelectionRange(len, len);
    }
    console.log('Cursor placed in the text box');
    // Pause checking while focused
    textBox.addEventListener('focus', () => { paused = true; });
    textBox.addEventListener('blur', () => { paused = false; });
    return true;
  }
  return false;
}

function startChecking() {
  interval = setInterval(() => {
    if (!paused) {
      placeCursor();
    }
  }, 3000);
}

// Initial attempt
placeCursor();
startChecking();
