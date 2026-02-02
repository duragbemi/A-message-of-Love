// src/app/loading.js
import { Heart } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/90 z-9999 flex flex-col items-center justify-center text-red-500">
      <Heart className="w-16 h-16 animate-ping fill-red-500 mb-4" />
      <p className="text-white text-sm font-light tracking-widest uppercase animate-pulse">Loading Love...</p>
    </div>
  );
}