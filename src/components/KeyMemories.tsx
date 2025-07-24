import React from 'react';
import { Calendar, MapPin, Gift, Coffee } from 'lucide-react';

export const KeyMemories: React.FC = () => {
  const memories = [
    {
      id: 1,
      date: "14 Februari 2023",
      title: "Pertemuan Pertama",
      description: "Hari dimana takdir mempertemukan kita di cafe kecil itu. Siapa sangka percakapan kecil itu akan membawa kita sejauh ini.",
      icon: Coffee,
      location: "Cafe Romantis"
    },
    {
      id: 2,
      date: "20 Maret 2023",
      title: "Jadian Resmi",
      description: "Hari paling berkesan ketika kamu bilang 'iya' saat aku menyatakan perasaan. Jantungku masih berdebar mengingat momen itu.",
      icon: Gift,
      location: "Taman Kota"
    },
    {
      id: 3,
      date: "15 Juni 2023",
      title: "Liburan Pertama",
      description: "Trip pertama kita ke pantai. Melihat sunset bersama sambil memegang tangan, rasanya dunia milik kita berdua.",
      icon: MapPin,
      location: "Pantai Indah"
    },
    {
      id: 4,
      date: "25 Desember 2023",
      title: "Natal Bersama",
      description: "Merayakan Natal pertama sebagai sepasang kekasih. Tukar kado dan janji untuk selalu bersama selamanya.",
      icon: Calendar,
      location: "Rumah Keluarga"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Kenangan Berharga</h2>
          <p className="text-muted-foreground text-lg">Momen-momen indah yang akan selalu kita kenang</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-romantic transform md:-translate-x-1/2"></div>
          
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blush rounded-full transform -translate-x-1/2 border-4 border-background shadow-glow animate-pulse-heart"></div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-card p-6 rounded-3xl shadow-soft hover:shadow-cute transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-romantic/20 rounded-2xl flex-shrink-0">
                      <memory.icon size={24} className="text-blush" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground">{memory.title}</h3>
                        <span className="text-sm text-muted-foreground bg-cream/50 px-3 py-1 rounded-full">
                          {memory.date}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-2">{memory.description}</p>
                      <div className="flex items-center gap-1 text-sm text-blush">
                        <MapPin size={14} />
                        <span>{memory.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};