import { useState, useEffect } from 'react';
import kebabGoceng from '../assets/images/KebabGoceng.JPG'
import recreateNetflix from '../assets/images/Netflix.JPG'
import manajemenTani from '../assets/images/Manajemen-Hasil-Tani.JPG'
import portfolioNaufal from '../assets/images/PortfolioNaufal.JPG'



const Portfolio = () => {

  const projectClass = "group relative flex-shrink-0 xl:w-[800px] xl:h-[450px] lg:translate-y-[-50px] flex flex-col justify-end items-start p-3 md:p-5 lg:p-7 gap-0 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[3rem] bg-contain bg-top bg-no-repeat border-2 border-slate-600 dark:border-[#00BCFF] transition-transform duration-300 hover:scale-103 cursor-pointer 2xl:mx-[100px] xl:mx-[70px] lg:w-[700px] aspect-[16/9] lg:mx-[72px] md:w-[500px] aspect-[16/9] md:mx-[62px] sm:w-[400px] aspect-[16/9] sm:mx-[70px] w-[250px] aspect-[16/9] mx-[13px]";

  const buttonClass = "w-[30px] h-[100px] sm:h-[100px] sm:w-[30px] md:w-[40px] md:h-[150px] lg:w-[40px] lg:h-[200px] xl:w-[40px] xl:h-[200px] flex items-center justify-center transition-all duration-500";

  const buttonIconClass = "text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem] text-white dark:text-[#030712]";

  const languageIconClass = "text-[0.5rem] sm:text-[0.7rem] md:text-[1rem] lg:text-[1.5rem] text-white";

  // Memberi indentitas ke div Project
  const slideIds = ['project-1', 'project-2', 'project-3', 'project-4'];

  const [activeId, setActiveId] = useState(slideIds[0]);

  // Tombol Kiri dan Kanan
  const handleNext = () => {
    const currentIndex = slideIds.indexOf(activeId);
    const nextIndex = currentIndex + 1;

    if (nextIndex < slideIds.length) {
      setActiveId(slideIds[nextIndex]);
      updateButtonVisibility(nextIndex);
    }
  };

  const handlePrev = () => {
    const currentIndex = slideIds.indexOf(activeId);
    const prevIndex = currentIndex - 1;

    if (prevIndex >= 0) {
      setActiveId(slideIds[prevIndex]);
      updateButtonVisibility(prevIndex);
    }
  };


  // Hilang dan Muncul Tombol
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const updateButtonVisibility = (newIndex) => {
    setShowPrev(newIndex > 0);
    setShowNext(newIndex < slideIds.length - 1);


  };

  // Breakpoint Ukuran Layar
  const [breakpoint, setBreakpoint] = useState("default");

  useEffect(() => {
    const updateBreakpoint = () => {
      if (window.innerWidth < 640) {
        setBreakpoint("df");
      } else if (window.innerWidth < 768) {
        setBreakpoint("sm");
      } else if (window.innerWidth < 1024) {
        setBreakpoint("md");
      } else if (window.innerWidth < 1280){
        setBreakpoint("lg");
      }else if (window.innerWidth < 1536){
        setBreakpoint("xl");
      } else {
        setBreakpoint("2xl");
      }
    };

    updateBreakpoint(); // cek saat pertama kali render
    window.addEventListener("resize", updateBreakpoint);

    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  const getTranslateX = () => {
    const index = slideIds.indexOf(activeId);

    if (breakpoint === "df") return `${index * 24.8}%`;  // sm: 1 card per view
    if (breakpoint === "sm") return `${index * 25.0}%`;  // sm: 1 card per view
    if (breakpoint === "md") return `${index * 25.2}%`;   // md: 2 cards per view
    if (breakpoint === "lg") return `${index * 25.1}%`; // lg: 3 cards per view
    if (breakpoint === "xl") return `${index * 25.1}%`; // lg: 3 cards per view
    if (breakpoint === "2xl") return `${index * 25.0}%`; // lg: 3 cards per view
    return `${index * 25}%`; // xl: 4 cards per view
  };

  


  


  return (
    <section id='portfolio' className="pt-30 px-3 2xl:px-35 xl:px-30 lg:px-10 md:px-8 sm:px-5 h-[400px] sm:h-[550px] md:h-[550px] lg:h-[807px] w-full 
    flex flex-col justify-center sm:justify-between mx-auto">
        <div className="w-full h-auto flex flex-grow items-start translate-y-0 lg:items-end justify-center">
            <h2 className={`text-[28px] sm:text-[38px] md:text-[48px] lg:text-[62px] text-[${colorPrimary}] dark:text-white font-black text-center`}>
               Portfolio 
            </h2>
        </div>
        <div className={` w-full h-[200px] sm:h-[300px] lg:h-[650px] flex flex-row mx-auto justify-between items-center 2xl:px-10 xl:px-0 lg:px-0 md:px-0 translate-y-0`}>

            {/* Tombol Kiri */}
            <div className={`${buttonClass}`}>
              <button
                onClick={handlePrev}
                className={`w-full h-full bg-[${colorPrimary}] dark:bg-white/90 dark:hover:bg-[#00BCFF] lg:translate-y-[-50px] rounded-[3rem] hover:bg-blue-900 cursor-pointer
                transition-all duration-500 ease-in-out transform
                ${showPrev ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                <i className={`ri-arrow-left-s-line ${buttonIconClass}`}></i>
              </button>
            </div>
            
            


            <div className=" relative overflow-hidden h-full max-h-[650px] w-full max-w-[1000px] flex items-center justify-between">

              <div className="w-fit h-fit  justify-between flex flex-row transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${getTranslateX()})` }}>

                {/* Project 1 */}
                <div id='project-1' className={`${projectClass} bg-[${kebabGoceng}]`}
                style={{backgroundImage: `linear-gradient(to top, #030712 10%, #030712 30%, rgba(0, 0, 0, 0) 100%), url(${portfolioNaufal})`}}>
                  <h2 className={`opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out lg:text-[32px] text-white font-black text-center`} >Portfolio Website</h2>
                
                  <p className={`opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out text-[0.3rem] md:text-[0.5rem] lg:text-[12px] text-white font-regular text-start`}>
                    Ini adalah website portofolio pribadi saya yang dibuat menggunakan React.js dan Tailwind CSS. Situs ini bersifat interaktif dan sepenuhnya responsif di berbagai perangkat, termasuk smartphone Android dan iOS, tablet, serta desktop. 
                  </p>
                
                  <div className='w-full h-fit flex justify-between items-center mt-1 lg:mt-3'>
                    <div className="opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out grid-cols-3 flex-row flex justify-end items-start gap-2 relative self-start">
                      <i className={`ri-html5-fill ${languageIconClass}`}></i>
                      <i className={`ri-tailwind-css-fill ${languageIconClass}`}></i>
                      <i className={`ri-reactjs-fill ${languageIconClass} `}></i>
                    </div>
                      <a href="https://nvlafif.github.io/portfolionaufal/" target="_blank" rel="noopener noreferrer" className='opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out'>
                        <button className={`  bg-[${colorSecondary}] rounded-[0.3rem] w-[40px] h-[14px] text-[0.3rem] font-normal sm:w-[60px] sm:h-[21px] sm:text-[0.4rem] md:w-[70px] md:h-[24px] md:text-[0.5rem] lg:rounded-[1rem] lg:w-[140px] lg:h-[49px] mt-0 lg:text-[1rem] text-[${colorPrimary}] hover:bg-blue-400 dark:hover:bg-[#00BCFF] cursor-pointer lg:font-semibold`}>
                          Visit Website
                        </button>
                      </a>
                  </div>
                </div>

                {/* Project 2 */}
                <div id='project-2' className={` ${projectClass} `}
                style={{backgroundImage: `linear-gradient(to top, #030712 10%, #030712 30%, rgba(0, 0, 0, 0) 100%), url(${manajemenTani})`}}>
                  <h2 className={`opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out lg:text-[32px] text-white font-black text-center`} >Manajemen Hasil Tani</h2>
                
                  <p className={`opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out text-[0.3rem] md:text-[0.5rem] lg:text-[12px] text-white font-regular text-start`}>
                    Aplikasi berbasis React untuk mencatat dan mengelola produk hasil pertanian, dibuat sebagai portofolio magang front-end developer dengan dukungan MockAPI.io sebagai simulasi backend REST API untuk pengujian dan pengembangan frontend.
                  </p>
                
                  <div className='w-full h-fit flex justify-between items-center mt-1 lg:mt-3'>
                    <div className="opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out grid-cols-3 flex-row flex justify-end items-start gap-2 relative self-start">
                      <i className={`ri-html5-fill ${languageIconClass}`}></i>
                      <i className={`ri-tailwind-css-fill ${languageIconClass}`}></i>
                      <i className={`ri-reactjs-fill ${languageIconClass} `}></i>
                    </div>
                    <a href="https://nvl-manajemen-hasil-tani.vercel.app/" target="_blank" rel="noopener noreferrer" className='opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out'>
                      <button className={`  bg-[${colorSecondary}] rounded-[0.3rem] w-[40px] h-[14px] text-[0.3rem] font-normal sm:w-[60px] sm:h-[21px] sm:text-[0.4rem] md:w-[70px] md:h-[24px] md:text-[0.5rem] lg:rounded-[1rem] lg:w-[140px] lg:h-[49px] mt-0 lg:text-[1rem] text-[${colorPrimary}] hover:bg-blue-400 dark:hover:bg-[#00BCFF] cursor-pointer lg:font-semibold`}>
                        Visit Website
                      </button>
                    </a>
                  </div>
                </div>

                {/* Project 3 */}
               <div id='project-3' className={` ${projectClass} `}
                style={{backgroundImage: `linear-gradient(to top, #030712 10%, #030712 30%, rgba(0, 0, 0, 0) 100%), url(${recreateNetflix})`}}>
                  <h2 className={`opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out lg:text-[32px] text-white font-black text-center`} >Recreate Netflix</h2>
                
                  <p className={`opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out text-[0.3rem] md:text-[0.5rem] lg:text-[12px] text-white font-regular text-start`}>
                    Proyek front-end ini dibuat dari nol dengan HTML, CSS, dan JavaScript untuk keperluan belajar, eksplorasi UI/UX, dan portofolio pribadi. Bukan untuk komersial, meniru merek Netflix, atau aktivitas phishing.
                  </p>
                
                  <div className='w-full h-fit flex justify-between items-center mt-1 lg:mt-3'>
                    <div className="opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out grid-cols-3 flex-row flex justify-end items-start gap-2 relative self-start">
                      <i className={`ri-html5-fill ${languageIconClass}`}></i>
                      <i className={`ri-css3-fill ${languageIconClass}`}></i>
                      <i className={`ri-javascript-fill ${languageIconClass} `}></i>
                    </div>
                      <a href="https://nvlafif.github.io/recreate-netflix/" target="_blank" rel="noopener noreferrer" className='opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out'>
                        <button className={`bg-[${colorSecondary}] rounded-[0.3rem] w-[40px] h-[14px] text-[0.3rem] font-normal sm:w-[60px] sm:h-[21px] sm:text-[0.4rem] md:w-[70px] md:h-[24px] md:text-[0.5rem] lg:rounded-[1rem] lg:w-[140px] lg:h-[49px] mt-0 lg:text-[1rem] text-[${colorPrimary}] hover:bg-blue-400 dark:hover:bg-[#00BCFF] cursor-pointer lg:font-semibold`}>
                          Visit Website
                        </button>
                      </a>
                  </div>
                </div>

                {/* Project 4 */}
                <div id='project-4' className={` ${projectClass} `}
                style={{backgroundImage: `linear-gradient(to top, #030712 10%, #030712 30%, rgba(0, 0, 0, 0) 100%), url(${kebabGoceng})`}}>
                  <h2 className={`opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out lg:text-[32px] text-white font-black text-center`} >Kebab Goceng</h2>
                
                  <p className={`opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out text-[0.3rem] md:text-[0.5rem] lg:text-[12px] text-white font-regular text-start`}>
                    Website ini dibuat sebagai tugas Mata Kuliah Manajemen Proyek TI, di mana mahasiswa diminta membantu UMKM sekitar kampus dengan menerapkan ilmu kuliah. Saya memilih platform WordPress untuk mempromosikan produk dan menyediakan layanan jual beli online.
                  </p>
                
                  <div className='w-full h-fit flex justify-between items-center mt-1 lg:mt-3'>
                    <div className="opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out grid-cols-3 flex-row flex justify-end items-start gap-2 relative self-start">
                      <i className={`ri-wordpress-fill ${languageIconClass}`}></i>
                    </div>
                    <a href="https://kebabgoceng.lovestoblog.com/" target="_blank" rel="noopener noreferrer" className='opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 ease-in-out'>
                      <button className={`  bg-[${colorSecondary}] rounded-[0.3rem] w-[40px] h-[14px] text-[0.3rem] font-normal sm:w-[60px] sm:h-[21px] sm:text-[0.4rem] md:w-[70px] md:h-[24px] md:text-[0.5rem] lg:rounded-[1rem] lg:w-[140px] lg:h-[49px] mt-0 lg:text-[1rem] text-[${colorPrimary}] hover:bg-blue-400 dark:hover:bg-[#00BCFF] cursor-pointer lg:font-semibold`}>
                        Visit Website
                      </button>
                    </a>
                  </div>
                </div>

                

              </div>
              
              

            </div>

            {/* Tombol Kanan */}
            <div className={`${buttonClass}`}>
              <button
                onClick={handleNext}
                className={`w-full h-full bg-[${colorPrimary}] dark:bg-white/90 dark:hover:bg-[#00BCFF] lg:translate-y-[-50px] rounded-[3rem] hover:bg-blue-900 cursor-pointer
                transition-all duration-500 ease-in-out transform
                ${showNext ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                <i className={`ri-arrow-right-s-line ${buttonIconClass}`}></i>
              </button>
            </div>

            
            
            
            
        </div>
    </section>
  )
}

export default Portfolio

const colorPrimary = "#101733"
const colorSecondary = "#F8FAF7"