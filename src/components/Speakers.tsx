import { Briefcase } from 'lucide-react';

const Speakers = () => {
  const speakers = [
    {
      name: 'Jaspal Singh Riyat',
      designation: 'Director',
      company: 'Microsoft',
      image: '/images/speakers/Jaspal Singh Riyat.jpg',
    },
    {
      name: 'Sumeet Tandon',
      designation: 'Director',
      company: 'EY Global Delivery Services',
      image: '/images/speakers/Sumeet Tandon.jpeg',
    },
    {
      name: 'Amit Bagadia',
      designation: 'Director',
      company: 'PwC India',
      image: '/images/speakers/Amit Bagadia.jpeg',
    },
    {
      name: 'Arshiya Singh',
      designation: 'Director',
      company: 'Boston Consulting Group (BCG)',
      image: '/images/speakers/Arshiya Singh.jpeg',
    },
    {
      name: 'Parived Bhatnagar',
      designation: 'HR Director',
      company: 'Accenture',
      image: '/images/speakers/Parived Bhatnagar.jpeg',
    },
    {
      name: 'Sumedha Bakhshi',
      designation: 'HR',
      company: 'Amazon',
      image: '/images/speakers/Sumedha Bakhshi.jpg',
    },
    {
      name: 'Jyothi Sivaramakrishnan',
      designation: 'Head of Country HR',
      company: 'London Stock Exchange Group',
      image: '/images/speakers/Jyothi Sivaramakrishnan',
    },
    {
      name: 'Vineet Tandon',
      designation: 'Director, Global Talent Marketing',
      company: 'HCL Tech',
      image: '/images/speakers/Vineet Tandon.jpeg',
    },
    {
      name: 'Sunit Pareek',
      designation: 'Vice President - Commercial Banking',
      company: 'HSBC',
      image: '/images/speakers/Sunit Pareek.jpeg',
    },
    {
      name: 'Ashutosh Anshu',
      designation: 'CHRO',
      company: 'Hitachi',
      image: '/images/speakers/Ashutosh Anshu.jpeg',
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Eminent Speakers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Learn from industry leaders shaping the future of business and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-200 overflow-hidden"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Profile
                  </span>
                </div>
                {speaker.image ? (
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl font-bold text-blue-700">
                    {speaker.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{speaker.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{speaker.designation}</p>
                <div className="flex items-center text-blue-600">
                  <Briefcase size={16} className="mr-2 flex-shrink-0" />
                  <span className="font-semibold text-sm">{speaker.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
