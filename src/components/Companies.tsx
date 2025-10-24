const Companies = () => {
  const companies = [
    { name: 'Microsoft', logo: '/images/Microsoft.png' },
    { name: 'EY', logo: '/images/EY.png' },
    { name: 'PwC India', logo: '/images/PwC.png' },
    { name: 'Boston Consulting Group', logo: '/images/Boston Consulting Group copy.png' },
    { name: 'Amazon' },
    { name: 'Accenture', logo: '/images/Accenture copy.png' },
    { name: 'HCL Tech' },
    { name: 'Hitachi' },
    { name: 'HSBC' },
    { name: 'London Stock Exchange Group' },
    { name: 'Maruti Suzuki' },
    { name: 'Genpact' },
    { name: 'PayU' },
    { name: 'Dabur' },
    { name: 'Religare Broking' },
  ];

  return (
    <section id="companies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Featured Companies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-4">
            Oraculum has hosted senior leadership from 50+ global and Indian organizations
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Representing diverse industries and cross-functional expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-center hover:shadow-lg hover:border-blue-300 transition-all group min-h-[120px]"
            >
              {company.logo ? (
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-16 w-auto h-auto object-contain transition-transform group-hover:scale-110"
                />
              ) : (
                <span className="text-center text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                  {company.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
