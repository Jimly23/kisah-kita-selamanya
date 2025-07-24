import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  // For demo purposes, we'll use a placeholder URL
  // In real implementation, you'd add an actual MP3 file to the public folder
  const audioSrc = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"; // Placeholder

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 bg-card/90 backdrop-blur-lg p-4 rounded-full shadow-cute border border-border/20">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-gradient-romantic hover:bg-gradient-romantic/80"
        >
          {isPlaying ? (
            <Pause className="text-primary-foreground" size={16} />
          ) : (
            <Play className="text-primary-foreground ml-0.5" size={16} />
          )}
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMute}
          className="w-8 h-8 rounded-full"
        >
          {isMuted ? (
            <VolumeX className="text-muted-foreground" size={14} />
          ) : (
            <Volume2 className="text-muted-foreground" size={14} />
          )}
        </Button>

        <audio
          ref={audioRef}
          src={audioSrc}
          preload="metadata"
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};