// src/app/view/[id]/page.js
'use client';
import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { Volume2, Heart, MessageCircle } from 'lucide-react';

export default function ViewLetter({ params }) {
  const [data, setData] = useState(null);
  const [isOpened, setIsOpened] = useState(false);
  const [loading, setLoading] = useState(true);
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch the letter
      const { data: capsule, error } = await supabase.from('capsules').select('*').eq('id', params.id).single();
      if (error) console.error("Error fetching:", error);
      setData(capsule);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  const handleOpen = () => {
    setIsOpened(true);
    // Initial confetti pop
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#ff0000', '#ffccd5'] });
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
  };

  const handleNo = () => {
    setNoCount(prev => prev + 1);
  };

  const handleYes = async () => {
    setYesPressed(true);
    
    // 1. Update Database
    await supabase.from('capsules').update({ answer: 'YES' }).eq('id', params.id);

    // 2. Huge Confetti Explosion
    var duration = 3000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
    }, 250);

    // 3. Redirect to WhatsApp to notify Sender
    setTimeout(() => {
        const text = `YES! I will be your Valentine! ❤️ (I just opened your letter)`;
        window.location.href = `https://wa.me/?text=${encodeURIComponent(text)}`;
    }, 2000);
  };

  // Text for the "No" button
  const getNoText = () => {
    const phrases = [
      "No", "Are you sure?", "Really sure?", "Think again!", "Last chance!", 
      "Surely not?", "You might regret this!", "Give it a thought!", 
      "Are you absolutely certain?", "This could be a mistake!", "Have a heart!", 
      "Don't be so cold!", "Change of heart?", "Wouldn't you reconsider?", 
      "Is that your final answer?", "You're breaking my heart ;("
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-pink-500 animate-pulse font-bold">Retrieving Love Letter...</div>;
  if (!data) return <div className="min-h-screen bg-black flex items-center justify-center text-gray-500 font-bold">Letter not found.</div>;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      {/* Hidden Audio Player */}
      {data.music_url && <audio ref={audioRef} src={data.music_url} loop />}

      {!isOpened ? (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="z-10 text-center cursor-pointer group" onClick={handleOpen}>
          <div className="relative">
            <div className="text-9xl mb-6 drop-shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-transform duration-500 group-hover:scale-110">💌</div>
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <h1 className="text-4xl font-serif text-white mb-2 tracking-wide">For {data.receiver_name}</h1>
          <p className="text-gray-400 font-light text-sm tracking-widest uppercase">Tap to Open</p>
        </motion.div>
      ) : (
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="z-10 w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl my-8">
          
          {/* Media Section */}
          {data.media_url ? (
            <div className="w-full max-h-96 bg-black flex items-center justify-center">
              {data.media_url.match(/\.(mp4|webm)$/i) ? (
                <video src={data.media_url} controls autoPlay className="w-full h-full object-contain" />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={data.media_url} alt="Memory" className="w-full h-full object-cover" />
              )}
            </div>
          ) : <div className="h-20 bg-linear-to-b from-red-900 to-transparent"></div>}

          <div className="p-8 md:p-12 relative pb-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="text-white fill-white w-8 h-8" />
            </div>

            <h2 className="text-3xl font-serif text-white mb-6 mt-4">Dearest {data.receiver_name},</h2>
            <p className="text-gray-200 text-lg leading-loose font-light whitespace-pre-wrap font-sans">{data.message_text}</p>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400 font-serif italic mb-2">Forever yours,</p>
              <p className="text-2xl text-red-400 font-bold font-serif">{data.sender_name}</p>
            </div>

            {/* THE PROPOSAL SECTION */}
            {!yesPressed ? (
              <div className="mt-12 text-center space-y-4">
                 <h3 className="text-xl font-bold text-pink-300 animate-pulse">Will you be my Valentine? 🌹</h3>
                 <div className="flex flex-wrap justify-center gap-4 items-center">
                    <button 
                        onClick={handleYes}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition text-lg"
                    >
                        YES! ❤️
                    </button>
                    
                    <button
                        onClick={handleNo}
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full text-sm transition"
                        style={{ fontSize: Math.max(12, 16 - noCount) + 'px' }} // Button gets smaller
                    >
                        {getNoText()}
                    </button>
                 </div>
              </div>
            ) : (
                <div className="mt-12 text-center animate-bounce">
                    <h3 className="text-2xl font-bold text-green-400">YAY! She said YES! 🎉</h3>
                    <p className="text-gray-400 text-sm mt-2">Opening WhatsApp to notify sender...</p>
                </div>
            )}
          </div>

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