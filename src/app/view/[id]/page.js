// src/app/view/[id]/page.js
'use client';
import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
// FIX 1: Added 'Heart' to the imports here
import { Play, Pause, Volume2, Heart } from 'lucide-react';

export default function ViewLetter({ params }) {
  const [data, setData] = useState(null);
  const [isOpened, setIsOpened] = useState(false);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data safely
      const { data: capsule } = await supabase.from('capsules').select('*').eq('id', params.id).single();
      setData(capsule);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  const handleOpen = () => {
    setIsOpened(true);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#ff0000', '#ffccd5'] });
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-pink-500 animate-pulse">Retrieving Love Letter...</div>;
  if (!data) return <div className="min-h-screen bg-black flex items-center justify-center text-gray-500">Letter not found.</div>;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-red-900/10 to-black pointer-events-none"></div>

      {/* Hidden Audio Player */}
      {data.music_url && <audio ref={audioRef} src={data.music_url} loop />}

      {!isOpened ? (
        // STATE 1: UNOPENED ENVELOPE
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="z-10 text-center cursor-pointer group"
          onClick={handleOpen}
        >
          <div className="relative">
            <div className="text-9xl mb-6 drop-shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-transform duration-500 group-hover:scale-110">💌</div>
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <h1 className="text-4xl font-serif text-white mb-2 tracking-wide">For {data.receiver_name}</h1>
          <p className="text-gray-400 font-light text-sm tracking-widest uppercase">Tap to Open</p>
        </motion.div>
      ) : (
        // STATE 2: THE REVEAL
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
          
          {/* Media Header */}
          {data.media_url ? (
            <div className="w-full max-h-96 bg-black flex items-center justify-center">
              {data.media_url.match(/\.(mp4|webm)$/i) ? (
                <video src={data.media_url} controls autoPlay className="w-full h-full object-contain" />
              ) : (
                /* FIX 2: Added this comment to disable the yellow warning */
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={data.media_url} alt="Memory" className="w-full h-full object-cover" />
              )}
            </div>
          ) : (
             <div className="h-20 bg-linear-to-b from-red-900 to-transparent"></div>
          )}

          {/* Letter Content */}
          <div className="p-8 md:p-12 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              {/* FIX 3: This Heart component now works because we imported it */}
              <Heart className="text-white fill-white w-8 h-8" />
            </div>

            <p className="text-xs text-red-300 font-bold uppercase text-center mb-6 tracking-widest mt-4">
              {new Date(data.created_at).toLocaleDateString(undefined, { dateStyle: 'long' })}
            </p>

            <h2 className="text-3xl font-serif text-white mb-6">Dearest {data.receiver_name},</h2>
            
            <p className="text-gray-200 text-lg leading-loose font-light whitespace-pre-wrap font-sans">
              {data.message_text}
            </p>

            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400 font-serif italic mb-2">Forever yours,</p>
              <p className="text-2xl text-red-400 font-bold font-serif">{data.sender_name}</p>
            </div>
          </div>

          {/* Music Controls */}
          {data.music_url && (
            <div className="bg-black/40 p-3 flex items-center justify-center gap-2 text-xs text-gray-400">
              <Volume2 size={12} /> <span className="uppercase tracking-widest">Now Playing Your Song</span>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}