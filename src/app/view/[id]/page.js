// src/app/view/[id]/page.js
'use client';
import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useParams } from 'next/navigation'; 
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { Volume2, Heart } from 'lucide-react';

export default function ViewLetter() {
  const params = useParams(); 
  const [data, setData] = useState(null);
  const [isOpened, setIsOpened] = useState(false);
  const [loading, setLoading] = useState(true);
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!params?.id) return;
    const fetchData = async () => {
      const { data: capsule, error } = await supabase.from('capsules').select('*').eq('id', params.id).single();
      if (error) console.error("Error fetching:", error);
      setData(capsule);
      setLoading(false);
    };
    fetchData();
  }, [params?.id]);

  const handleOpen = () => {
    setIsOpened(true);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#ff0000', '#ffccd5'] });
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
  };

  const handleNo = () => setNoCount(prev => prev + 1);

  const handleYes = async () => {
    setYesPressed(true);
    await supabase.from('capsules').update({ answer: 'YES' }).eq('id', params.id);

    // Confetti
    var duration = 3000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
    }, 250);

    // Redirect to WhatsApp
    setTimeout(() => {
        // WhatsApp message sent BACK to the creator
        const text = `YES! I will be your Valentine! ❤️ (I just opened your letter)`;
        window.location.href = `https://wa.me/?text=${encodeURIComponent(text)}`;
    }, 2500);
  };

  const getNoText = () => {
    const phrases = ["No", "Are you sure?", "Really sure?", "Think again!", "Last chance!", "Surely not?", "You might regret this!", "Give it a thought!", "Are you absolutely certain?", "This could be a mistake!", "Have a heart!", "Don't be so cold!", "Change of heart?", "You're breaking my heart ;("];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  // Logic to determine Pronoun for the Success Message
  const getSuccessMessage = () => {
      // If the Receiver is Male, use "He". If Female, use "She".
      const pronoun = data?.receiver_gender === 'male' ? "He" : "She";
      return `YAY! ${pronoun} said YES! 🎉`;
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-pink-500 animate-pulse font-bold">Retrieving Love Letter...</div>;
  if (!data) return <div className="min-h-screen bg-black flex flex-col items-center justify-center text-gray-500 font-bold p-4 text-center"><p>Letter not found.</p></div>;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-y-auto">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 fixed"></div>
      
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
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="z-10 w-full max-w-lg flex flex-col gap-0 shadow-2xl my-8">
          
          {/* TOP: MEDIA */}
          <div className="w-full bg-black/50 backdrop-blur-sm rounded-t-3xl overflow-hidden border border-white/10 relative">
            {data.media_url ? (
               <div className="w-full relative">
                 {data.media_url.match(/\.(mp4|webm)$/i) ? (
                   <video src={data.media_url} controls autoPlay className="w-full h-auto max-h-[60vh] object-contain mx-auto" />
                 ) : (
                   /* eslint-disable-next-line @next/next/no-img-element */
                   <img src={data.media_url} alt="Memory" className="w-full h-auto max-h-[60vh] object-contain mx-auto" />
                 )}
               </div>
            ) : <div className="h-32 bg-linear-to-b from-red-900 to-black/80 flex items-center justify-center"><Heart className="text-white/20 w-12 h-12" /></div>}
            
            {data.music_url && (
              <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full flex items-center gap-2 text-[10px] text-white/80 backdrop-blur-md border border-white/10">
                <Volume2 size={10} className="animate-pulse" /> <span>PLAYING</span>
              </div>
            )}
          </div>

          {/* BOTTOM: MESSAGE */}
          <div className="bg-white/10 backdrop-blur-xl border-x border-b border-white/10 rounded-b-3xl p-8 md:p-10 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg border-4 border-black">
              <Heart className="text-white fill-white w-5 h-5" />
            </div>

            <h2 className="text-2xl font-serif text-white mb-4 mt-2 text-center">Dearest {data.receiver_name},</h2>
            <div className="bg-black/20 rounded-xl p-6 mb-8">
                <p className="text-gray-100 text-lg leading-relaxed font-light whitespace-pre-wrap font-sans text-center">"{data.message_text}"</p>
            </div>
            <div className="text-center mb-8">
              <p className="text-xs text-gray-400 font-serif italic mb-1">With all my love,</p>
              <p className="text-xl text-red-400 font-bold font-serif">{data.sender_name}</p>
            </div>

            {!yesPressed ? (
              <div className="pt-6 border-t border-white/10 text-center space-y-5">
                 <h3 className="text-lg font-bold text-pink-200 animate-pulse">Will you be my Valentine? 🌹</h3>
                 <div className="flex flex-col gap-3 justify-center items-center w-full max-w-xs mx-auto">
                    <button onClick={handleYes} className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition text-lg">YES! ❤️</button>
                    <button onClick={handleNo} className="text-gray-400 hover:text-white text-sm py-2 transition underline decoration-gray-600" style={{ fontSize: Math.max(10, 14 - noCount) + 'px' }}>{getNoText()}</button>
                 </div>
              </div>
            ) : (
                <div className="pt-6 border-t border-white/10 text-center animate-bounce">
                    {/* HERE IS THE DYNAMIC GENDER MESSAGE */}
                    <h3 className="text-2xl font-bold text-green-400">{getSuccessMessage()}</h3>
                    <p className="text-gray-400 text-sm mt-2">Opening WhatsApp...</p>
                </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
