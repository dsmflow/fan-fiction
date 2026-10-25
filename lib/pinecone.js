import { Pinecone } from '@pinecone-database/pinecone';

let pineconeIndex = null;

export async function getPineconeClient() {
  if (!pineconeIndex) {
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    });
    
    pineconeIndex = pinecone.index(process.env.PINECONE_INDEX);
  }
  return pineconeIndex;
}
