# Search Google Images Chrome Extension

This is a simple Chrome extension that allows users to search Google Images for selected text.

## Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable the **Developer mode** toggle in the top-right corner of the page.
4. Click on the **Load unpacked** button and select the folder containing the downloaded extension code.

## Usage

1. Highlight any text on a webpage.
2. Right-click on the selected text to open the context menu.
3. Click on the **Search Google Images** option in the context menu.
4. A new tab will open with a Google Images search for the selected text.

## Manifest Version 3

This extension is built using Manifest Version 3, the latest version of Chrome extension manifest format. It utilizes the `chrome.contextMenus` and `chrome.tabs` APIs to create a context menu item and open a new tab for the Google Images search.

Please note that Manifest Version 3 introduces changes to the extension architecture and some APIs. Make sure to review the code and refer to the [Chrome Extension documentation](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/) for more details on migrating to version 3.

## License

Do whatever you want. It was generated with ChatGPT anyhow :-).