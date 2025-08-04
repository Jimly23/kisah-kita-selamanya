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
import buket from '@/assets/image/buket.png'
import bling from '@/assets/image/bling.png'
import seruOren from '@/assets/image/seruOren.png'
import musik from '@/assets/image/musik.png'
import love2 from '@/assets/image/love2.png'
import seruBiru from '@/assets/image/seruBiru.png'
import seruBiruCoret from '@/assets/image/seruBiruCoret.png'
import loveUngu from '@/assets/image/loveUngu.png'
import lovePink from '@/assets/image/lovePink.png'

// video
import video from '@/assets/video/video.mp4'

// teks
import l from '@/assets/image/l.png'
import o from '@/assets/image/o.png'
import v from '@/assets/image/v.png'
import e from '@/assets/image/e.png'
import y from '@/assets/image/y.png'
import oKuning from '@/assets/image/oKuning.png'
import u from '@/assets/image/u.png'
import m from '@/assets/image/m.png'
import r from '@/assets/image/r.png'
import eKuning from '@/assets/image/eKuning.png'

// gif
import gif1 from '../assets/gif/gif1.gif';
import gif2 from '../assets/gif/gif2.gif';
import gif3 from '../assets/gif/gif3.gif';
import gif4 from '../assets/gif/gif4.gif';

const Index = () => {
  const relationshipStartDate = new Date('2023-02-14');

  // aos
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi (ms)
      once: false,    // hanya animasi saat pertama scroll (true/false)
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-vanilla">
        <img data-aos="fade-down" data-aos-delay="300" src={bling} alt="" className='hidden sm:block max-w-[150px] right-[10px] top-[10px] mx-auto absolute' />
        <p data-aos="fade-right" className='hidden sm:block text-sm  absolute left-10 top-10 font-medium md:text-lg w-[300px] font-playwrite border-b-2 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos cumque natus.</p>
        <p data-aos="fade-left" data-aos-delay="300" className='hidden sm:block text-sm  absolute right-10 bottom-30 text-end font-medium md:text-lg w-[300px] font-playwrite'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos cumque natus.</p>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-float mb-8 relative -ms-3">
            {/* style */}
            <img data-aos="zoom-in" data-aos-delay="100" src={seruOren} alt="" className='max-w-[120px] right-[110px] top-[10px] mx-auto rounded-full absolute' />
            <img data-aos="zoom-in" data-aos-delay="200" src={musik} alt="" className='max-w-[100px] right-[170px] bottom-[80px] mx-auto rounded-full absolute' />
            <img data-aos="zoom-in" data-aos-delay="300" src={love2} alt="" className='max-w-[150px] left-[140px] bottom-[280px] mx-auto rounded-full absolute' />
            {/* foto */}
            <img data-aos="zoom-in" data-aos-delay="500" src={fotoHero} alt="" className='max-w-[110px] left-[430px] bottom-[340px] mx-auto rounded-full absolute z-10' />
            <img data-aos="zoom-in" data-aos-delay="500" src={fotoHero} alt="" className='max-w-[110px] left-[475px] bottom-[285px] mx-auto rounded-full absolute z-10' />
            <img data-aos="zoom-in" data-aos-delay="500" src={fotoHero} alt="" className='max-w-[110px] left-[330px] bottom-[340px] mx-auto rounded-full absolute z-10' />
            <img data-aos="zoom-in" data-aos-delay="500" src={fotoHero} alt="" className='max-w-[100px] left-[300px] bottom-[250px] mx-auto rounded-full absolute z-10' />
            <img data-aos="zoom-in" data-aos-delay="500" src={fotoHero} alt="" className='max-w-[100px] left-[460px] bottom-[215px] mx-auto rounded-full absolute z-10' />
            <img data-aos="zoom-in" data-aos-delay="500" src={fotoHero} alt="" className='max-w-[100px] left-[372px] bottom-[180px] mx-auto rounded-full absolute z-10' />
            <img data-aos="zoom-in" data-aos-delay="500" src={fotoHero} alt="" className='max-w-[110px] left-[385px] bottom-[260px] mx-auto rounded-full absolute z-10' />
            {/* buket */}
            <img data-aos="zoom-in" data-aos-delay="550" src={buket} alt="cute couple bears" className="max-w-[900px]  mx-auto mb-6" />
          </div>

          <div className="relative -mt-20 mx-auto flex flex-col sm:flex-row gap-x-8 justify-center items-center mb-6">
            <div className='relative flex items-center justify-center'>
              <img data-aos="fade-up" src={seruBiru} alt="" className='w-[60px] sm:max-w-[80px] -left-10 -top-16 absolute' />
              <img data-aos="fade-up" src={l} alt="" className='w-[50px] sm:w-[80px] md:w-[100px]' />
              <img data-aos="fade-up" data-aos-delay="50" src={o} alt="" className='w-[50px] sm:w-[80px] md:w-[100px]' />
              <img data-aos="fade-up" data-aos-delay="100" src={v} alt="" className='w-[50px] sm:w-[80px] md:w-[100px]' />
              <img data-aos="fade-up" data-aos-delay="150" src={e} alt="" className='w-[50px] sm:w-[80px] md:w-[100px]' />
            </div>

            <div className='relative flex items-center justify-center'>
              <img data-aos="fade-up" data-aos-delay="200" src={y} alt="" className='w-[50px] sm:w-[80px] md:w-[100px]' />
              <img data-aos="fade-up" data-aos-delay="250" src={oKuning} alt="" className='w-[50px] sm:w-[80px] md:w-[100px]' />
              <img data-aos="fade-up" data-aos-delay="300" src={u} alt="" className='w-[50px] sm:w-[80px] md:w-[100px]' />
            </div>

            <div className='relative flex items-center justify-center'>
              <img data-aos="fade-up" src={seruBiruCoret} alt="" className='w-[60px] sm:max-w-[110px] -right-[60px] -top-[40px] sm:-top-[80px] absolute' />
              <img data-aos="fade-up" data-aos-delay="350" src={m} alt="" className='w-[50px] sm:w-[80px] md:w-[100px]' />
              <img data-aos="fade-up" data-aos-delay="400" src={o} alt="" className='w-[50px] sm:w-[80px] md:w-[100px]' />
              <img data-aos="fade-up" data-aos-delay="450" src={r} alt="" className='w-[50px] sm:w-[80px] md:w-[100px]' />
              <img data-aos="fade-up" data-aos-delay="500" src={eKuning} alt="" className='w-[50px] sm:w-[80px] md:w-[100px]' />
            </div>
          </div>

        </div>
      </section>

      {/*  */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${bgSection2})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 min-h-screen">
          <img src={pesawat} data-aos="fade-up" data-aos-delay="100" className='absolute z-10 w-[200px] top-2 right-10 sm:top-20 sm:right-20 sm:w-[300px]' />
          <img src={bintang} data-aos="fade-up" data-aos-delay="300" className='absolute z-10 -bottom-[270px] sm:-bottom-[200px] -left-[200px]' />
          <div className='col-span-2 relative'
            style={{
              backgroundImage: `url(${jaring})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left center',
            }}
          >

            <div className='relative'>
              <div data-aos="fade-up" data-aos-delay="200">
                <img src={bingkai1} alt="" className='w-[200px] sm:w-[300px] absolute top-10 left-2 md:left-[140px] md:top-20' />
                <div className='w-[154px] h-[202px] sm:w-[232px] sm:h-[305px] rotate-[6deg] bg-orange-300 absolute left-7 top-[58px] sm:left-[170px] sm:top-[105px] z-10'>
                  <img src={fotoHero} alt="" className='w-full h-full object-cover' />
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <img src={bingkai1} alt="" className='w-[200px] sm:w-[300px] absolute left-44 top-32 md:left-[420px] md:top-52' />
                <div className='w-[154px] h-[202px] sm:w-[232px] sm:h-[305px] rotate-[6deg] bg-orange-300 absolute left-[197px] top-[146px] sm:left-[450px] sm:top-[235px] z-10'>
                  <img src={fotoHero} alt="" className='w-full h-full object-cover' />
                </div>
              </div>
            </div>


          </div>

          <div className='relative'>
            <p className='absolute font-playwrite text-center md:text-lg font-medium max-w-[400px] mx-auto px-10 mt-20 sm:mt-64 sm:px-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus alias enim culpa debitis totam laborum aliquam quam sapiente, non, hic autem dolorem repellat voluptatem dicta nesciunt dolore porro tempore minima!💕❤</p>
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-vanilla overflow-hidden py-[150px]">
        <img src={pesawat} data-aos="fade-up" data-aos-delay="200" className='absolute right-10 top-10 sm:right-40 sm:top-10 w-[150px] sm:w-[200px]' />
        <img src={loveUngu} data-aos="fade-up" data-aos-delay="400" className='absolute left-10 top-10 sm:left-40 sm:top-10 w-[100px] sm:w-[150px]' />
        <img src={bintang} data-aos="fade-up" data-aos-delay="200" className='absolute -right-20 -bottom-10 sm:-right-20 sm:-bottom-10 w-[200px] sm:w-[300px]' />
        <img src={gif2} data-aos="fade-up" data-aos-delay="400" className='absolute left-10 bottom-10 sm:left-40 sm:bottom-10 w-[150px] sm:w-[200px]' />

        <p data-aos="fade-up" data-aos-delay="600" className='absolute right-5 bottom-40 sm:text-lg sm:right-40 sm:bottom-80 w-[100px] sm:w-[250px] text-end font-playwrite'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, ab.</p>
        <div>
          <div className='flex items-center justify-center gap-x-5 mb-5'>
            <div data-aos="fade-up" data-aos-delay="300" className='relative'>
              <div className='absolute z-10 top-1 left-3 w-[83px] h-[80px] sm:w-[133px] sm:h-[125px] bg-orange-200 overflow-hidden rotate-[10deg]'><img src={fotoHero} className='w-full h-full object-cover' /></div>
              <img src={bingkai2} className='w-[100px] sm:w-[150px] rotate-[10deg]' />
              <img src={lovePink} className='absolute left-2 -bottom-10 w-[40px] sm:w-[40px]' />
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className='relative'>
              <div className='absolute z-10 top-1 left-2 w-[83px] h-[80px] sm:w-[133px] sm:h-[125px] bg-orange-200 overflow-hidden'><img src={fotoHero} className='w-full h-full object-cover' /></div>
              <img src={bingkai2} className='w-[100px] sm:w-[150px]' />
              <img src={lovePink} className='absolute left-2 w-[30px] sm:w-[30px]' />
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className='relative'>
              <div className='absolute z-10 top-1 right-2 w-[83px] h-[80px] sm:w-[133px] sm:h-[125px] bg-orange-200 overflow-hidden rotate-[-10deg]'><img src={fotoHero} className='w-full h-full object-cover' /></div>
              <img src={bingkai2} className='w-[100px] sm:w-[150px] rotate-[-10deg]' />
            </div>
          </div>

          <div className='flex items-center justify-center gap-x-5 mb-5'>
            <div data-aos="fade-up" data-aos-delay="600" className='relative'>
              <div className='absolute z-10 top-1 left-2 w-[83px] h-[80px] sm:w-[133px] sm:h-[125px] bg-orange-200 overflow-hidden rotate-[-10deg]'><img src={fotoHero} className='w-full h-full object-cover' /></div>
              <img src={bingkai2} className='w-[100px] sm:w-[150px] rotate-[-10deg]' />
            </div>
            <div data-aos="fade-up" data-aos-delay="700" className='relative'>
              <div className='absolute z-10 top-1 right-1.5 w-[83px] h-[80px] sm:w-[133px] sm:h-[125px] bg-orange-200 overflow-hidden rotate-[10deg]'><img src={fotoHero} className='w-full h-full object-cover' /></div>
              <img src={bingkai2} className='w-[100px] sm:w-[150px] rotate-[10deg]' />
              <img src={lovePink} className='absolute right-2 -bottom-10 w-[30px] sm:w-[40px]' />
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div data-aos="fade-up" data-aos-delay="500" className='relative'>
              <div className='absolute z-10 top-1 left-2 w-[83px] h-[80px] sm:w-[133px] sm:h-[125px] bg-orange-200 overflow-hidden'><img src={fotoHero} className='w-full h-full object-cover' /></div>
              <img src={bingkai2} className='w-[100px] sm:w-[150px]' />
            </div>
          </div>
        </div>

      </section>

      <section className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${fotoHero})` }}>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-10" />
        <div className='w-[80%] h-[60%] sm:w-[60%] sm:h-[70%] rotate-[-10deg] mx-auto bg-transparent relative z-10 rounded-xl overflow-hidden border-4 border-white'>
          <img data-aos="zoom-in" data-aos-delay="800" src={fotoHero} className='w-full h-full object-cover' />
          <img data-aos="zoom-in" data-aos-delay="800" src={loveUngu} className='absolute right-5 top-5 w-[80px]' />
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
                  <img src={fotoHero} alt="" className='w-full h-full object-cover' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${fotoHero})` }}>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-10" />
        <div data-aos="zoom-in" data-aos-delay="500" className='w-[80%] h-[60%] sm:w-[60%] sm:h-[70%] mx-auto bg-transparent relative z-10 rounded-xl overflow-hidden border-4 border-white'>
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

      {/* Relationship Timer */}
      <section className="py-16 relative bg-white">
        <RelationshipTimer startDate={relationshipStartDate} />
        <div className="absolute top-10 left-10 animate-float" style={{ animationDelay: '1s' }}>
          <img src={gif1}
            className="w-24 h-24" />
        </div>
        <div className="absolute right-10 animate-float" style={{ animationDelay: '2s' }}>
          <img src={gif2}
            className="w-24 h-24" />
        </div>
        <div className="absolute top-10 right-10 animate-float" style={{ animationDelay: '3s' }}>
          <img src={gif3}
            className="w-24" />
        </div>
        <div className="absolute left-10 bottom-10 animate-float" style={{ animationDelay: '4s' }}>
          <img src={gif4}
            className="w-24 h-24" />
        </div>
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
