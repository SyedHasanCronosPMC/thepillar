import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, Building2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@thepillar.ai?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-black to-blue-900/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] -top-64 -left-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[500px] h-[500px] -bottom-64 -right-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20" />
              <Building2 className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300">
            Join the AI revolution in construction
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 group-hover:text-blue-400 transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-800/70"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 group-hover:text-blue-400 transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-800/70"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 group-hover:text-blue-400 transition-colors">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-800/70"
                  placeholder="Your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full group relative overflow-hidden px-6 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
              >
                <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full" />
                <span className="relative flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
              <a 
                href="mailto:info@thepillar.ai" 
                className="flex items-center justify-center text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                <span>Email Us</span>
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center justify-center text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                <span>Call Us</span>
              </a>
              <a 
                href="https://linkedin.com/company/thepillar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}