import React from 'react';
import { Brain, Eye, MessageSquare } from 'lucide-react';

export default function Solution() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Pillar's AI-Powered Solution
          </h2>
          <p className="text-xl text-gray-600">
            Our comprehensive platform combines cutting-edge AI technologies to transform every aspect of construction management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <SolutionCard
            icon={Brain}
            title="Predictive Analytics"
            features={[
              "90% accurate project forecasting",
              "Real-time risk assessment",
              "Resource optimization",
              "Cost prediction modeling"
            ]}
          />
          <SolutionCard
            icon={Eye}
            title="Computer Vision"
            features={[
              "Real-time site monitoring",
              "Automated quality inspection",
              "Safety compliance tracking",
              "Progress visualization"
            ]}
          />
          <SolutionCard
            icon={MessageSquare}
            title="NLP & GPT Integration"
            features={[
              "Automated documentation",
              "Smart communication",
              "Contract analysis",
              "Regulatory compliance"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ icon: Icon, title, features }: { 
  icon: any;
  title: string;
  features: string[];
}) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <Icon className="h-12 w-12 text-blue-600 mb-6" />
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}