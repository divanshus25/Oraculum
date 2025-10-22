import { Mail, Users, Building2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Join Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-md border border-gray-200">
            <div className="flex items-start mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <Users className="text-blue-700" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">For Professionals</h3>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Join the dialogue. Share your journey, insights, and ideas with the next generation of business leaders.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-md border border-gray-200">
            <div className="flex items-start mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <Building2 className="text-blue-700" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">For Organizations</h3>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Collaborate with FORE School of Management to amplify your organization's thought-leadership presence.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Get In Touch</h3>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                <Mail className="text-yellow-500" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-blue-200 mb-1">Email</p>
                <a
                  href="mailto:cid@fsm.ac.in"
                  className="text-white text-lg font-semibold hover:text-yellow-500 transition-colors"
                >
                  cid@fsm.ac.in
                </a>
              </div>
            </div>
            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-200 font-semibold text-lg mb-2">Corporate Interaction Division</p>
              <p className="text-blue-100">FORE School of Management, New Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
