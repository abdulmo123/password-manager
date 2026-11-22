import dotenv from 'dotenv';
dotenv.config();

interface Config {
    port: number;
    env: string;
    database_url: string;
    database_name: string;
    database_host: string;
    database_port: number;
    database_user: string;
    database_password: string;
}

const config: Config = {
    port: Number(process.env.PORT) ?? 5000,
    env: process.env.ENV ?? 'dev',
    database_url: process.env.DATABASE_URL ?? '',
    database_name: process.env.DATABASE_NAME ?? '',
    database_host: process.env.DATABASE_HOST ?? '',
    database_port: Number(process.env.DATABASE_PORT) ?? 3306,
    database_user: process.env.DATABASE_USER ?? '',
    database_password: process.env.DATABASE_PASSWORD ?? '',
    
};

export { config };