import { OpenAI } from '@langchain/openai';
import { getPineconeClient } from '../../lib/pinecone';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { title, genres, description, referenceText, fileIds } = req.body;

    const index = await getPineconeClient();

    // Retrieve reference materials if fileIds are provided
    let referenceContexts = [];
    if (fileIds?.length > 0) {
      const queryResponse = await index.fetch(fileIds);
      referenceContexts = queryResponse.records.map(record => record.metadata.content);
    }

    const fullContext = `
      Title: ${title}
      Genres: ${genres}
      Description: ${description}
      Reference Text: ${referenceText}
      Reference Materials: ${referenceContexts.join('\n')}
    `;

    const llm = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: 'gpt-4',
      temperature: 0.7,
      maxTokens: 2000
    });

    const prompt = `
      You are a creative writing assistant specialized in fan fiction.
      Using the following context, create an engaging story that matches
      the desired genres and incorporates elements from the reference materials.
      Make sure to maintain consistency with the source material while adding
      your own creative elements.

      Context:
      ${fullContext}

      Generate a compelling story based on these inputs:
    `;

    const story = await llm.predict(prompt);
    return res.status(200).json({ story });
  } catch (error) {
    console.error('Generation error:', error);
    return res.status(500).json({ error: error.message || 'Story generation failed' });
  }
}
