import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedShaderBackground from './ui/animated-shader-background';

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

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedShaderBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-12 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
              ORACULUM
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8" />
          </div>

          <p className="text-2xl sm:text-3xl lg:text-4xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light mb-8 drop-shadow-lg">
            Where Industry Wisdom Meets Future Leadership
          </p>

          <p className="text-xl sm:text-2xl text-cyan-300/90 font-medium drop-shadow-lg">
            November 28–29, 2025
          </p>
        </div>

        <div className="mb-12">
          <p className="text-lg text-white/90 font-medium mb-6 tracking-wide">Countdown to Oraculum 2.0</p>
          <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto flex-wrap">
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-lg border-2 border-cyan-400/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-300 shadow-lg shadow-cyan-500/20">
                <span className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">{timeLeft.days}</span>
              </div>
              <span className="text-sm sm:text-base text-white/90 mt-3 font-semibold uppercase tracking-wider">Days</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-lg border-2 border-cyan-400/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-300 shadow-lg shadow-cyan-500/20">
                <span className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">{timeLeft.hours}</span>
              </div>
              <span className="text-sm sm:text-base text-white/90 mt-3 font-semibold uppercase tracking-wider">Hours</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-lg border-2 border-cyan-400/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-300 shadow-lg shadow-cyan-500/20">
                <span className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">{timeLeft.minutes}</span>
              </div>
              <span className="text-sm sm:text-base text-white/90 mt-3 font-semibold uppercase tracking-wider">Minutes</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-lg border-2 border-cyan-400/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-300 shadow-lg shadow-cyan-500/20">
                <span className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">{timeLeft.seconds}</span>
              </div>
              <span className="text-sm sm:text-base text-white/90 mt-3 font-semibold uppercase tracking-wider">Seconds</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a
            href="#about"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 hover:scale-105 hover:from-cyan-400 hover:to-blue-500"
          >
            Explore Event
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105"
          >
            Register Now
          </a>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-all duration-300 animate-bounce cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
