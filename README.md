# Fan Fiction Generator

A small retrieval-augmented generation (RAG) app: describe a story, optionally point it at reference passages stored in a Pinecone index, and an LLM writes a story grounded in that material.

Built with Next.js, LangChain (`@langchain/openai`), and the Pinecone vector database.

## How it works

```
Browser form (components/StoryForm.js)
   │  title, genres, description, reference text, optional fileIds
   ▼
POST /api/generate (pages/api/generate.js)
   │  1. fetch reference records from Pinecone by id  (lib/pinecone.js)
   │  2. merge them with the user's inputs into a single context block
   │  3. prompt GPT-4 via LangChain with that context
   ▼
Generated story returned as JSON and rendered in the page
```

Grounding text is read from each Pinecone record's `metadata.content`. The app does not ingest documents itself. Populate the index separately (for example, with a script that chunks your source text and upserts it with a `content` metadata field).

## Project structure

```
.
├── components/StoryForm.js   # input form + result display
├── lib/pinecone.js           # lazily-initialised Pinecone index client
├── pages/
│   ├── _app.js
│   ├── index.js              # main page
│   └── api/generate.js       # retrieval + generation endpoint
├── styles/globals.css        # Tailwind entry point
├── .replit / replit.nix      # Replit configuration
└── package.json
```

## Running locally

Requires Node.js 18+.

```bash
git clone https://github.com/dsmflow/fan-fiction.git
cd fan-fiction
npm install
```

Create `.env.local`:

```
OPENAI_API_KEY=...
PINECONE_API_KEY=...
PINECONE_INDEX=...
```

Then:

```bash
npm run dev      # http://localhost:3000
npm run build && npm start   # production build
```

## Running on Replit

Import the repository into Replit, add the three variables above under **Tools → Secrets**, and click **Run**. `.replit` starts `npm run dev`.

## Possible next steps

- An upload endpoint that chunks PDF/TXT files, embeds them, and upserts them to Pinecone
- Similarity search (`index.query`) on the story description instead of fetch-by-id
- Streaming responses

## License

MIT. See [LICENSE](LICENSE).
