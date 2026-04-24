# Attendly API

A RESTful API for event management with user authentication, event creation, and RSVP functionality built with Node.js, Express, and Prisma.

## Features

- ✅ User authentication (JWT)
- ✅ Event creation and management
- ✅ RSVP system for events
- ✅ Paginated event listings
- ✅ Input validation with Zod
- ✅ TypeScript support
- ✅ SQLite database (easy to switch to other databases)

## Setup Instructions

### Prerequisites

- Node.js v16+
- npm or yarn
- SQLite (comes with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/its-rajesh-smp/attendly-api.git
cd event-management-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example env file and update the values:

```bash
cp .env.example .env.dev # for development
cp .env.example .env.prod # for production
```

### 4. Run database migrations

```bash
npx prisma migrate dev --name init
```

### 5. Start the server

For development (with hot reload):

```bash
npm run dev
```

For production:

```bash
npm run build
npm start
```

## Configuration

The following environment variables can be configured:

| Variable           | Description                      | Default           |
| ------------------ | -------------------------------- | ----------------- |
| PORT               | Server port                      | 3000              |
| DATABASE_URL       | Database connection URL          | \`file:./dev.db\` |
| JWT_SECRET         | Secret for JWT tokens            | \`secret\`        |
| BCRYPT_SALT_ROUNDS | Salt rounds for password hashing | 10                |

## License

This project has no license since it's a personal project, you can use it however you want.
