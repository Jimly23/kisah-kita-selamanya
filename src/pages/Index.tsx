import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { RelationshipTimer } from '@/components/RelationshipTimer';
import { MusicPlayer } from '@/components/MusicPlayer';
import { PhotoGallery } from '@/components/PhotoGallery';
import { LoveNotes } from '@/components/LoveNotes';
import { RelationshipPrinciples } from '@/components/RelationshipPrinciples';
import { FutureDreams } from '@/components/FutureDreams';
import { KeyMemories } from '@/components/KeyMemories';
import heroBackground from '@/assets/hero-background.jpg';
import cuteBears from '@/assets/cute-bears.png';
import sparkles from '@/assets/sparkles.png';
import cupcakesHearts from '@/assets/cupcakes-hearts.png';

const Index = () => {
  // Start date of the relationship - adjust this to your actual anniversary
  const relationshipStartDate = new Date('2023-02-14');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]"></div>
        
        {/* Floating decorations */}
        <div className="absolute top-20 left-10 animate-float">
          <img src={sparkles} alt="sparkles" className="w-16 h-16 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <img src={cupcakesHearts} alt="cupcakes" className="w-20 h-20 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <img src={cuteBears} alt="cute bears" className="w-24 h-24 opacity-70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-float mb-8">
            <img src={cuteBears} alt="cute couple bears" className="w-32 h-32 mx-auto mb-6" />
          </div>
          
          <div className="flex justify-center items-center gap-3 mb-6">
            <Heart className="text-blush animate-pulse-heart" size={32} />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Kisah Kita Selamanya
            </h1>
            <Heart className="text-blush animate-pulse-heart" size={32} />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Perjalanan cinta yang indah dimulai dari satu tatapan, tumbuh dalam setiap senyuman, 
            dan akan berlanjut selamanya dalam setiap detak jantung.
          </p>

          <div className="flex justify-center items-center gap-2 text-lg text-blush font-medium">
            <Sparkles className="animate-sparkle" size={20} />
            <span>Dinda & Rama</span>
            <Sparkles className="animate-sparkle" size={20} />
          </div>
        </div>
      </section>

      {/* Relationship Timer */}
      <section className="py-16">
        <RelationshipTimer startDate={relationshipStartDate} />
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Love Notes */}
      <LoveNotes />

      {/* Relationship Principles */}
      <RelationshipPrinciples />

      {/* Future Dreams */}
      <FutureDreams />

      {/* Key Memories */}
      <KeyMemories />

      {/* Footer */}
      <footer className="bg-gradient-romantic py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="text-primary-foreground animate-pulse-heart" size={24} />
            <h3 className="text-2xl font-bold text-primary-foreground">Cinta Kita Abadi</h3>
            <Heart className="text-primary-foreground animate-pulse-heart" size={24} />
          </div>
          <p className="text-primary-foreground/80 text-lg mb-6">
            "Dalam setiap hari yang berlalu, cinta kita semakin kuat. 
            Dalam setiap tantangan yang datang, kita semakin bersatu. 
            Selamanya dan selalu, kita akan bersama."
          </p>
          <div className="text-primary-foreground/60">
            💕 Dibuat dengan cinta untuk kenangan yang tak terlupakan 💕
          </div>
        </div>
      </footer>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
