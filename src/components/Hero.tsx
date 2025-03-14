import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-blue-900 animate-gradient-xy">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
          opacity: '0.4'
        }} />
        
        {/* Futuristic grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl relative">
          {/* Glowing accent */}
          <div className="absolute -left-4 -top-4 w-20 h-20 bg-blue-500 rounded-full blur-3xl opacity-20" />
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Revolutionizing Construction with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              AI-Powered Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Eliminating inefficiencies, predicting risks, and optimizing resource allocation across the entire construction lifecycle with cutting-edge artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              Request a Demo
            </button>
            <button className="group relative px-8 py-4 rounded-lg text-lg font-medium overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300" />
              <span className="relative text-white">Learn More</span>
            </button>
          </div>
          
          {/* Floating stats - Repositioned and restyled */}
          <div className="absolute -right-64 top-1/2 transform -translate-y-1/2 hidden 2xl:block">
            <div className="space-y-6">
              {[
                { label: 'Accuracy', value: '90%' },
                { label: 'Cost Reduction', value: '30%' },
                { label: 'Development Speed', value: '2x' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 backdrop-blur-md px-8 py-4 rounded-xl border border-white/10 transform hover:translate-x-2 transition-transform duration-300"
                >
                  <p className="text-white/80 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}