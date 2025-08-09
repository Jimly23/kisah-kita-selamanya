import pesawat from '../assets/image/pesawat.png'
import loveUngu from '../assets/image/loveUngu.png'
import bintang from '../assets/image/bintang.png'
import gif2 from '../assets/gif/gif2.gif'

import bingkai2 from '../assets/image/bingkai2.png'
import lovePink from '../assets/image/lovePink.png'
import fotoHero from '../assets/foto-hero.jpg'

import fotolove1 from '../assets/image/fotoLove/fotolove1.jpg'
import fotolove2 from '../assets/image/fotoLove/fotolove2.jpg'
import fotolove3 from '../assets/image/fotoLove/fotolove3.jpg'
import fotolove4 from '../assets/image/fotoLove/fotolove4.jpg'
import fotolove5 from '../assets/image/fotoLove/fotolove5.jpg'
import fotolove6 from '../assets/image/fotoLove/fotolove6.jpg'


const GaleryLove = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-vanilla overflow-hidden py-[150px]">
      <img src={pesawat} data-aos="fade-up" data-aos-delay="200" className='absolute right-10 top-10 sm:right-40 sm:top-10 w-[150px] sm:w-[200px]' />
      <img src={loveUngu} data-aos="fade-up" data-aos-delay="400" className='absolute left-10 top-10 sm:left-40 sm:top-10 w-[100px] sm:w-[150px]' />
      <img src={bintang} data-aos="fade-up" data-aos-delay="200" className='absolute -right-20 -bottom-10 sm:-right-20 sm:-bottom-10 w-[200px] sm:w-[300px]' />
      <img src={gif2} data-aos="fade-up" data-aos-delay="400" className='absolute left-10 bottom-10 sm:left-40 sm:bottom-10 w-[150px] sm:w-[200px]' />

      <p data-aos="fade-up" data-aos-delay="600" className='absolute right-5 bottom-40 sm:text-lg sm:right-40 sm:bottom-80 w-[100px] sm:w-[250px] text-end font-playwrite'>Terimakasih telah memberiku cinta yang belum pernah aku temukan sebelumnya.</p>
      <div>
        <div className='flex items-center justify-center gap-x-5 mb-5'>
          <div data-aos="fade-up" data-aos-delay="300" className='relative'>
            <div className='absolute z-10 top-1 left-3 w-[83px] h-[80px] sm:w-[133px] sm:h-[125px] bg-orange-200 overflow-hidden rotate-[10deg]'><img src={fotolove1} className='w-full h-full object-cover' /></div>
            <img src={bingkai2} className='w-[100px] sm:w-[150px] rotate-[10deg]' />
            <img src={lovePink} className='absolute left-2 -bottom-10 w-[40px] sm:w-[40px]' />
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className='relative'>
            <div className='absolute z-10 top-1 left-2 w-[83px] h-[80px] sm:w-[133px] sm:h-[125px] bg-orange-200 overflow-hidden'><img src={fotolove2} className='w-full h-full object-cover' /></div>
            <img src={bingkai2} className='w-[100px] sm:w-[150px]' />
            <img src={lovePink} className='absolute left-2 w-[30px] sm:w-[30px]' />
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className='relative'>
            <div className='absolute z-10 top-1 right-2 w-[83px] h-[80px] sm:w-[133px] sm:h-[125px] bg-orange-200 overflow-hidden rotate-[-10deg]'><img src={fotolove3} className='w-full h-full object-cover' /></div>
            <img src={bingkai2} className='w-[100px] sm:w-[150px] rotate-[-10deg]' />
          </div>
        </div>

        <div className='flex items-center justify-center gap-x-5 mb-5'>
          <div data-aos="fade-up" data-aos-delay="600" className='relative'>
            <div className='absolute z-10 top-1 left-2 w-[83px] h-[80px] sm:w-[133px] sm:h-[125px] bg-orange-200 overflow-hidden rotate-[-10deg]'><img src={fotolove4} className='w-full h-full object-cover' /></div>
            <img src={bingkai2} className='w-[100px] sm:w-[150px] rotate-[-10deg]' />
          </div>
          <div data-aos="fade-up" data-aos-delay="700" className='relative'>
            <div className='absolute z-10 top-1 right-1.5 w-[83px] h-[80px] sm:w-[133px] sm:h-[125px] bg-orange-200 overflow-hidden rotate-[10deg]'><img src={fotolove5} className='w-full h-full object-cover' /></div>
            <img src={bingkai2} className='w-[100px] sm:w-[150px] rotate-[10deg]' />
            <img src={lovePink} className='absolute right-2 -bottom-10 w-[30px] sm:w-[40px]' />
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <div data-aos="fade-up" data-aos-delay="500" className='relative'>
            <div className='absolute z-10 top-1 left-2 w-[83px] h-[80px] sm:w-[133px] sm:h-[125px] bg-orange-200 overflow-hidden'><img src={fotolove6} className='w-full h-full object-cover' /></div>
            <img src={bingkai2} className='w-[100px] sm:w-[150px]' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default GaleryLove