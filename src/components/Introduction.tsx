import React from 'react';
import { Brain, Building2, FileText } from 'lucide-react';

export default function Introduction() {
  return (
    <section id="introduction" className="py-20 bg-gradient-to-b from-black to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
            Transforming Construction Through AI Innovation
          </h2>
          <p className="text-xl text-gray-300">
            The Pillar combines cutting-edge AI technologies to revolutionize how construction projects are planned, executed, and managed. Our platform integrates Machine Learning, Computer Vision, and Natural Language Processing to deliver unprecedented efficiency and accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Machine Learning",
              description: "Advanced predictive analytics for accurate project forecasting and risk assessment",
              image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
              gradient: "from-purple-500 to-blue-500"
            },
            {
              icon: Building2,
              title: "Computer Vision",
              description: "Real-time site monitoring and automated quality inspection using YOLO technology",
              image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: FileText,
              title: "Natural Language Processing",
              description: "Intelligent document processing and communication optimization powered by GPT",
              image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
              gradient: "from-cyan-500 to-emerald-500"
            }
          ].map((tech, index) => (
            <div key={index} className="group relative bg-black rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black z-10" />
                <img 
                  src={tech.image} 
                  alt={tech.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-300"
                />
              </div>

              <div className="relative z-20 p-8">
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                  <tech.icon className="relative h-12 w-12 text-white" />
                </div>

                <h3 className={`text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${tech.gradient}`}>
                  {tech.title}
                </h3>

                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {tech.description}
                </p>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}