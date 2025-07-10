const Footer = () => {
  return (
    <section id="footer" className="px-3 2xl:px-35 xl:px-30 lg:px-10 md:px-8 sm:px-5 h-[150px] w-full flex flex-col-reverse justify-center  text-gray-200 dark:text-[#00BCFF]  gap-1 sm:gap-2 items-start bg-[#101733] dark:bg-gray-800">
      <h2 className="mx-5 md:mx-0 font-bold text-[0.8rem] sm:text-[1.3rem] lg:text-2xl">&copy; {new Date().getFullYear()} </h2>
      <h3 className="mx-5 md:mx-0 font-normal text-[0.8rem] sm:text-[1.3rem] lg:text-2xl">Muhammad Naufal Afif | All Rights Reserved</h3>
    </section>
  )
}

export default Footer

// bg-[linear-gradient(135deg,_rgb(6,15,66),_rgb(22,78,99))]