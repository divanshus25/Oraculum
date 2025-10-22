import { MessageSquare, TrendingUp, Mic, Target, GraduationCap } from 'lucide-react';

const EventFormats = () => {
  const formats = [
    {
      icon: Target,
      title: 'Bizdom',
      description: 'Strategic business insights and real-world case studies from industry leaders',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: GraduationCap,
      title: 'Mastering Management',
      description: 'Deep-dive sessions on management excellence, leadership strategies, and organizational dynamics',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: TrendingUp,
      title: 'Elevator Edge',
      description: 'Quick, impactful sessions designed to sharpen your business acumen and competitive edge',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      icon: Mic,
      title: 'Real Talk Trailblazer Tales',
      description: 'Authentic stories from industry pioneers sharing their journey, challenges, and breakthroughs',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: MessageSquare,
      title: 'Envision Panel Discussion Series',
      description: 'Cross-sector panel discussions featuring diverse perspectives on innovation, strategy, and future trends',
      color: 'from-rose-500 to-rose-600',
    },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Event Formats
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience diverse learning formats designed to inspire, educate, and connect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formats.map((format, index) => {
            const Icon = format.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${format.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className="p-8 relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${format.color} rounded-xl mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{format.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{format.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventFormats;
