# Users App

Application to view and filter users from the JSONPlaceholder API.

## Tech Stack

- React 19
- TypeScript
- Vite
- Zustand (global state)
- Material UI
- React Router
- Vitest + Testing Library
- Usehooks-ts Library

## Installation

```bash
yarn install
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Starts the development server at `http://localhost:5173` |
| `yarn test` | Runs tests in watch mode |
| `yarn test:run` | Runs tests once |
| `yarn lint` | Runs the linter |

## Usage

1. Start the development server:
```bash
yarn dev
```

2. Open `http://localhost:5173` in your browser

### Features

- **User list**: View all users displayed as cards
- **Filter with debounce**: Search users by name
- **Detail view**: Click on a user to see all their information
- **Persistence**: State is saved to localStorage

## Project Structure

- `src/client/` - API calls
- `src/components/` - Reusable UI components
- `src/store/` - Zustand store
- `src/tests/` - Unit and integration tests
- `src/types/` - TypeScript interfaces
- `src/views/` - Page components

## Tests

```bash
# Watch mode
yarn test

# Single run
yarn test:run
```
