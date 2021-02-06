import { DB_SYNC, DB_URL, LOG_LEVEL } from './env';
import { ConnectionStringParser } from 'connection-string-parser';
import { ConnectionOptions, createConnection as typeormCreateConnection } from 'typeorm';

const parser = new ConnectionStringParser({
  scheme: 'postgres',
} as any);

const parsed = parser.parse(DB_URL);
const { host, port } = parsed.hosts[0];

const params: ConnectionOptions = {
  type: 'postgres',
  host: host || 'localhost',
  port: port || 5432,
  username: parsed.username || 'keeper',
  password: parsed.password || 'keeper',
  database: parsed.endpoint || 'keeper',
  synchronize: DB_SYNC,
  logging: LOG_LEVEL === 'debug',
  entities: ['dist/entities/**/*.js', 'src/entities/**/*.ts'],
  migrations: ['dist/migrations/**/*.js', 'src/migrations/**/*.ts'],
  subscribers: ['dist/subscribers/**/*.js', 'src/subscribers/**/*.ts'],
  ssl: host !== 'localhost',
};

export async function createConnection() {
  const connection = await typeormCreateConnection(params);
  return connection;
}
