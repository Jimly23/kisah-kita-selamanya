import bling from '../assets/image/bling.png'
import seruOren from '../assets/image/seruOren.png'
import musik from '../assets/image/musik.png'
import love2 from '../assets/image/love2.png'
import fotoHero from '../assets/foto-hero.jpg'
import buket from '../assets/image/buket.png'
import seruBiru from '../assets/image/seruBiru.png'
import l from '../assets/image/l.png'
import o from '../assets/image/o.png'
import v from '../assets/image/v.png'
import e from '../assets/image/e.png'
import y from '../assets/image/y.png'
import oKuning from '../assets/image/oKuning.png'
import u from '../assets/image/u.png'
import m from '../assets/image/m.png'
import r from '../assets/image/r.png'
import eKuning from '../assets/image/eKuning.png'
import seruBiruCoret from '../assets/image/seruBiruCoret.png'

import buket1 from '../assets/image/buket/buket1.jpg'
import buket2 from '../assets/image/buket/buket2.jpg'
import buket3 from '../assets/image/buket/buket3.jpg'
import buket4 from '../assets/image/buket/buket4.jpg'
import buket5 from '../assets/image/buket/buket5.jpg'
import buket6 from '../assets/image/buket/buket6.jpg'
import buket7 from '../assets/image/buket/buket7.jpg'

const Buket = () => {
  return (
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
          <img data-aos="zoom-in" data-aos-delay="500" src={buket1} alt="" className='max-w-[110px] left-[430px] bottom-[340px] mx-auto rounded-full absolute z-10' />
          <img data-aos="zoom-in" data-aos-delay="500" src={buket2} alt="" className='max-w-[110px] left-[475px] bottom-[285px] mx-auto rounded-full absolute z-10' />
          <img data-aos="zoom-in" data-aos-delay="500" src={buket3} alt="" className='max-w-[110px] left-[330px] bottom-[340px] mx-auto rounded-full absolute z-10' />
          <img data-aos="zoom-in" data-aos-delay="500" src={buket4} alt="" className='max-w-[100px] left-[300px] bottom-[250px] mx-auto rounded-full absolute z-10' />
          <img data-aos="zoom-in" data-aos-delay="500" src={buket5} alt="" className='max-w-[100px] left-[460px] bottom-[215px] mx-auto rounded-full absolute z-10' />
          <img data-aos="zoom-in" data-aos-delay="500" src={buket6} alt="" className='max-w-[100px] left-[372px] bottom-[180px] mx-auto rounded-full absolute z-10' />
          <img data-aos="zoom-in" data-aos-delay="500" src={buket7} alt="" className='max-w-[110px] left-[385px] bottom-[260px] mx-auto rounded-full absolute z-10' />
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
  )
}

export default Buket