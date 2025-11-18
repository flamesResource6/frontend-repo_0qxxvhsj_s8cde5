import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Services />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
