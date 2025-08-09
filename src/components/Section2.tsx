import bgSection2 from '../assets/image/bgSection2.png'
import jaring from '../assets/image/jaring.png'
import bingkai1 from '../assets/image/bingkai1.png'
import fotoHero from '../assets/foto-hero.jpg'
import bintang from '../assets/image/bintang.png'
import pesawat from '../assets/image/pesawat.png'
import sec1 from '../assets/image/sec2/sec1.jpg'
import sec2 from '../assets/image/sec2/sec2.jpg'

const Section2 = () => {
  return (
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
                <img src={sec2} alt="" className='w-full h-full object-cover' />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <img src={bingkai1} alt="" className='w-[200px] sm:w-[300px] absolute left-44 top-32 md:left-[420px] md:top-52' />
              <div className='w-[154px] h-[202px] sm:w-[232px] sm:h-[305px] rotate-[6deg] bg-orange-300 absolute left-[197px] top-[146px] sm:left-[450px] sm:top-[235px] z-10'>
                <img src={sec1} alt="" className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
        </div>

        <div className='relative'>
          <p className='absolute font-playwrite text-center md:text-lg font-medium max-w-[400px] mx-auto px-10 mt-20 sm:mt-64 sm:px-0'>Jadilah perempuan terakhirku, jadilah perempuan yang rasa sayangnya tidak pernah berubah walaupun berbagai ujian datang dalam hubungan kita. aku percaya kamu perempuan yang baik, semoga kita bisa bertahan selamanya💕❤</p>
        </div>
      </div>
    </section>
  )
}

export default Section2