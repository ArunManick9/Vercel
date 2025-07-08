
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
