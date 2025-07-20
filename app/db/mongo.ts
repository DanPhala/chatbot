import { MongoClient, ServerApiVersion, Db, Collection } from "mongodb";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export interface ChatMessage {
  user: string;
  bot: string;
  timestamp: Date;
}

export async function getDb(): Promise<Db> {
  await client.connect();
  return client.db("chatdb");
}

export async function insertChat(user: string, bot: string, userId: string) {
  const db = await getDb();
  const collection = db.collection("chats");
  return await collection.insertOne({
    user,
    bot,
    userId,
    timestamp: new Date(),
  });
}

export async function getChats(query = {}) {
  const db = await getDb();
  const collection: Collection<ChatMessage> = db.collection("chats");
  return await collection.find(query).toArray();
}