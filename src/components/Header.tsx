import React from 'react';
import { Youtube } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <Youtube className="w-12 h-12 mr-4" />
          <h1 className="text-4xl font-bold">Ma Chaîne YouTube: Dev et Carte</h1>
        </div>
        <p className="text-center text-xl max-w-2xl mx-auto">
          Découvrez mes vidéos sur la programmation, le développement web et plus encore
        </p>
      </div>
    </header>
  );
}