import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
// background
import bgSection2 from '@/assets/image/bgSection2.png'
import jaring from '@/assets/image/jaring.png'
import bingkai1 from '@/assets/image/bingkai1.png'
import bingkai2 from '@/assets/image/bingkai2.png'
import kuote from '@/assets/image/kuote.png'
import bintang from '@/assets/image/bintang.png'
import pesawat from '@/assets/image/pesawat.png'


// asset
import fotoHero from '@/assets/foto-hero.jpg';
import fotosection1 from '../assets/image/section4/section1.jpg'
import section1 from '../assets/image/section5/section1.jpg'
import loveUngu from '@/assets/image/loveUngu.png'

// video
import video from '@/assets/video/video.mp4'
import sectionvideo from '../assets/video/sectionvideo.jpg'


// gif
import gif1 from '../assets/gif/gif1.gif';
import gif2 from '../assets/gif/gif2.gif';
import gif3 from '../assets/gif/gif3.gif';
import gif4 from '../assets/gif/gif4.gif';
import GaleryLove from '@/components/GaleryLove';
import Section2 from '@/components/Section2';
import Buket from '@/components/Buket';

const Index = () => {
  const relationshipStartDate = new Date('2025-01-19');

  // aos
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi (ms)
      once: false,    // hanya animasi saat pertama scroll (true/false)
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      
      <Buket />
      
      <Section2 />

      <GaleryLove />

      <section className="py-16 relative bg-vanilla mx-3 sm:mx-0">
        <RelationshipTimer startDate={relationshipStartDate} />
        
        <div className="hidden sm:block absolute top-10 right-10 animate-float" style={{ animationDelay: '3s' }}>
          <img src={gif3}
            className="w-24" />
        </div>
        <div className="hidden sm:block absolute left-10 bottom-10 animate-float" style={{ animationDelay: '4s' }}>
          <img src={gif1}
            className="w-24 h-24" />
        </div>
      </section>

      <section className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${fotoHero})` }}>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-10" />
        <div className='w-[80%] h-[60%] sm:w-[60%] sm:h-[70%] rotate-[-10deg] mx-auto bg-transparent relative z-10 rounded-xl overflow-hidden border-4 border-white'>
          <img src={fotosection1} className='w-full h-full object-cover' />
          <img src={loveUngu} className='absolute right-5 top-5 w-[80px]' />
        </div>

        <img src={loveUngu} className='absolute right-10 top-10 w-[150px]' />
      </section>

      <section
        className="relative h-[900px] sm:h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${bgSection2})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 min-h-screen">
          <img src={pesawat} data-aos="fade-up" data-aos-delay="100" className='absolute z-10 w-[200px] top-2 right-10 sm:top-20 sm:right-20 sm:w-[200px]' />
          <img src={bintang} data-aos="fade-up" data-aos-delay="300" className='absolute z-10 -bottom-[470px] sm:-bottom-[250px] -left-[200px]' />

          <div className='relative flex items-center justify-center'>
            <div data-aos="zoom-in" data-aos-delay="300" className='relative w-[90%] sm:w-[80%] mx-auto'>
              <img src={kuote} className='relative' />
              <p className='absolute top-[130px] sm:top-[200px] font-playwrite text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eaque?</p>
            </div>
          </div>

          <div className='relative'
            style={{
              backgroundImage: `url(${jaring})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left center',
            }}
          >

            <div className='relative sm:-left-20 bg-orange-200'>
              <div data-aos="fade-up" data-aos-delay="200">
                <img src={bingkai1} alt="" className='w-[200px] sm:w-[300px] absolute top-10 left-2 md:left-[140px] md:top-20' />
                <div className='w-[154px] h-[202px] sm:w-[232px] sm:h-[305px] rotate-[6deg] bg-orange-300 absolute left-7 top-[58px] sm:left-[170px] sm:top-[105px] z-10'>
                  <img src={fotoHero} alt="" className='w-full h-full object-cover' />
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <img src={bingkai1} alt="" className='w-[200px] sm:w-[300px] absolute left-44 top-32 md:left-[420px] md:top-52' />
                <div className='w-[154px] h-[202px] sm:w-[232px] sm:h-[305px] rotate-[6deg] bg-orange-300 absolute left-[197px] top-[146px] sm:left-[450px] sm:top-[235px] z-10'>
                  <img src={section1} alt="" className='w-full h-full object-cover' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${sectionvideo})` }}>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-10" />
        <div className='w-[80%] h-[60%] sm:w-[60%] sm:h-[70%] mx-auto bg-transparent relative z-10 rounded-xl overflow-hidden border-4 border-white'>
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <img src={loveUngu} className='absolute right-5 top-5 w-[80px]' />
        </div>

        <img src={loveUngu} className='absolute right-10 top-10 w-[150px]' />
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Footer */}
      <footer className="bg-gradient-romantic py-12 px-4 font-playwrite">
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
        </div>
      </footer>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
