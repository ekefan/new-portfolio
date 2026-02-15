import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus('sending');

    // Simulate system processing
    setTimeout(() => {
      const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.project}`);
      
      const mailtoUrl = `mailto:ekefan.dev@gmail.com?subject=${subject}&body=${body}`;
      
      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setStatus('success');
      
      // Reset after some time
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-blue-600/5 blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-sm font-mono-tech text-emerald-500 uppercase tracking-[0.3em]">Project Terminal</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Ready to Build?</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Whether you need to overhaul a legacy system or engineer a cloud-native platform from scratch, I'm ready to build the solution.
            </p>

            <div className="space-y-6">
              <a href="mailto:ekefan.dev@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-blue-500 transition-all group-hover:border-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  <Mail />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-gray-500 uppercase tracking-widest">Email Link</div>
                  <div className="text-white font-medium">ekefan.dev@gmail.com</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/emmanuelebenezer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-blue-400 transition-all group-hover:border-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  <Linkedin />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-gray-500 uppercase tracking-widest">Identity</div>
                  <div className="text-white font-medium">linkedin.com/in/emmanuelebenezer</div>
                </div>
              </a>

              <a href="https://github.com/ekefan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-gray-400 transition-all group-hover:border-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                  <Github />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-gray-500 uppercase tracking-widest">Source Control</div>
                  <div className="text-white font-medium">github.com/ekefan</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl relative overflow-hidden">
             <div className="absolute top-4 right-4 text-[10px] font-mono-tech text-emerald-500/50 uppercase tracking-widest">Secure Channel</div>
             
             {status === 'success' ? (
               <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 mb-2">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white uppercase tracking-tight">Transmission_Complete</h4>
                  <p className="text-gray-400 text-sm max-w-[280px]">Handshake established. Your project brief has been routed to my primary ingress. Expect a callback within 24 standard cycles.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-xs font-mono-tech text-blue-500 hover:text-blue-400 uppercase tracking-widest underline decoration-blue-500/30 underline-offset-4"
                  >
                    Open_New_Channel()
                  </button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-mono-tech text-gray-500 uppercase">Your Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-mono-tech text-gray-500 uppercase">Contact Email</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
                        />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-mono-tech text-gray-500 uppercase">Project Brief</label>
                     <textarea 
                       name="project"
                       rows={4}
                       value={formData.project}
                       onChange={handleChange}
                       placeholder="Tell me about your project...."
                       className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-all resize-none"
                     ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-bold rounded flex items-center justify-center gap-3 transition-all glow-blue group uppercase tracking-widest text-sm"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        EXECUTING_HANDSHAKE...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        INIT_YOUR_PROJECT
                      </>
                    )}
                  </button>
               </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;