# Fan Fiction Generator

A web application that helps users create fan fiction stories using AI, with support for reference material grounding through PDF and text file uploads. Built for deployment on Replit.

## 🌟 Features

- 📝 Interactive story generation interface
- 🎭 Multiple genre selection and blending
- 📚 Reference material upload support (PDF and TXT files)
- 🤖 AI-powered story generation
- 📱 Responsive design for mobile and desktop
- 🔍 Vector search integration for context-aware writing

## 🚀 Replit Deployment

### Quick Start
1. Visit [Replit](https://replit.com)
2. Click "Create Repl"
3. Choose "Import from GitHub"
4. Paste your repository URL
5. Select "Node.js" as the language

### Environment Setup
1. In your Repl, click on "Tools" in the left sidebar
2. Select "Secrets"
3. Add the following secrets:
```
OPENAI_API_KEY=your_openai_api_key
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_ENVIRONMENT=your_pinecone_environment
PINECONE_INDEX=your_pinecone_index_name
```

### Development
1. The Repl will automatically install dependencies
2. Click "Run" to start the development server
3. Your app will be available at your Repl's URL

### Production Deployment
1. Replit will automatically build and deploy your app
2. Your production URL will be available in the "Deploy" tab

## 📁 Supported File Types

- PDF (.pdf)
- Text files (.txt)

Maximum file size: 10MB per file

## 🛠️ Tech Stack

- Frontend:
  - React
  - Tailwind CSS
  - shadcn/ui components
  - Lucide Icons
- Backend:
  - Node.js
  - OpenAI API
  - Pinecone Vector DB
  - LangChain
- Deployment:
  - Replit
  - Node.js 18.x

## 🔧 Replit-Specific Configuration

### File Structure
```
.
├── .replit                 # Replit configuration
├── replit.nix             # Nix environment config
├── components/            # React components
├── pages/                 # Next.js pages
│   ├── api/              # API routes
│   └── index.js          # Main page
├── public/               # Static files
└── package.json          # Dependencies
```

### Running Locally
To run the project locally on Replit:
1. Fork the Repl
2. Add your environment variables
3. Click "Run"

### Troubleshooting Replit Deployment
Common issues and solutions:
1. **Build Fails**
   - Check Node.js version in replit.nix
   - Verify all dependencies are in package.json
   - Clear .next directory and rebuild

2. **Environment Variables**
   - Ensure all secrets are properly set
   - Check for typos in variable names
   - Verify API keys are valid

3. **File Upload Issues**
   - Verify tmp directory permissions
   - Check file size limits
   - Ensure proper CORS configuration

## 📋 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔒 Security Considerations

- API keys are stored securely in Replit Secrets
- File uploads are validated server-side
- Rate limiting is implemented for API endpoints
- CORS is configured for security

## 🤝 Contributing

1. Fork the Repl
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 👥 Support

For support:
1. Open an issue in the GitHub repository
2. Post in the Replit community forums
3. Contact [your-email@example.com]

## 📄 License

See the [LICENSE](LICENSE) file for details
