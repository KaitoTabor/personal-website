import React from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  return (
    <div className="loading-screen">
      <div className="ocean-container">
        {/* Animated waves background */}
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        
        {/* Loading content */}
        <div className="loading-content">
          <div className="bubble-container">
            <div className="bubble bubble1"></div>
            <div className="bubble bubble2"></div>
            <div className="bubble bubble3"></div>
            <div className="bubble bubble4"></div>
            <div className="bubble bubble5"></div>
          </div>
          
          <div className="loading-text">
            <h1>Loading</h1>
            <div className="dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #001f3f 0%, #003366 25%, #004080 50%, #0066cc 75%, #ffffff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }

        .ocean-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Animated waves */
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: wave-animation 6s ease-in-out infinite;
        }

        .wave1 {
          animation-delay: 0s;
          opacity: 0.3;
        }

        .wave2 {
          animation-delay: 2s;
          opacity: 0.2;
          height: 150px;
        }

        .wave3 {
          animation-delay: 4s;
          opacity: 0.1;
          height: 100px;
        }

        @keyframes wave-animation {
          0%, 100% {
            transform: translateX(-50%) rotate(0deg);
          }
          50% {
            transform: translateX(-60%) rotate(180deg);
          }
        }

        /* Loading content */
        .loading-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: white;
        }

        /* Floating bubbles */
        .bubble-container {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 400px;
        }

        .bubble {
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: bubble-float 4s ease-in-out infinite;
        }

        .bubble1 {
          width: 20px;
          height: 20px;
          left: 10%;
          animation-delay: 0s;
        }

        .bubble2 {
          width: 15px;
          height: 15px;
          left: 30%;
          animation-delay: 1s;
        }

        .bubble3 {
          width: 25px;
          height: 25px;
          left: 50%;
          animation-delay: 2s;
        }

        .bubble4 {
          width: 12px;
          height: 12px;
          left: 70%;
          animation-delay: 3s;
        }

        .bubble5 {
          width: 18px;
          height: 18px;
          left: 85%;
          animation-delay: 0.5s;
        }

        @keyframes bubble-float {
          0%, 100% {
            transform: translateY(400px) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
          }
        }

        /* Loading text */
        .loading-text h1 {
          font-size: 2.5rem;
          font-weight: 300;
          margin: 0 0 20px 0;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          letter-spacing: 3px;
        }

        .dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 40px;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          animation: dot-pulse 1.5s ease-in-out infinite;
        }

        .dot:nth-child(1) {
          animation-delay: 0s;
        }

        .dot:nth-child(2) {
          animation-delay: 0.5s;
        }

        .dot:nth-child(3) {
          animation-delay: 1s;
        }

        @keyframes dot-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        /* Progress bar */
        .progress-container {
          width: 300px;
          margin: 0 auto;
        }

        .progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ffffff 0%, #b3d9ff 50%, #ffffff 100%);
          border-radius: 2px;
          animation: progress-animation 3s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
        }

        @keyframes progress-animation {
          0% {
            width: 0%;
            transform: translateX(-100%);
          }
          50% {
            width: 100%;
            transform: translateX(0%);
          }
          100% {
            width: 0%;
            transform: translateX(100%);
          }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .loading-text h1 {
            font-size: 2rem;
          }
          
          .progress-container {
            width: 250px;
          }
          
          .bubble-container {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .loading-text h1 {
            font-size: 1.5rem;
          }
          
          .progress-container {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;