# Task 1 - Monthly Tasks

A simple React-based task management table for tracking monthly tasks, with options to edit, prepare data for API, and post to a mock API endpoint.

## Features

- Editable task table (task name, status, assignee, notes)
- Prepare and view JSON data for API submission
- POST data to a mock API endpoint (jsonplaceholder)
- Responsive and clean UI with status feedback

## Project Structure

```
index.html
script.js
style.css
```

- **index.html**: Main HTML file, loads React and your scripts.
- **script.js**: Contains the React code for the task table and API logic.
- **style.css**: Styles for the UI.

## Usage

1. Open `index.html` in your browser.
2. Edit tasks directly in the table.
3. Click **Prepare Data for API** to view the JSON payload.
4. Click **POST to API** to send data to the mock API (https://jsonplaceholder.typicode.com/posts).
5. Status messages will appear below the buttons.

## Dependencies

- [React 18 (UMD)](https://unpkg.com/react@18/umd/react.development.js)
- [ReactDOM 18 (UMD)](https://unpkg.com/react-dom@18/umd/react-dom.development.js)

These are loaded via CDN in `index.html`.

## Customization

- To change the initial tasks, edit the `tasks` array in [`script.js`](script.js).
- To use a real API, update the fetch URL in the `postToApi` function in [`script.js`](script.js).


