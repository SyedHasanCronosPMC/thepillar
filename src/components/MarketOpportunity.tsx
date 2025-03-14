import React from 'react';
import { TrendingUp, AlertTriangle, Clock, DollarSign } from 'lucide-react';

export default function MarketOpportunity() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Market Opportunity
          </h2>
          <p className="text-xl text-gray-600">
            The construction industry is on the cusp of an AI revolution, presenting an unprecedented opportunity for innovation and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={TrendingUp}
            value="$20B"
            label="AI in Construction by 2030"
            color="text-green-600"
          />
          <StatCard
            icon={AlertTriangle}
            value="94%"
            label="Firms Planning AI Adoption"
            color="text-blue-600"
          />
          <StatCard
            icon={Clock}
            value="28%"
            label="Average Budget Overrun"
            color="text-red-600"
          />
          <StatCard
            icon={DollarSign}
            value="$15T"
            label="Global Construction Market"
            color="text-purple-600"
          />
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Key Industry Pain Points
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {point.title}
                </h4>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, value, label, color }: { icon: any, value: string, label: string, color: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <Icon className={`h-8 w-8 ${color} mb-4`} />
      <div className={`text-3xl font-bold ${color} mb-2`}>{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

const painPoints = [
  {
    title: "Budget Overruns",
    description: "90% of construction projects exceed their initial budgets by an average of 28%."
  },
  {
    title: "Regulatory Compliance",
    description: "Complex and changing regulations cause significant project delays and increased costs."
  },
  {
    title: "Resource Management",
    description: "Poor scheduling and resource allocation lead to significant waste and inefficiency."
  }
];