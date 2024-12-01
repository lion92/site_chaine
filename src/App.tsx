import React from 'react';
import { Header } from './components/Header';
import { VideoSection } from './components/VideoSection';
import { videoSections } from './data/videos.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {videoSections.map((section, index) => (
          <VideoSection key={index} section={section} />
        ))}
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Ma Chaîne YouTube. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;