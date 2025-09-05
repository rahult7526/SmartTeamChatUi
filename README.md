# Smart Team Chat UI      https://smartteamchatui.netlify.app/

A minimal React + Vite prototype showcasing AI‑enhanced team communication with simple placeholder actions. There is no backend or real AI in this demo.

## Overview
Smart Team Chat UI demonstrates three core flows of a chat app and how AI features could be presented in the interface using placeholder outputs.

## Features
- Chat List showing recent conversations and previews
- Chat Window with message bubbles and AI placeholders:
  - Summarize Thread (reveals a dummy summary)
  - Smart Reply Suggestion (reveals a dummy reply)
- New Chat page to enter a participant name and generate a dummy icebreaker
- Clean, minimal Tailwind UI with dark mode toggle

## Tech Stack
- React 18 (Vite)
- Tailwind CSS 3
- React Router 6

## Screens & Routes
- `/` — Chat List (`ChatList.jsx`) rendering data from `src/data/chats.json` via `ChatItem`
- `/chat/:id` — Chat Window (`ChatWindow.jsx`) rendering messages via `MessageBubble`, with AI placeholders inside `AIPlaceholderCard`
- `/new` — New Chat (`NewChat.jsx`) with input and Generate Icebreaker action

## Components
- `ChatItem` — Conversation preview item
- `MessageBubble` — Message UI with sender/receiver styles
- `AIPlaceholderCard` — Reusable card wrapper for AI outputs

## Data
`src/data/chats.json` holds dummy conversations, e.g. names, last message, time, and message arrays.

## Project Structure
```
src/
  components/
    AIPlaceholderCard.jsx
    ChatItem.jsx
    MessageBubble.jsx
  pages/
    ChatList.jsx
    ChatWindow.jsx
    NewChat.jsx
  data/
    chats.json
  App.jsx
  main.jsx
```

## Setup & Scripts
Install dependencies and start the dev server:
```
npm ci
npm run dev
```

Build and preview production output:
```
npm run build
npm run preview
```

## License
MIT
