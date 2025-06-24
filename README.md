# PlaceCursor

This is a basic JavaScript Chrome extension project that will place a cursor in a text box. 

## Project Structure
- `content.js`: Main entry point.
- `background.js`: background.js is required for manifest v3 service worker, but not used in this simple extension.
- `manifest.json`: Defines the extension structure for Chrome.  Go here and edit the applied domain found in the 'matches' clause before use. 

## Getting Started
1. Clone the git or copy the files to a folder.
2. Read the rest of this README.md file.

# PlaceCursor Chrome Extension

This Chrome extension automatically places the cursor in the first text box on a specific web page. To target a different page or text box, update the `matches` field in `manifest.json` and the selector in `content.js`.

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
