import { Typewriter } from 'react-simple-typewriter'
import ProfilImage from '../assets/images/profil.png'

// bg-gradient-to-t from-[#101733]/10 via-[#F8FAF7] to-[#F8FAF7]

const Home = () => {
  return (
    <section id='home' className={`flex flex-col h-[807px] mx-auto w-full justify-start gap-0 py-[3rem] sm:justify-end sm:gap-0 sm:py-0
    md:flex-row md:justify-between md:items-center md:py-0 md:h-[600px] lg:h-[850px] px-3 2xl:px-35 xl:px-30 lg:px-10 md:px-8 sm:px-5`}>

      {/* KIRI - TEKS */}
      <div className={`text-black w-full h-[200px] flex flex-col items-center md:items-start text-center justify-center sm:h-[500px] md:text-start md:w-fit`}>
        <h2 className='text-[#101733] dark:text-white font-medium text-[20px] leading-15 sm:text-[24px] sm:leading-25 md:text-[1.5rem] md:leading-15 lg:text-[34px] lg:leading-28 xl:text-[32px] 2xl:text-[38px] xl:leading-30 2xl:leading-36'>
          Welcome to My Portfolio
        </h2>

        <h3 className='text-[#101733] dark:text-[#00D8FF] font-black text-[28px] leading-5 sm:text-[40px] md:text-[2rem] sm:leading-8 lg:text-[54px] xl:text-[46px] 2xl:text-[62px]'>
          Hello, I am <br />
        </h3>

        <h4 className='text-[#101733] dark:text-[#00D8FF] font-black text-[26px] leading-8 sm:text-[40px] md:text-[2rem] sm:leading-15 md:leading-15 lg:text-[54px] lg:leading-22 xl:text-[46px] 2xl:text-[62px] xl:leading-20 2xl:leading-28'>
          <Typewriter
            words={['Muhammad Naufal Afif', 'a Web Developer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2500}
          />
        </h4>
        <a href="/cv-naufal-afif.pdf" download="cv-naufal-afif.pdf">
          <button className='text-[0.8rem] h-[1.8rem] w-[7.5rem] rounded-[0.5rem] md:text-[0.9rem] md:h-[1.8rem] md:w-[7.5rem] md:rounded-[0.5rem] lg:text-[1.1rem] lg:h-[3rem] border-2 lg:w-[10rem] lg:rounded-[1rem] cursor-pointer transition-transform duration-300 active:scale-105 dark:bg-gray-900 bg-[#101733] dark:border-[#00D8FF] dark:text-[#00D8FF] text-white dark:hover:bg-gray-700 hover:bg-blue-900 md:mt-0 mt-5'>
            Download CV
          </button>
        </a>
        
      </div>

      {/* KANAN - GAMBAR */}
      <div className='w:full h-auto flex justify-start items-center md:w-[240px] lg:w-[400px] xl:w-[450px]'>
        <img
          src={ProfilImage}
          alt="Profil"
          className='dark:shadow-[0px_0px_25px_rgba(0,188,255,0.8)] dark:bg-gray-900 w-auto h-[350px] content-between rounded-[200px] mx-auto sm:h-[430px] sm:w-auto md:w-auto md:h-fit'
        />
      </div>
    </section>
  )
}

export default Home

const colorPrimary = "[#101733]"
const colorSecondary = "[#F8FAF7]"
