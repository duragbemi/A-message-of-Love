// src/app/page.js
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHeart = ({ delay, duration, left }) => (
  <motion.div
    initial={{ y: "100vh", opacity: 0 }}
    animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
    transition={{ duration: duration, repeat: Infinity, delay: delay, ease: "linear" }}
    className="absolute text-red-500/30 text-4xl"
    style={{ left: left }}
  >
    ❤️
  </motion.div>
);

export default function LandingPage() {
  const [hearts, setHearts] = useState([]);
  
  useEffect(() => {
    // FIX: The setTimeout prevents the "synchronous setState" error
    const timer = setTimeout(() => {
        const newHearts = Array.from({ length: 15 }).map((_, i) => ({
          id: i,
          delay: Math.random() * 5,
          duration: 5 + Math.random() * 5,
          left: `${Math.random() * 100}%`
        }));
        setHearts(newHearts);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-900 via-rose-900 to-black flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* Background Hearts */}
      {hearts.map(h => <FloatingHeart key={h.id} {...h} />)}

      <div className="z-10 text-center p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-400 to-pink-600 mb-4 font-serif">
            The Digital<br />Love Letter
          </h1>
          <p className="text-pink-200 text-lg md:text-xl mb-8 font-light max-w-md mx-auto">
            Create a timeless memory. Send a message, a photo, and a song packaged in a beautiful digital experience.
          </p>
          
          <Link href="/create" prefetch={true}>
            <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all transform hover:scale-105 active:scale-95">
              Create Your Valentine Message 💌
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}