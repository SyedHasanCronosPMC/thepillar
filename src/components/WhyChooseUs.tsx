import React from 'react';
import { 
  Brain, 
  LineChart, 
  Eye, 
  Calendar, 
  PiggyBank, 
  FileText, 
  BarChart3,
  Cloud
} from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Project Intelligence",
      description: "90% accurate project forecasting with proactive risk management and resource optimization",
      gradient: "from-purple-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "AI-powered live site tracking reduces manual reporting and cuts rework costs by 70%",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling & Optimization",
      description: "Automated AI scheduling maximizes resource utilization and boosts productivity",
      gradient: "from-cyan-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80"
    },
    {
      icon: PiggyBank,
      title: "AI-Powered Cost Management",
      description: "Early financial risk detection with dynamic budget optimization",
      gradient: "from-teal-500 to-green-500",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
    },
    {
      icon: FileText,
      title: "Automated Documentation",
      description: "Streamlined document handling and team communication with NLP and GPT",
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?auto=format&fit=crop&q=80"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Make smarter, faster decisions with AI-powered real-time insights",
      gradient: "from-emerald-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-300">
            Traditional construction management struggles with inefficiencies and delays. 
            The Pillar leverages cutting-edge AI to tackle these challenges head-on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 ease-out"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                {/* Icon with Gradient Glow */}
                <div className="relative inline-block mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                  <feature.icon className="relative h-12 w-12 text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Decorative Border */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 rounded-2xl transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur group-hover:blur-md transition-all duration-300" />
            <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold text-lg">
              Get Started Now
            </button>
          </div>
          <p className="mt-4 text-gray-400">
            Take control of your construction projects with AI-powered efficiency
          </p>
        </div>
      </div>
    </section>
  );
}