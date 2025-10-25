import { useEffect, useState } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const eventDate = new Date('2025-11-28T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-200">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-1 bg-white/20 transform -rotate-45 animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-96 h-1 bg-white/20 transform rotate-45 animate-pulse delay-1000"></div>
          <div className="absolute top-40 right-32 w-48 h-1 bg-white/20 transform -rotate-12"></div>
          <div className="absolute bottom-48 left-24 w-64 h-1 bg-white/20 transform rotate-12"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-12">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            ORACULUM
          </h1>
          <p className="text-2xl sm:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Where Industry Wisdom Meets Future Leadership..
          </p>
          <p className="text-xl sm:text-2xl text-white/80">
            November 28–29, 2025
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg text-white/90 font-medium mb-3">Countdown to Oraculum 2.0</p>
          <div className="flex justify-center gap-4 sm:gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/30 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-white">{timeLeft.days}</span>
              </div>
              <span className="text-sm sm:text-base text-white/80 mt-2 font-medium">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/30 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-white">{timeLeft.hours}</span>
              </div>
              <span className="text-sm sm:text-base text-white/80 mt-2 font-medium">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/30 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-white">{timeLeft.minutes}</span>
              </div>
              <span className="text-sm sm:text-base text-white/80 mt-2 font-medium">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/30 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-white">{timeLeft.seconds}</span>
              </div>
              <span className="text-sm sm:text-base text-white/80 mt-2 font-medium">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
