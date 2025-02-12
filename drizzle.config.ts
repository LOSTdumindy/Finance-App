import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

console.log("DATABASE_URL:", process.env.DATABASE_URL);

export default defineConfig({
  schema: "./db/schema.ts", 
  dialect: "postgresql",  
  dbCredentials: {
    url: process.env.DATABASE_URL!,  
  },
  verbose: true, 
});
