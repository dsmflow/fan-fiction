import StoryForm from '../components/StoryForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Fan Fiction Generator</h1>
        <StoryForm />
      </div>
    </div>
  );
}
