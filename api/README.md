# Attendly API

A RESTful API for event management with user authentication, event creation, and RSVP functionality built with Node.js, Express, Prisma, and PostgreSQL.

## Features

- User authentication with JWT
- Event creation and management
- RSVP support for events
- Paginated event listings
- Input validation with Zod
- TypeScript support
- PostgreSQL with Prisma ORM

## Setup

### Prerequisites

- Node.js 18+
- npm
- PostgreSQL

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file:

```bash
cp .env.example .env
```

Set `DATABASE_URL` to your PostgreSQL connection string, for example:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/attendly?schema=public"
```

### 3. Run Prisma migration

```bash
npx prisma migrate dev --name init
```

### 4. Start the API

For development:

```bash
npm run dev
```

For production:

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description | Example |
| --- | --- | --- |
| `PORT` | API server port | `3000` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:postgres@localhost:5432/attendly?schema=public` |
| `JWT_SECRET` | Secret used to sign JWTs | `super-secret` |
| `BCRYPT_SALT_ROUNDS` | Salt rounds for password hashing | `10` |
