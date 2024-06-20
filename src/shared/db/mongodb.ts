// eslint-disable-next-line import/no-extraneous-dependencies
import { MongoClient, Db, Document } from 'mongodb';
import logger from '@shared/utils/logger';

class ConnectorMongo {
  private client: MongoClient;

  private dbMap: Map<string, Db>;

  constructor(private url: string) {
    this.client = new MongoClient(url);
    this.dbMap = new Map();
  }

  async initialize() {
    await this.client.connect();
    logger.info(`MongoDB Client connected`);
  }

  getDatabase(dbName: string): Db {
    if (!this.dbMap.has(dbName)) {
      const db = this.client.db(dbName);
      this.dbMap.set(dbName, db);
      logger.info(`Database ${dbName} connected`);
    }
    return this.dbMap.get(dbName);
  }

  getCollection<T extends Document>(dbName: string, collection: string) {
    const db = this.getDatabase(dbName);
    return db.collection<T>(collection);
  }
}

export default ConnectorMongo;
