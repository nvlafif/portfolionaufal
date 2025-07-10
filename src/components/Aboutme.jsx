import { useEffect, useRef, useState } from "react";
import aboutImage from '../assets/images/About.png';

const Aboutme = () => {

  const colorPrimary = "#101733";
  const colorSecondary = "[#F8FAF7]";
  
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const paragraphRef = useRef(null);

  

  const text = `Saya adalah Mahasiswa aktif semester 6 di Politeknik Pertanian Negeri Payakumbuh, yang menekuni program studi D4 Teknologi Rekayasa Komputer. Minat dan keinginan saya untuk berkarir di bidang Teknologi Informasi sangat tinggi, terutama dalam bidang Website Development. Minat karir ini juga selaras dengan program studi yang saya tekuni. \n\nVisi saya adalah menjadi seorang profesional yang unggul dan adaptif di bidang Teknologi Informasi. Dengan fokus pada keahlian khusus dalam Website Development, serta berkontribusi aktif dalam pengembangan solusi digital inovatif yang bermanfaat bagi orang banyak.`;

  const letters = text.split("");

  useEffect(() => {
    const handleScroll = () => {
      const paragraph = paragraphRef.current;
      if (!paragraph) return;

      const rect = paragraph.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top >= -100 && rect.bottom <= windowHeight + 200) {
        const visibleRatio = 1 - rect.top / windowHeight;
        const indexToShow = Math.min(
          letters.length - 1,
          Math.floor(visibleRatio * letters.length)
        );
        setHoveredIndex(indexToShow);
      } else if (rect.bottom < 0 || rect.top > windowHeight) {
        setHoveredIndex(-1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [letters.length]);


  // bg-gradient-to-t from-[#F8FAF7] via-[#F8FAF7] to-[#101733]/10

  return (
    <section id='aboutme' className={`py-17 px-3 2xl:px-35 xl:px-30 lg:px-10 md:px-8 sm:px-5 h-[550px] sm:h-[700px] md:h-[807px] w-full  flex flex-row justify-between`}>
      <div className="w-full h-full">
        <img
          src={aboutImage}
          alt={aboutImage}
          className={`w-auto h-[250px] sm:h-[400px] md:h-[500px] translate-y-[7rem] sm:translate-y-[6rem] md:translate-y-[5rem] lg:translate-y-0 lg:h-[650px] rounded-[100px] grayscale mix-blend-multiply dark:grayscale dark:mix-blend-lighten drop-shadow-[7px_0px_0px_#33AADD] sm:drop-shadow-[20px_0px_0px_#33AADD] dark:drop-shadow-[7px_0px_0px_#00D8FF] dark:sm:drop-shadow-[20px_0px_0px_#00D8FF]`}
        />
      </div>

      <div className="w-full h-full flex flex-col sm:gap-5 md:gap-10 py-10 px-0">
        <h2 className={`text-[28px] sm:text-[42px] md:text-[48px] lg:text-[62px] text-[${colorPrimary}] dark:text-white font-black text-center`}>About Me</h2>
        <p ref={paragraphRef} className={`text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] 2xl:text-[22px] font-normal text-justify leading-relaxed`}>
          {letters.map((char, index) => (
            <span
              key={index}
              className={`transition duration-50 ease-out ${
                index <= hoveredIndex ? "text-[#101733] dark:text-white" : "text-gray-300 dark:text-[#101733]"
              }`}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Aboutme;

