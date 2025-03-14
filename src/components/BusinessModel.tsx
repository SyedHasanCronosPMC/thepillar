import React from 'react';
import { Gauge, Building, Users } from 'lucide-react';

export default function BusinessModel() {
  const plans = [
    {
      icon: Gauge,
      title: "SaaS Subscription",
      description: "Monthly/annual plans for continuous platform access",
      features: [
        "Full platform access",
        "Regular updates",
        "Standard support",
        "Basic analytics"
      ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      gradient: "from-blue-600 to-cyan-400"
    },
    {
      icon: Building,
      title: "Enterprise Licensing",
      description: "Custom solutions for large enterprises",
      features: [
        "Custom integration",
        "Advanced features",
        "24/7 premium support",
        "Advanced analytics"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      gradient: "from-purple-600 to-blue-400"
    },
    {
      icon: Users,
      title: "Pay-per-use Model",
      description: "Affordable access for smaller firms",
      features: [
        "Usage-based billing",
        "No long-term commitment",
        "Essential features",
        "Email support"
      ],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80",
      gradient: "from-cyan-400 to-emerald-400"
    }
  ];

  return (
    <section id="business" className="py-20 bg-gradient-to-b from-black to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
            Business Model
          </h2>
          <p className="text-xl text-gray-300">
            Flexible pricing options designed to accommodate businesses of all sizes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 ease-out"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                {/* Icon with Gradient Glow */}
                <div className="relative inline-block mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                  <plan.icon className="relative h-12 w-12 text-white" />
                </div>

                {/* Title and Description */}
                <h3 className={`text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${plan.gradient}`}>
                  {plan.title}
                </h3>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.gradient} mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Border */}
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
              Contact Sales
            </button>
          </div>
          <p className="mt-4 text-gray-400">
            Find the perfect plan for your business needs
          </p>
        </div>
      </div>
    </section>
  );
}