import "dotenv/config";
import { defineConfig } from "prisma/config";
import { config } from './src/config/config';

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations", 
  },
  datasource: {
    url: config.database_url,  // mysql://user:pass@host:3306/db
  },
});