function validateEnvVar(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export const env = {
  DATABASE_URL: validateEnvVar("DATABASE_URL", process.env.DATABASE_URL),
  NEXTAUTH_URL: validateEnvVar("NEXTAUTH_URL", process.env.NEXTAUTH_URL),
  NEXTAUTH_SECRET: validateEnvVar("NEXTAUTH_SECRET", process.env.NEXTAUTH_SECRET),
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
  NODE_ENV: process.env.NODE_ENV || "development"
}

export function checkRequiredEnvVars(): void {
  const requiredVars = [
    "DATABASE_URL",
    "NEXTAUTH_URL",
    "NEXTAUTH_SECRET"
  ]
  
  const missingVars = requiredVars.filter(
    varName => !process.env[varName]
  )
  
  if (missingVars.length > 0) {
    console.error("Missing required environment variables:", missingVars.join(", "))
    console.error("Please check your .env.local file")
  }
}