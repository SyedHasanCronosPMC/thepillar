import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export default function CompetitiveAdvantage() {
  return (
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Competitive Advantage
          </h2>
          <p className="text-xl text-gray-600">
            See how The Pillar outperforms traditional solutions in key areas
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-gray-600">Features</th>
                  <th className="px-6 py-4 text-center text-blue-600 font-bold">The Pillar</th>
                  <th className="px-6 py-4 text-center text-gray-600">Oracle</th>
                  <th className="px-6 py-4 text-center text-gray-600">Autodesk</th>
                  <th className="px-6 py-4 text-center text-gray-600">Procore</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 text-gray-900">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      <Check value={feature.pillar} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check value={feature.oracle} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check value={feature.autodesk} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check value={feature.procore} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check({ value }: { value: boolean }) {
  if (value) {
    return <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />;
  }
  return <XCircle className="h-6 w-6 text-red-500 mx-auto" />;
}

const features = [
  {
    name: "Advanced AI Integration",
    pillar: true,
    oracle: false,
    autodesk: false,
    procore: false
  },
  {
    name: "Real-time Computer Vision",
    pillar: true,
    oracle: false,
    autodesk: true,
    procore: false
  },
  {
    name: "AI-driven Schedule Optimization",
    pillar: true,
    oracle: true,
    autodesk: false,
    procore: false
  },
  {
    name: "Predictive Cost Management",
    pillar: true,
    oracle: true,
    autodesk: true,
    procore: true
  },
  {
    name: "GPT-powered Documentation",
    pillar: true,
    oracle: false,
    autodesk: false,
    procore: false
  }
];