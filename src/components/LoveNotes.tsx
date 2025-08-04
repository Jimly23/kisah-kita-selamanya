import React from 'react';
import { MessageCircleHeart, Sparkles } from 'lucide-react';

export const LoveNotes: React.FC = () => {
  const loveNotes = [
    {
      id: 1,
      message: "Setiap hari bersamamu adalah hari terbaik dalam hidupku. Kamu adalah alasan aku tersenyum setiap pagi.",
      author: "💕 Untuk cinta hatiku"
    },
    {
      id: 2,
      message: "Dalam pelukan hangatmu, aku menemukan rumah. Dalam senyuman manismu, aku menemukan kebahagiaan.",
      author: "🌸 Dengan cinta"
    },
    {
      id: 3,
      message: "Kamu bukan hanya pacarku, tapi juga sahabat terbaik, partner hidup, dan masa depanku. Aku mencintaimu tanpa batas.",
      author: "💖 Selamanya milikmu"
    },
    {
      id: 4,
      message: "Setiap detik yang kita lewati bersama adalah hadiah terindah. Terima kasih sudah menjadi bagian dari hidupku.",
      author: "🦋 Cintaku untuk selamanya"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <MessageCircleHeart className="text-lavender animate-pulse-heart" size={28} />
            <h2 className="text-3xl font-bold text-foreground">Catatan Cinta</h2>
            <Sparkles className="text-lavender animate-sparkle" size={28} />
          </div>
          <p className="text-muted-foreground text-lg">Kata-kata dari hati untuk hati</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loveNotes.map((note, index) => (
            <div
              key={note.id}
              className={`bg-card/70 backdrop-blur-sm p-6 rounded-3xl shadow-soft hover:shadow-cute transition-all duration-300 transform ${index === 2 ? 'scale-105 -rotate-1' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-blush/30 text-6xl font-serif">"</div>
                <p className="text-foreground/90 text-lg leading-relaxed mb-4 relative z-10 italic">
                  {note.message}
                </p>
                <div className="flex justify-end">
                  <span className="text-muted-foreground text-sm font-medium bg-cream/50 px-3 py-1 rounded-full">
                    {note.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};