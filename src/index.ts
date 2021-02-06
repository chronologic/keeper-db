export { EntityManager } from 'typeorm';

export * from './entities';
export { createConnection } from './createConnection';
export { getConnection } from './getConnection';

const { createConnection } = require('./createConnection');
const { Deposit } = require('./entities');

async function getLastSyncedBlockNumber(): Promise<void> {
  const connection = await createConnection();
  const [{ max }] = await connection
    .createQueryBuilder()
    .select('MAX("blockNumber") as max')
    .from(Deposit, 'd')
    .execute();

  console.log(max);
}

getLastSyncedBlockNumber().then(() => console.log('DONE'));
