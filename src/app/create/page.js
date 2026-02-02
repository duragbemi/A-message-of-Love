// src/app/create/page.js
'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Music, ArrowLeft, Check, Copy, Loader2, Sparkles, Link as LinkIcon, ChevronDown } from 'lucide-react';

const FloatingHeart = ({ delay, duration, left }) => (
  <motion.div
    initial={{ y: "110vh", opacity: 0 }}
    animate={{ y: "-10vh", opacity: [0, 0.5, 0] }}
    transition={{ duration: duration, repeat: Infinity, delay: delay, ease: "linear" }}
    className="absolute text-pink-300/40 text-6xl pointer-events-none z-0"
    style={{ left: left }}
  >
    ❤️
  </motion.div>
);

export default function CreateValentine() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);
  
  const [formData, setFormData] = useState({ 
    sender: '', sender_gender: 'male',
    receiver: '', receiver_gender: 'female',
    message: '', file: null, music: null 
  });
  
  const [hearts, setHearts] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
        setHearts(Array.from({ length: 8 }).map((_, i) => ({
          id: i,
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 5,
          left: `${Math.random() * 90}%`
        })));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const uploadFile = async (file) => {
    const cleanName = file.name.replace(/[^a-zA-Z0-9.]/g, '');
    const fileName = `${Date.now()}-${cleanName}`;
    const { error } = await supabase.storage.from('val-media').upload(fileName, file);
    if (error) throw error;
    const { data } = supabase.storage.from('val-media').getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      let mediaUrl = null;
      let musicUrl = null;

      if (formData.file) mediaUrl = await uploadFile(formData.file);
      if (formData.music) musicUrl = await uploadFile(formData.music);

      const { data, error } = await supabase.from('capsules').insert([{ 
        sender_name: formData.sender,
        sender_gender: formData.sender_gender,
        receiver_name: formData.receiver,
        receiver_gender: formData.receiver_gender,
        message_text: formData.message,
        media_url: mediaUrl,
        music_url: musicUrl
      }]).select();

      if (error) throw error;

      setGeneratedLink(`${window.location.origin}/view/${data[0].id}`);
      setStep(4); 

    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const slideVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-100 via-pink-200 to-rose-100 flex items-center justify-center p-4 relative overflow-hidden">
      {hearts.map(h => <FloatingHeart key={h.id} {...h} />)}

      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 min-h-137.5 flex flex-col relative z-10">
        
        <div className="h-2 bg-pink-100 w-full">
          <motion.div 
            className="h-full bg-linear-to-r from-red-500 to-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" 
            initial={{ width: "25%" }} 
            animate={{ width: `${step * 25}%` }} 
          />
        </div>

        <div className="p-8 flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: NAMES & GENDERS */}
            {step === 1 && (
              <motion.div key="step1" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex-1 flex flex-col justify-center">
                <div className="text-center mb-8">
                    <div className="inline-block p-4 bg-red-50 rounded-full mb-4 shadow-inner">
                        <Sparkles className="w-8 h-8 text-red-500 fill-red-500 animate-pulse" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">Who is the Secret Valentine?</h2>
                    <p className="text-gray-500 text-sm">To the very one who upholds my Heart</p>
                </div>

                <div className="space-y-6">
                  {/* SENDER INPUT */}
                  <div>
                    <label className="text-xs font-bold text-red-400 uppercase tracking-widest ml-1 mb-1 block">From</label>
                    <div className="flex bg-white rounded-xl border-2 border-pink-100 focus-within:border-red-400 focus-within:ring-4 focus-within:ring-red-100 transition shadow-sm overflow-hidden items-center">
                        <input 
                            onChange={e => setFormData({...formData, sender: e.target.value})} 
                            value={formData.sender} 
                            className="flex-1 p-4 bg-transparent outline-none font-bold text-gray-900 placeholder-black-400 text-lg w-full min-w-0" 
                            placeholder="Your Name" 
                        />
                        {/* Fixed Dropdown Styling */}
                        <div className="relative border-l border-pink-100">
                          <select 
                              value={formData.sender_gender}
                              onChange={e => setFormData({...formData, sender_gender: e.target.value})}
                              className="appearance-none bg-pink-50 text-sm font-bold text-gray-700 py-4 pl-4 pr-10 outline-none cursor-pointer hover:bg-pink-100 transition h-full"
                          >
                              <option value="male">👨 Male</option>
                              <option value="female">👩 Female</option>
                          </select>
                          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>
                    </div>
                  </div>

                  {/* RECEIVER INPUT */}
                  <div>
                    <label className="text-xs font-bold text-red-400 uppercase tracking-widest ml-1 mb-1 block">To</label>
                    <div className="flex bg-white rounded-xl border-2 border-pink-100 focus-within:border-red-400 focus-within:ring-4 focus-within:ring-red-100 transition shadow-sm overflow-hidden items-center">
                        <input 
                            onChange={e => setFormData({...formData, receiver: e.target.value})} 
                            value={formData.receiver} 
                            className="flex-1 p-4 bg-transparent outline-none font-bold text-gray-900 placeholder-black-400 text-lg w-full min-w-0" 
                            placeholder="Your Lover's Name" 
                        />
                         {/* Fixed Dropdown Styling */}
                         <div className="relative border-l border-pink-100">
                            <select 
                                value={formData.receiver_gender}
                                onChange={e => setFormData({...formData, receiver_gender: e.target.value})}
                                className="appearance-none bg-pink-50 text-sm font-bold text-gray-700 py-4 pl-4 pr-10 outline-none cursor-pointer hover:bg-pink-100 transition h-full"
                            >
                                <option value="female">👩 Female</option>
                                <option value="male">👨 Male</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>
                    </div>
                  </div>
                </div>
                
                <button 
                    onClick={() => setStep(2)} 
                    disabled={!formData.sender || !formData.receiver} 
                    className="w-full bg-linear-to-r from-red-500 to-pink-600 text-white py-4 rounded-xl font-bold mt-8 hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-red-200"
                >
                    Continue <span className="ml-2">→</span>
                </button>
              </motion.div>
            )}

            {/* STEP 2: MESSAGE */}
            {step === 2 && (
              <motion.div key="step2" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">A Letter Of Love💌</h2>
                <p className="text-gray-400 text-sm mb-4">Express your feelings...</p>
                <textarea onChange={e => setFormData({...formData, message: e.target.value})} value={formData.message} className="flex-1 w-full p-5 bg-white rounded-xl border-2 border-pink-100 focus:border-red-400 focus:ring-4 focus:ring-red-100 transition outline-none resize-none font-medium text-gray-800 text-lg leading-relaxed shadow-sm placeholder-gray-400" placeholder="My Dear Valentine..."></textarea>
                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep(1)} className="p-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition"><ArrowLeft /></button>
                  <button onClick={() => setStep(3)} disabled={!formData.message} className="flex-1 bg-linear-to-r from-red-500 to-pink-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition disabled:opacity-50">Next Step</button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: MEDIA */}
            {step === 3 && (
              <motion.div key="step3" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Add the Vibe ✨</h2>
                <div className="space-y-4 flex-1">
                  <div className="group border-2 border-dashed border-pink-200 bg-pink-50/50 rounded-2xl p-4 hover:border-red-400 hover:bg-white transition cursor-pointer relative overflow-hidden">
                    <input type="file" accept="image/*,video/*" onChange={e => setFormData({...formData, file: e.target.files[0]})} className="absolute inset-0 opacity-0 cursor-pointer z-20" />
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="bg-white p-3 rounded-xl shadow-sm text-blue-500 group-hover:scale-110 transition"><Upload size={24} /></div>
                      <div>
                        <p className="font-bold text-gray-800">Add Photo/Video</p>
                        <p className="text-xs text-gray-500 font-medium">{formData.file ? <span className="text-green-600">Selected: {formData.file.name}</span> : "Capture a memory (Max 20MB)"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="group border-2 border-dashed border-pink-200 bg-pink-50/50 rounded-2xl p-4 hover:border-red-400 hover:bg-white transition cursor-pointer relative overflow-hidden">
                    <input type="file" accept="audio/*" onChange={e => setFormData({...formData, music: e.target.files[0]})} className="absolute inset-0 opacity-0 cursor-pointer z-20" />
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="bg-white p-3 rounded-xl shadow-sm text-pink-500 group-hover:scale-110 transition"><Music size={24} /></div>
                      <div>
                        <p className="font-bold text-gray-800">Add Background Song</p>
                        <p className="text-xs text-gray-500 font-medium">{formData.music ? <span className="text-green-600">Selected: {formData.music.name}</span> : "Set the mood (MP3)"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep(2)} className="p-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition"><ArrowLeft /></button>
                  <button onClick={handleSubmit} disabled={loading} className="flex-1 bg-linear-to-r from-red-600 to-rose-600 text-white py-4 rounded-xl font-bold hover:shadow-xl transition flex items-center justify-center gap-2 transform hover:scale-[1.02]">
                    {loading ? <Loader2 className="animate-spin" /> : "Finish & Seal ❤️"}
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: SUCCESS */}
            {step === 4 && (
              <motion.div key="step4" variants={slideVariants} initial="hidden" animate="visible" className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-100">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">It&apos;s Ready! 🎉</h2>
                <p className="text-gray-500 mb-8 max-w-xs mx-auto">Your digital love letter has been sealed.</p>
                
                <div className="w-full bg-white border-2 border-pink-100 p-2 rounded-xl flex items-center gap-2 mb-4 shadow-sm relative overflow-hidden">
                  <div className="bg-pink-50 p-3 rounded-lg text-pink-500"><LinkIcon size={20} /></div>
                  <p className="text-sm text-gray-600 font-mono truncate flex-1 text-left">{generatedLink}</p>
                </div>

                <button onClick={handleCopy} className={`w-full py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 mb-4 border-2 ${copied ? 'bg-green-500 border-green-500 text-white' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'}`}>
                  {copied ? (<> <Check size={20} /> Copied! </>) : (<> <Copy size={20} /> Copy Link </>)}
                </button>

                <a href={`https://wa.me/?text=I+made+something+special+for+you...+Open+it+here:+${encodeURIComponent(generatedLink)}`} target="_blank" className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-green-600 transition flex items-center justify-center gap-2">Share on WhatsApp 💬</a>
                <button onClick={() => window.location.reload()} className="mt-6 text-sm text-gray-400 hover:text-red-500 transition underline">Create Another</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
