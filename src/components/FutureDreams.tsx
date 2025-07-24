import React from 'react';
import { Home, Plane, Baby, GraduationCap } from 'lucide-react';

export const FutureDreams: React.FC = () => {
  const dreams = [
    {
      id: 1,
      icon: Home,
      title: "Rumah Impian",
      description: "Membangun rumah kecil yang hangat dengan taman bunga di depannya, tempat kita bisa tumbuh tua bersama.",
      color: "bg-blush/20"
    },
    {
      id: 2,
      icon: Plane,
      title: "Traveling Bersama",
      description: "Mengunjungi tempat-tempat indah di dunia, dari pantai Bali hingga sakura di Jepang, menciptakan kenangan di setiap tempat.",
      color: "bg-lavender/20"
    },
    {
      id: 3,
      icon: Baby,
      title: "Keluarga Kecil",
      description: "Suatu hari nanti, kita akan memiliki keluarga kecil yang bahagia dengan anak-anak yang lucu seperti kita.",
      color: "bg-mint/20"
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Meraih Impian",
      description: "Saling mendukung untuk meraih cita-cita masing-masing dan tumbuh bersama menjadi versi terbaik dari diri kita.",
      color: "bg-peach/20"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-romantic">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Mimpi Masa Depan Kita</h2>
          <p className="text-primary-foreground/80 text-lg">Impian-impian indah yang akan kita wujudkan bersama</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dreams.map((dream, index) => (
            <div
              key={dream.id}
              className="bg-card/90 backdrop-blur-sm p-6 rounded-3xl shadow-soft hover:shadow-cute transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-2xl ${dream.color} flex-shrink-0`}>
                  <dream.icon size={24} className="text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{dream.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{dream.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};