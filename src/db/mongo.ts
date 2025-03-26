import { MONGO_URL } from "$env/static/private";
import { MongoClient } from "mongodb";

console.log("📡 Loading MongoDB client...");

const client = new MongoClient(MONGO_URL);

export async function connect(): Promise<void> {
    console.log("🔌 Connecting to MongoDB...");
    await client.connect();
    console.log("✅ MongoDB connected!");
}

export async function disconnect(): Promise<void> {
    console.log("🔌 Disconnecting from MongoDB...");
    await client.close();
    console.log("✅ MongoDB disconnected!");
}

export function getDB(): any {
    console.log("📁 Returning database instance...");
    return client.db();
}
