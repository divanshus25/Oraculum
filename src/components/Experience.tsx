import { Mic2, Briefcase, Globe } from 'lucide-react';

const Experience = () => {
  const features = [
    {
      icon: Mic2,
      title: 'Panel Dialogues',
      description: 'Insightful cross-sector conversations',
    },
    {
      icon: Briefcase,
      title: 'Corporate Connect',
      description: 'Deep interactions between industry and academia',
    },
    {
      icon: Globe,
      title: 'Vision for Viksit Bharat',
      description: 'Ideas shaping the future of Indian business',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Experience Oraculum
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Beyond the stage, Oraculum is a platform for dialogue, discovery, and foresight. It bridges the perspectives of today's industry leaders with the aspirations of tomorrow's professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-blue-100 text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
