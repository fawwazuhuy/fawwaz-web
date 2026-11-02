import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Developer Portfolio | Modern & Responsive',
  description:
    'A personal developer portfolio built with React, TypeScript, and Tailwind CSS for academic and professional showcase.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#07111F] text-[#F8FAFC] antialiased selection:bg-[#10B981] selection:text-slate-950 min-h-screen">
        <div className="min-h-screen flex flex-col bg-[#07111F] text-[#F8FAFC]">
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
