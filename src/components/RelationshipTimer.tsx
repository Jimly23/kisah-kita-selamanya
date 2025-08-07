import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface RelationshipTimerProps {
  startDate: Date;
}

export const RelationshipTimer: React.FC<RelationshipTimerProps> = ({ startDate }) => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="bg-gradient-romantic p-8 rounded-3xl shadow-cute max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Heart className="text-primary animate-pulse-heart" size={24} />
          <h2 className="text-2xl font-bold text-foreground font-playwrite">Our Time</h2>
          <Heart className="text-primary animate-pulse-heart" size={24} />
        </div>
        {/* <p className="text-muted-foreground font-playwrite">Setiap detik bersama adalah kebahagiaan</p> */}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-2xl text-center transform hover:scale-105 transition-transform">
          <div className="text-2xl font-playwrite font-bold text-foreground mb-1">{timeElapsed.days}</div>
          <div className="text-sm text-muted-foreground">Hari</div>
        </div>
        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-2xl text-center transform hover:scale-105 transition-transform">
          <div className="text-2xl font-playwrite font-bold text-foreground mb-1">{timeElapsed.hours}</div>
          <div className="text-sm text-muted-foreground">Jam</div>
        </div>
        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-2xl text-center transform hover:scale-105 transition-transform">
          <div className="text-2xl font-playwrite font-bold text-foreground mb-1">{timeElapsed.minutes}</div>
          <div className="text-sm text-muted-foreground">Menit</div>
        </div>
        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-2xl text-center transform hover:scale-105 transition-transform">
          <div className="text-2xl font-playwrite font-bold text-foreground mb-1">{timeElapsed.seconds}</div>
          <div className="text-sm text-muted-foreground">Detik</div>
        </div>
      </div>
    </div>
  );
};