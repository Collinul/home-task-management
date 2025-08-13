# Database Setup Guide

This folder contains all database-related files for the Household Task Management application using Prisma ORM.

## Structure

```
db/
├── prisma/
│   └── schema.prisma    # Database schema definition
├── migrations/          # Database migration files (auto-generated)
├── seed/
│   └── seed.js         # Database seeding script
├── index.ts            # Prisma client initialization
└── README.md           # This file
```

## Setup Instructions

### 1. Configure Database Connection

Edit the `.env` file in the project root and add your database connection string:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/household_tasks?schema=public"
```

### Supported Databases

- **PostgreSQL** (recommended)
- **MySQL**
- **SQLite**
- **MongoDB**
- **SQL Server**

### Popular Database Providers

#### Local Development
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/household_tasks?schema=public"
```

#### Supabase
```env
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
```

#### Neon
```env
DATABASE_URL="postgresql://[user]:[password]@[neon-hostname]/[dbname]?sslmode=require"
```

#### PlanetScale (MySQL)
```env
DATABASE_URL="mysql://[username]:[password]@[host]/[database]?ssl={"rejectUnauthorized":true}"
```

#### Railway
```env
DATABASE_URL="postgresql://postgres:[password]@[host]:[port]/railway"
```

### 2. Install Dependencies

Dependencies should already be installed, but if needed:

```bash
npm install prisma @prisma/client --legacy-peer-deps
```

### 3. Generate Prisma Client

Generate the Prisma client based on your schema:

```bash
npm run db:generate
```

### 4. Run Migrations

Create the database tables:

```bash
npm run db:migrate
```

Or push the schema directly (for development):

```bash
npm run db:push
```

### 5. Seed the Database (Optional)

Populate the database with sample data:

```bash
npm run db:seed
```

### 6. Explore with Prisma Studio

View and edit your data in a GUI:

```bash
npm run db:studio
```

## Available Scripts

- `npm run db:generate` - Generate Prisma Client
- `npm run db:migrate` - Run migrations
- `npm run db:push` - Push schema changes (development)
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio GUI
- `npm run db:reset` - Reset database (WARNING: Deletes all data)

## Database Schema

The schema includes the following models:

- **User**: User accounts with authentication
- **Household**: Groups for family task management
- **HouseholdMember**: Junction table for users in households
- **Category**: Task categories with emojis and colors
- **Task**: Main task model with all properties
- **RecurrenceRule**: Rules for recurring tasks
- **TaskHistory**: Track task actions for analytics

## Migration Workflow

1. Modify the schema in `db/prisma/schema.prisma`
2. Generate migration: `npm run db:migrate`
3. Apply to production: Deploy migrations to production database

## Troubleshooting

### Connection Issues
- Ensure your database is running
- Check the DATABASE_URL format
- Verify network access to database

### Migration Errors
- Check schema syntax
- Ensure database user has necessary permissions
- Review migration files in `db/migrations/`

### Generate Client Errors
- Delete `node_modules/.prisma` folder
- Run `npm run db:generate` again

## Security Notes

- Never commit `.env` file to version control
- Use environment variables for all sensitive data
- Implement proper authentication before production
- Use SSL connections for production databases