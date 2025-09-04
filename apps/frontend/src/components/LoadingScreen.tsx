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
          background: linear-gradient(135deg, #001f3f 0%,  rgba(7, 39, 68, 1) 25%, rgba(16, 60, 101, 1) 50%,  rgba(49, 89, 125, 1) 75%, #ffffff 100%);
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

        .loading-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: white;
        }

        .bubble-container {
          position: absolute;
          top: 90px;
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

        .loading-text h1 {
          font-size: 2.5rem;
          font-weight: 300;
          margin: 0 0 20px 0;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          letter-spacing: 3px;
        }

        .progress-container {
          width: 300px;
          margin: 0 auto;
        }

        .progress-bar {
          width: 100%;
          position: relative;
          top: -110px;
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