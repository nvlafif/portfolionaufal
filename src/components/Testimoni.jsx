import FormTestimoni from "./FormTestimoni"
import HasilTestimoni from "./HasilTestimoni"




const Testimoni = () => {

  const colorPrimary = "#101733"
  const colorSecondary = "#F8FAF7"

  return (
    <section id="testimoni" className="pt-22 px-3 2xl:px-35 xl:px-30 lg:px-10 md:px-8 sm:px-5 h-[900px] sm:h-[807px] md:h-[1200px] lg:h-[807px] w-full flex flex-col">
        <div className="sm:h-[100px] md:h-[150px] w-full flex flex-col justify-center">
          <h2 className={`text-[28px] sm:text-[32px] md:text-[42px] lg:text-[62px] text-[${colorPrimary}] dark:text-white font-black text-center`}>Testimoni</h2>
        </div>
        
        <div className=" w-full h-full flex flex-col sm:flex-row justify-between items-center sm:items-start sm:justify-evenly">
          <FormTestimoni/>
          <HasilTestimoni/>    
        </div>
    </section>
  )
}

export default Testimoni