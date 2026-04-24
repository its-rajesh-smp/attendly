# Attendly Web

Attendly is a modern event management platform that allows users to discover, join, and RSVP to events seamlessly. Built with a React and TypeScript frontend, it provides a user-friendly interface for browsing events, managing RSVPs, and handling user authentication.

## Features

- **Event Discovery**: Browse a curated list of events with pagination and filtering options.
- **User Authentication**: Secure login and signup functionality with validation and error handling.
- **RSVP Management**: Easily RSVP to events or cancel RSVPs with real-time updates.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS for a seamless experience across devices.
- **State Management**: Utilizes Redux Toolkit for efficient state management.
- **API Integration**: Integrates with a backend API (configured via `API_URL`) for event and user data.
- **Custom Components**: Reusable UI components like buttons, cards, and tabs for a consistent look and feel.
- **Error Handling**: Robust error handling with toast notifications using Sonner.

## Tech Stack

- **Frontend**: React, TypeScript, Redux Toolkit, React Router
- **Styling**: Tailwind CSS, Radix UI, Lucide Icons
- **HTTP Client**: Axios with interceptors for API Cuc
- **Validation**: Zod for schema validation
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript and React plugins
- **Notifications**: Sonner for toast notifications

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/attendly.git
   cd attendly
   ```

2. Install dependencies:

   ```bash
   npm install or pnpm install
   ```

3. Set up environment variables:

   Create a `.env.development` file in the root directory and add the following:

   ```env
   VITE_APP_ENV=development
   VITE_API_URL=https://your-backend-api.com
   ```

   Replace `https://your-backend-api.com` with your backend API URL.

4. Run the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

### Building for Production

To build the project for production:

```bash
npm run build
```

The output will be generated in the `dist` directory.

### Licensing

This project has no license since it's a personal project, you can use it however you want.
