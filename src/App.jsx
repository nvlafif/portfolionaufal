import Footer from './components/Footer';
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { useEffect } from "react";

function App() {

  // To refresh website
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Header */}
      <Header />  
      <HomePage/>
      <Footer/>
    </div>
    

  )
}

export default App
