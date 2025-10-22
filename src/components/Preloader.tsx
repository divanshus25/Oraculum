import { useEffect, useState } from 'react';

interface PreloaderProps {
  onLoadComplete: () => void;
}

const Preloader = ({ onLoadComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 2500;
    const interval = 16;
    const increment = (100 * interval) / duration;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onLoadComplete();
          }, 800);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gray-50 transition-opacity duration-800 ${
        isComplete ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 256 256"
            style={{ transform: 'rotate(-90deg)' }}
          >
            <circle
              cx="128"
              cy="128"
              r="120"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
              opacity="0.3"
            />

            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <circle
              cx="128"
              cy="128"
              r="120"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 120}`}
              strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
              filter="url(#glow)"
              className={`transition-all duration-100 ease-out ${
                isComplete ? 'animate-pulse' : ''
              }`}
            />
          </svg>

          <div
            className={`relative z-10 transition-all duration-500 ${
              isComplete ? 'scale-110' : 'scale-100'
            }`}
          >
            <img
              src="/LOGO(NEW) (1).png"
              alt="FORE School of Management"
              className="w-40 h-auto object-contain drop-shadow-lg"
            />
          </div>

          {isComplete && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-yellow-500/20 animate-ping" />
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700 font-semibold text-base animate-pulse">
            Powering India's corporate future…
          </p>
          <div className="mt-2 flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
