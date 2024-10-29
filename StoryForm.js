import { useState } from 'react';

export default function StoryForm() {
  const [formData, setFormData] = useState({
    title: '',
    genres: '',
    description: '',
    referenceText: ''
  });
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Failed to generate story');
      
      setStory(data.story);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Story Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block mb-2">Genres</label>
          <input
            type="text"
            name="genres"
            value={formData.genres}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Fantasy, Sci-Fi, Romance, etc."
            required
          />
        </div>
        
        <div>
          <label className="block mb-2">Story Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
            required
          />
        </div>
        
        <div>
          <label className="block mb-2">Reference Text (Optional)</label>
          <textarea
            name="referenceText"
            value={formData.referenceText}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Generating...' : 'Generate Story'}
        </button>
      </form>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded">
          {error}
        </div>
      )}

      {story && (
        <div className="p-4 bg-white border rounded">
          <h2 className="text-xl font-bold mb-4">Generated Story</h2>
          <div className="whitespace-pre-wrap">{story}</div>
        </div>
      )}
    </div>
  );
}
