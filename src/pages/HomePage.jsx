import Aboutme from "../components/Aboutme"
import Certificate from "../components/Certificate"
import Contact from "../components/Contact"
import Home from "../components/Home"
import Portfolio from "../components/Portfolio"
import Skills from "../components/Skills"
import Testimoni from "../components/Testimoni"







const HomePage = () => {
  return (
    <main id="homepage" className='h-fit bg-[#F8FAF7] dark:bg-[#030712] w-full '>
      <Home/>
      <Aboutme/>
      <Skills/>
      <Certificate/>
      <Portfolio/>
      <Testimoni/>
      <Contact/>

    </main>
  )
}

export default HomePage
