import dotenv from 'dotenv';
dotenv.config();

interface Config {
    port: number;
    env: string;
    database_url: string;
}

const config: Config = {
    port: Number(process.env.PORT) || 5000,
    env: process.env.ENV || 'dev',
    database_url: process.env.DATABASE_URL || ''
};

export { config };