import { useEffect, useState } from "react";

const Header = () => {
  const[show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () =>{
    setShow(!show);
    setIsActive(false);
  };

  let menuActive = show ? "left-0" : "-left-full";
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }

      setIsActive(false);
      setDarkTextActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Tambahkan dependency array agar hanya dijalankan sekali saat mount


  let scrollActive = scroll ? "py-16 bg-white dark:bg-[#030712] shadow-lg shadow-slate-400 dark:shadow-[#00D8FF]" : "py-15 sm:py-14"; // untuk menggeser logo dan navbar secara vertikal

  // To Show Dropdown Navbar Icon
  const [isActive, setIsActive] = useState(false);

  // to show Dark Mode text while dark mode button hover
  const [darkTextActive, setDarkTextActive] = useState(false);

  const toggleButton = () => {
    setIsActive(prev => !prev);
    
  };

  // To show underline while section active
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6,
        rootMargin: "-100px 0px -100px 0px",

       }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Variabel Shortcut
  const navbarUnderline ="relative inline-block hover:text-blue-400 dark:md:hover:text-[#00D8FF] md:hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[6px] after:w-full after:bg-blue-600 dark:after:bg-[#00D8FF] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:rounded-4xl"

  const dropDownUnderline ="relative inline-block dark:hover:text-[#00BCFF] hover:text-white dark:md:hover:text-[#00BCFF] md:hover:text-blue-500  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[6px] after:w-full after:bg-white dark:after:bg-[#00BCFF] md:after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:rounded-4xl"

  // Color Palette
  const colorPrimary = "[#101733]"
  const colorSecondary = "[#F8FAF7]"

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');

    const isDark = html.classList.contains('dark');
    setDarkModeActive(isDark);

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const html = document.documentElement;

    const shouldUseDark =
      theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (shouldUseDark) {
      html.classList.add("dark");
      setDarkModeActive(true);
    } else {
      html.classList.remove("dark");
      setDarkModeActive(false);
    }
  }, []);

  // Deteksi Dark Mode
  const [darkModeActive, setDarkModeActive] = useState(false);


  

  return (
  <header id="header" className={`z-100 header fixed w-full transition-all h-[6.5rem] md:h-[6.5rem] lg:h-[6.5rem] bg-[#F8FAF7] dark:bg-[#030712] ${scrollActive} sm:translate-y-[-2rem] translate-y-[-3rem]`}>
    <div className="mx-auto 2xl:px-35 xl:px-30 lg:px-10 md:px-8 sm:px-5 px-3">
      <div className="navbar-box flex items-center justify-between">
        
        {/* Logo */}
        <div className="logo flex flex-row gap-2">
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl text-[#101733] font-black tracking-[-3px] dark:text-white">Naufal</h1>
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl text-[#101733] font-black tracking-[-3px] dark:text-[#00D8FF]">Afif</h1>
        </div>

        {/* Navbar */}
        <nav>
          <ul className={`z-40 cursor-pointer flex lg:gap-10 md:gap-8 md:static md:flex-row md:py-0 md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:transition-none md:text-[#101733] dark:md:text-white gap-5 text-[1.2rem] lg:text-[1.2rem] md:text-[1rem] sm:text-[1.2rem] font-normal fixed ${menuActive} top-1/2 translate-y-[16.5rem] flex-col px-8 md:px-0 sm:px-8 py-6 rounded-r-[1.5rem] shadow-lg shadow-slate-400 dark:shadow-[#00D8FF] bg-[#101733] text-white transition-all md:items-center`}>

            {/* Home Navbar */}
            <li className="relative group">
              <a href="#home" className={`${navbarUnderline} ${activeSection === "home" ? "after:scale-x-100 text-blue-600 dark:text-[#00D8FF]" : ""}`}>Home</a>
            </li>

            {/* About Navbar */}
            <li className="w-auto h-auto relative group flex item-center gap-1 ">
              <a className= {`${navbarUnderline} ${isActive ? "text-blue-600 dark:text-[#00D8FF] after:scale-x-100" : ""} ${navbarUnderline} ${activeSection === "aboutme" || activeSection === "skills" || activeSection === "certificate" ? "after:scale-x-100 text-blue-600 dark:text-[#00D8FF]" : ""}`}>About</a>
              <button onClick={toggleButton} className="cursor-pointer">
                {!isActive && (
                  <i className={` ri-arrow-down-s-line text-1xl text-white dark:text-white md:text-${colorPrimary} hover:text-blue-600 
                  dark:hover:text-[#00D8FF]`}></i>
                   
                )}

                {isActive && (
                  <i className={`ri-arrow-up-s-line text-1xl dark:text-[#00D8FF] text-blue-600`}></i>
                )}
              </button>

              {/* Dropdown md */}
              {isActive && (
                <ul id="dropdown-md" className=" hidden md:flex translate-y-63 translate-x-38 md:translate-y-[1px] md:translate-x-0 lg:translate-y-[-4px] lg:translate-x-0 text-[1.2rem] md:text-[1rem] lg:text-[1.2rem] absolute top-full left-0 z-30 md:z-50 flex-col w-[150px] h-[170px] bg-blue-500 md:bg-[#101733] dark:md:bg-gray-700 px-5 justify-evenly shadow-lg shadow-slate-400 my-7.5 rounded-r-3xl md:rounded-b-2xl md:rounded-tr-2xl text-[#101733] dark:md::shadow-lg dark:shadow-[#00BCFF]">
                  <li className="relative group w-[150px] md:text-white">
                    <a href="#aboutme" className={`${dropDownUnderline} ${activeSection === "aboutme" ? "text-blue-600 dark:text-[#00D8FF] after:scale-x-100" : ""}`}>About Me</a>
                  </li>
                  <li className="relative group w-[150px] md:text-white">
                    <a href="#skills" className={`${dropDownUnderline} ${activeSection === "skills" ? "text-blue-600 dark:text-[#00D8FF] after:scale-x-100" : ""}`}>Skills</a>
                  </li>
                  <li className="relative group w-[150px] md:text-white">
                    <a href="#certificate" className={`${dropDownUnderline} ${activeSection === "certificate" ? "text-blue-600 dark:text-[#00D8FF] after:scale-x-100" : ""}`}>Certificate</a>
                  </li>
                </ul>
              )}
              
            </li>

            {/* Portfolio Navbar */}
            <li className="w-auto h-auto relative group flex item-center gap-1">
              <a href="#portfolio" className={`${navbarUnderline} ${activeSection === "portfolio" ? "after:scale-x-100 dark:text-[#00D8FF] text-blue-600" : ""}`}>Portfolio</a>
            </li>
            <li className="relative group">
              <a href="#testimoni" className={`${navbarUnderline} ${activeSection === "testimoni" ? "after:scale-x-100 dark:text-[#00D8FF] text-blue-600" : ""}`}>Testimoni</a>
            </li>
            {/* Contact Navbar */}
            <li className="relative group">
              <a href="#contact" className={`${navbarUnderline} ${activeSection === "contact" || activeSection === "footer" ? "after:scale-x-100 text-blue-600 dark:text-[#00D8FF]" : ""}`}>
                Contact
              </a>
            </li>

            {/* Button Dark Mode */}
            <li className="">
              <button onClick={toggleDarkMode} onMouseEnter={() => setDarkTextActive(true)} onMouseLeave={() => setDarkTextActive(false)} 
              className={`cursor-pointer dark:hover:bg-[#00BCFF] bg-white md:bg-${colorPrimary} dark:md:bg-[#00BCFF] ml-0 md:ml-[-15px] lg:ml-0 rounded-[50%] w-[30px] h-[30px] transition transform hover:scale-120 duration-300 ease-in-out flex justify-center items-center`}>
                <i className={`dark:hidden ri-moon-fill text-2xl text-[#101733] md:text-white`}></i>
                <i className={`dark:flex hidden ri-sun-fill dark:text-gray-950 dark:hover:text-white md:text-[1rem] lg:text-2xl md:text-white`}></i>
            </button>

            {/* DarkMode Text md */}
              {darkTextActive && (
                <div id="darkText-md" className=" hidden md:flex translate-y-63 translate-x-38 md:translate-y-[-2px] md:translate-x-[21rem] lg:translate-y-[-6px] lg:translate-x-[29rem] text-[1.2rem] md:text-[1rem] lg:text-[1.2rem] absolute top-full left-0 z-30 md:z-50 flex-col w-[150px] h-[50px] bg-blue-500 md:bg-[#101733] dark:md:bg-gray-700 px-5 justify-evenly my-7.5  md:rounded-bl-2xl md:rounded-tl-2xl rounded-br-2xl text-white dark:shadow-lg dark:shadow-[#00BCFF]">
                  {darkModeActive ? "Light Mode" : "Dark Mode"}
                </div>
              )}
            </li>

          </ul>

          

          {/* Dropdown default-sm */}
          {isActive &&(
            <ul id="dropdown-sm" className={` md:hidden translate-y-[15.75rem] translate-x-[9.5rem] md:translate-y-[-30px] md:translate-x-120 text-[1.2rem] md:text-[1rem] lg:text-[1.2rem] absolute flex top-full left-0 z-30 md:z-50 flex-col w-[150px] h-[135px] dark:bg-gray-700 bg-blue-500 md:bg-[#101733] px-5 justify-evenly shadow-lg dark:shadow-[#00BCFF] shadow-slate-400 my-7.5 rounded-r-3xl md:rounded-b-2xl md:rounded-tr-2xl text-[#101733] dark:shadow-[0px_0px_30px_rgba(0,188,255,0.7)]`} >
              <li className="relative group w-[150px] dark:text-white md:text-white">
                <a href="#aboutme" className={dropDownUnderline}>About Me</a>
              </li>
              <li className="relative group w-[150px] dark:text-white md:text-white">
                <a href="#skills" className={dropDownUnderline}>Skills</a>
              </li>
              <li className="relative group w-[150px] dark:text-white md:text-white">
                <a href="#certificate" className={dropDownUnderline}>Certificate</a>
              </li>
            </ul>
          )}

          {/* Dark Mode Text sm */}
          {darkTextActive &&(
            <div id="darkText-sm" className={` md:hidden translate-y-[27rem] translate-x-[9.5rem] md:translate-y-[-30px] md:translate-x-120 text-[1.2rem] md:text-[1rem] lg:text-[1.2rem] absolute flex top-full left-0 z-30 md:z-50 flex-col w-[150px] h-[50px] dark:bg-gray-700 dark:text-white dark:shadow-[#00BCFF] bg-blue-500 md:bg-[#101733] px-5 justify-evenly shadow-lg shadow-slate-400 my-7.5 rounded-r-3xl md:rounded-b-2xl md:rounded-tr-2xl text-[#101733]`}>
              {darkModeActive ? "Light Mode" : "Dark Mode"}
            </div>
          )}

          {/* Hamburger Icon */}
          <button className={`md:hidden block transform transition-transform duration-300 ease-in-out ${show ? "rotate-90" : "rotate-0"}`}>
            <i className={`ri-menu-3-line text-3xl cursor-pointer dark:text-white`} onClick={handleClick}></i>
          </button>
          
        </nav>
    
      </div>
    </div>
  </header>
  )
}

export default Header







