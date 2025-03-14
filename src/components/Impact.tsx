import React from 'react';
import { Recycle, TrendingUp, Users } from 'lucide-react';

export default function Impact() {
  const impacts = [
    {
      icon: Recycle,
      title: "Resource Optimization",
      description: "20% reduction in material waste through AI-powered planning and optimization",
      metric: "20%",
      metricLabel: "Waste Reduction",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: TrendingUp,
      title: "Project Efficiency",
      description: "30% reduction in project delays, leading to significant cost savings",
      metric: "30%",
      metricLabel: "Fewer Delays",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Workforce Impact",
      description: "Improved safety and productivity through AI-assisted monitoring",
      metric: "40%",
      metricLabel: "Safety Improvement",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
      gradient: "from-purple-500 to-blue-500"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-black to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
            Impact & Sustainability
          </h2>
          <p className="text-xl text-gray-300">
            Creating lasting positive change in the construction industry through AI innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 ease-out"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={impact.image}
                  alt={impact.title}
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                {/* Icon with Gradient Glow */}
                <div className="relative inline-block mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${impact.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                  <impact.icon className="relative h-12 w-12 text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${impact.gradient}`}>
                  {impact.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 mb-6">
                  {impact.description}
                </p>

                {/* Metric */}
                <div className="border-t border-white/10 pt-6 group-hover:border-white/20 transition-colors duration-300">
                  <div className={`text-4xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r ${impact.gradient}`}>
                    {impact.metric}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {impact.metricLabel}
                  </div>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 rounded-2xl transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Impact Stats */}
        <div className="mt-16 bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-2">
                50,000+
              </div>
              <p className="text-gray-400">Trees Saved Annually</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                -40%
              </div>
              <p className="text-gray-400">Carbon Emissions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300 mb-2">
                85%
              </div>
              <p className="text-gray-400">Digital Documentation</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300 mb-2">
                -60%
              </div>
              <p className="text-gray-400">Material Waste</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 rounded-lg blur group-hover:blur-md transition-all duration-300" />
            <button className="relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-500 rounded-lg text-white font-semibold text-lg">
              Learn About Our Green Initiative
            </button>
          </div>
          <p className="mt-4 text-gray-400">
            Join us in building a sustainable future for construction
          </p>
        </div>
      </div>
    </section>
  );
}