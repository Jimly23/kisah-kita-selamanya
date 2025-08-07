import React from 'react';
import { Camera, Heart } from 'lucide-react';
import galeri1 from '../assets/image/galeri/galeri1.jpg'
import galeri2 from '../assets/image/galeri/galeri2.jpg'
import galeri3 from '../assets/image/galeri/galeri3.jpg'
import galeri4 from '../assets/image/galeri/galeri4.jpg'
import galeri5 from '../assets/image/galeri/galeri5.jpg'
import galeri6 from '../assets/image/galeri/galeri6.jpg'

export const PhotoGallery: React.FC = () => {

  const photos = [
    { id: 1, src: galeri1, caption: "Kencan pertama kita" },
    { id: 2, src: galeri2, caption: "Senyuman termanis" },
    { id: 3, src: galeri3, caption: "Momen bahagia" },
    { id: 4, src: galeri4, caption: "Masa depan bersama" },
    { id: 5, src: galeri5, caption: "Cinta sejati" },
    { id: 6, src: galeri6, caption: "Kebersamaan indah" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Camera className="text-blush animate-bounce-cute" size={28} />
            <h2 className="text-3xl font-bold text-foreground font-playwrite">Galeri</h2>
            <Heart className="text-blush animate-bounce-cute" size={28} />
          </div>
          {/* <p className="text-muted-foreground text-lg">Setiap foto adalah cerita cinta kita</p> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-cute transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {/* <p className="text-sm font-medium">{photo.caption}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};