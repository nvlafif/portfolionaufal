function Contact() {

  const iconClass = 'bg-[#101733] dark:bg-[#030712] w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] rounded-[50%] text-[1.7rem] sm:text-5xl lg:text-6xl flex items-center text-white dark:text-[#00BCFF] justify-center hover:bg-blue-900 cursor-pointer     transition duration-300 ease-in-out hover:-translate-y-5 dark:hover:bg-[#00BCFF] dark:hover:text-[#030712] dark:border-[#00BCFF] dark:border-3';

  return (
    <section id="contact" className=" mt-0 px-3 2xl:px-35 xl:px-30 lg:px-10 md:px-8 sm:px-5 h-[200px] w-full flex flex-row justify-center gap-3 sm:gap-10 items-center">
        <a href="https://github.com/nvlafif" target="_blank" rel="noopener noreferrer">
          <i className={`ri-github-fill ${iconClass}`}></i>
        </a>
        <a href="https://wa.me/qr/WFTJW5W5WFN4A1" target="_blank" rel="noopener noreferrer">
          <i className={`ri-whatsapp-line ${iconClass}`}></i>
        </a>
        <a href="https://instagram.com/mhdnvl_" target="_blank" rel="noopener noreferrer">
          <i className={`ri-instagram-line ${iconClass}`}></i>
        </a>
        <a href="https://www.linkedin.com/in/nvlafif/" target="_blank" rel="noopener noreferrer">
          <i className={`ri-linkedin-fill ${iconClass}`}></i>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=novalafif51@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className={`ri-mail-line ${iconClass}`}></i>
        </a>
    </section>
  )
}

export default Contact