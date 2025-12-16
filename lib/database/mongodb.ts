// lib/database/mongodb.ts

import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

interface MongoCache {
  client: MongoClient | null;
  promise: Promise<MongoClient> | null;
}

const globalWithMongo = global as typeof globalThis & {
  _mongoClientCache?: MongoCache;
};

if (!globalWithMongo._mongoClientCache) {
  globalWithMongo._mongoClientCache = { client: null, promise: null };
}

const cached = globalWithMongo._mongoClientCache;

export async function connectToDatabase() {
  if (cached.client) {
    return { client: cached.client, db: cached.client.db() };
  }

  if (!cached.promise) {
    const opts = {
      maxPoolSize: 10,
      socketTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000,
    };

    cached.promise = MongoClient.connect(MONGODB_URI!, opts);
  }

  try {
    cached.client = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return { client: cached.client, db: cached.client.db() };
}