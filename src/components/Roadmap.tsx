import React from 'react';

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Execution Roadmap
          </h2>
          <p className="text-xl text-gray-600">
            Our strategic plan for growth and global expansion
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8">
                <div className="w-32 flex-shrink-0 text-right">
                  <div className="text-lg font-bold text-blue-600">{milestone.date}</div>
                </div>
                <div className="flex-grow relative pb-12">
                  <div className="absolute left-0 top-2 -ml-3.5 h-full w-px bg-blue-200" />
                  <div className="absolute left-0 top-2 -ml-5 h-4 w-4 rounded-full border-4 border-blue-600 bg-white" />
                  <div className="bg-white rounded-xl p-6 shadow-sm ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const milestones = [
  {
    date: "Q2 2025",
    title: "Initial Development Phase",
    description: "Secure funding, expand tech team, and refine MVP based on early adopter feedback."
  },
  {
    date: "Q4 2025",
    title: "Commercial Launch",
    description: "Official launch in UAE & KSA markets with full platform capabilities."
  },
  {
    date: "Q1 2026",
    title: "Regional Expansion",
    description: "Expansion into broader GCC region, including Saudi Arabia and Qatar."
  },
  {
    date: "2027+",
    title: "Global Market Entry",
    description: "Strategic expansion into Asia, Europe, and North American markets."
  }
];