import { useRef, useState, useEffect } from 'react'

import sertifDataScientist from '../assets/images/Sertifikat Data Scientist.jpg'
import sertifOnlineShop from '../assets/images/Sertifikat Online Shop_2.jpg'
import sertifDiklat from '../assets/images/Sertifikat_Diklat.jpg'
import sertifProposal from '../assets/images/Sertifikat_Pelatihan_Proposal.jpg'
import sertifUKK from '../assets/images/Sertifikat_UKK.jpg'
import sertifPython from '../assets/images/Sertifikat Python.jpg'
import sertifVisualData from '../assets/images/Sertifikat Visualisasi Data.jpg'

const Certificate = () => {

  const scrollRef = useRef(null)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const threshold = 10
      const isBottom = el.scrollHeight - el.scrollTop - el.clientHeight <= threshold
      const isTop = el.scrollTop <= threshold

      // Update state hanya saat berubah
      if (isBottom && !isAtBottom) {
        setIsAtBottom(true)
      } else if (isTop && isAtBottom) {
        setIsAtBottom(false)
      }
    }

    el.addEventListener('scroll', handleScroll)

    return () => {
      el.removeEventListener('scroll', handleScroll)
    }
  }, [isAtBottom])

  const bgClass = `w-[213px]	h-[160px] sm:w-[400px]	sm:h-[300px] md:h-[360px] md:w-[480px] border-0 border-white bg-center lg:h-[480px] lg:w-[640px] bg-cover bg-no-repeat relative rounded-[1.5rem] sm:rounded-[2rem] flex justify-center items-center`;
  const shadowClass = 'w-[213px]	h-[160px] sm:w-[400px]	sm:h-[300px] md:h-[360px] md:w-[480px] lg:h-[480px] lg:w-[640px] rounded-[2rem] bg-black/5';
  const buttonClass = 'cursor-pointer absolute top-33 right-3 sm:top-63 sm:right-5 md:top-75 md:right-5 lg:top-100 lg:right-10 bg-blue-950 text-white text-sm px-3 py-1 lg:rounded-[1rem] hover:bg-blue-600 md:rounded-[0.8rem] rounded-[0.4rem] sm:rounded-[0.6rem] w-[48px]	h-[20px] sm:w-[84px]	sm:h-[35px] md:h-[40px] md:w-[96px] lg:h-[50px] lg:w-[120px] text-[0.6rem] sm:text-[1rem] dark:hover:bg-[#00BCFF] dark:hover:text-[#030712] dark:bg-[#030712]';

  const arrowClass = 'animate-blink text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] absolute z-10 mt-55 sm:mt-78 md:mt-82 lg:mt-95 text-[#101733]/50';
  

  const colorPrimary = "#101733"
  return (
    <section id="certificate" className=" relative px-3 2xl:px-35 xl:px-30 lg:px-10 md:px-8 sm:px-5 h-[400px] sm:h-[807px] w-full">
        <div className=" w-full h-full flex flex-col justify-start items-center gap-5">
        
            <h2 className={` text-4xl mt-30 text-[28px] sm:text-[38px] md:text-[48px] lg:text-[62px] text-[${colorPrimary}] font-black text-center dark:text-white`}>
                Certificate
            </h2>

            {isAtBottom ? (
              <i className={`ri-arrow-up-double-line ${arrowClass}`} />
            ) : (
              <i className={`ri-arrow-down-double-line ${arrowClass}`} />
            )}


            <div ref={scrollRef} className="w-[300px]	h-[183px] sm:w-[600px]	sm:h-[367px] md:h-[428px] md:w-[700px] lg:h-[550px] lg:w-[900px] custom-scroll overflow-y-scroll py-2 sm:py-8 space-y-10 grid place-items-center border-gray-500 border-t-5 border-b-5 border-l-5 rounded-[2.5rem] sm:rounded-[5rem] bg-gray-500 dark:border-[#00BCFF]">

              
              
              <div className={`${bgClass}`} 
              style={{backgroundImage: ` url(${sertifUKK})`} }>
                <div className={`${shadowClass}`}></div>
                <a href="/portfolionaufal/Sertifikat Kompetensi Keahlian.pdf" target="_blank" rel="noopener noreferrer">
                  <button className={`${buttonClass}`}>
                    Lihat
                  </button>
                </a>
              </div>

              <div className={`${bgClass}`} 
              style={{backgroundImage: ` url(${sertifDataScientist})`}}>
                <div className={`${shadowClass}`}></div>
                <a href="/portfolionaufal/Sertifikat Data Scientist.pdf" target="_blank" rel="noopener noreferrer">
                  <button className={`${buttonClass}`}>
                    Lihat
                  </button>
                </a>
              </div>

              <div className={`${bgClass}`} 
              style={{backgroundImage: ` url(${sertifOnlineShop})`}}>
                <div className={`${shadowClass}`}></div>
                <a href="/portfolionaufal/Sertifikat Bisnis Online Shop.pdf" target="_blank" rel="noopener noreferrer">
                  <button className={`${buttonClass}`}>
                    Lihat
                  </button>
                </a>
              </div>

              <div className={`${bgClass}`} 
              style={{backgroundImage: ` url(${sertifDiklat})`, backgroundPosition: 'center 30%'}}>
                <div className={`${shadowClass}`}></div>
                <a href="/portfolionaufal/Sertifikat BINTALFISDIS.pdf" target="_blank" rel="noopener noreferrer">
                  <button className={`${buttonClass}`}>
                    Lihat
                  </button>
                </a>
              </div>

              <div className={`${bgClass}`} 
              style={{backgroundImage: ` url(${sertifPython})`} }>
                <div className={`${shadowClass}`}></div>
                <a href="/portfolionaufal/Sertifikat Python.pdf" target="_blank" rel="noopener noreferrer">
                  <button className={`${buttonClass}`}>
                    Lihat
                  </button>
                </a>
              </div>

              <div className={`${bgClass}`} 
              style={{backgroundImage: ` url(${sertifVisualData})`} }>
                <div className={`${shadowClass}`}></div>
                <a href="/portfolionaufal/Sertifikat Visualisasi Data.pdf" target="_blank" rel="noopener noreferrer">
                  <button className={`${buttonClass}`}>
                    Lihat
                  </button>
                </a>
              </div>

              <div className={`${bgClass}`} 
              style={{backgroundImage: ` url(${sertifProposal})`}}>
                <div className={`${shadowClass}`}></div>
                <a href="/portfolionaufal/Sertifikat Pelatihan Proposal.pdf" target="_blank" rel="noopener noreferrer">
                  <button className={`${buttonClass}`}>
                    Lihat
                  </button>
                </a>
              </div>

              
            </div>           
          
        </div>

    </section>
  )
}

export default Certificate

