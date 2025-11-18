import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 py-10 text-sky-100/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Nova Dental Studio. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#booking" className="hover:text-white">Booking</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
