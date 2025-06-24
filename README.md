# PlaceCursor

This is a basic JavaScript "Hello World" project. To run the project, use:

```
npm start
```

## Project Structure
- `index.js`: Main entry point, prints "Hello World" to the console.
- `.github/copilot-instructions.md`: Copilot customization instructions.

## Getting Started
1. Install Node.js if you haven't already.
2. Run `npm install` to install dependencies (none by default).
3. Run `node index.js` to see the output.

# PlaceCursor Chrome Extension

This Chrome extension automatically places the cursor in the first text box on a specific web page (default: https://example.com/). To target a different page or text box, update the `matches` field in `manifest.json` and the selector in `content.js`.

## Files
- `manifest.json`: Chrome extension manifest (v3)
- `content.js`: Content script that focuses the text box
- `background.js`: Service worker (required by manifest v3)

## Usage
1. Update `manifest.json` to match your target site.
2. Update the selector in `content.js` if needed.
3. Load the extension in Chrome:
   - Go to chrome://extensions
   - Enable Developer mode
   - Click "Load unpacked" and select this folder
4. Visit the target page and the cursor will be placed in the text box automatically.
