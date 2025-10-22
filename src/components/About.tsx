import { Lightbulb, Globe, Handshake } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation & Strategy',
      description: 'Catalyzing transformative ideas and strategic thinking'
    },
    {
      icon: Globe,
      title: 'Sustainability & Inclusion',
      description: 'Building an equitable and sustainable future'
    },
    {
      icon: Handshake,
      title: 'Leadership & Collaboration',
      description: 'Fostering meaningful partnerships for growth'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            About Oraculum
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Oraculum is FORE School of Management's annual corporate conclave that unites India's top business leaders, innovators, and strategists to exchange ideas shaping the future of work and leadership. Organized by the Corporate Interaction Division (CID), the conclave serves as a platform where foresight meets opportunity — connecting industry and academia in pursuit of a Viksit Bharat.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 sm:p-12 mb-12 border border-blue-100">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-4">
            Theme: Viksit Bharat
          </h3>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto">
            Catalyzing Innovation, Sustainability, and Inclusive Growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-blue-700" size={36} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
