import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";
import { config } from '../config/config';

const connectionString = config.database_url;

const adapter = new PrismaMariaDb({
  host: config.database_host,
  port: config.database_port,
  user: config.database_user,
  password: config.database_password,
  database: config.database_name,
  allowPublicKeyRetrieval: true,
  ssl: false
});

const prisma = new PrismaClient({ adapter });

export { prisma };