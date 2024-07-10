import Header from './components/header'
import WhyFocusRealm from './components/WhyFocusRealm'
import SectionComponent from './components/SectionComponent'
import BannerComponent from './components/BannerComponent'
import Footer from './components/Footer'
import Testimonial from './components/testimonials'
import Herosection from './components/herosection'
// import Testimonialcard from './components/testimonialcard'

function App() {
  
  return (
    <div>
      <Header/>
      <Herosection />
      <WhyFocusRealm/>
      <SectionComponent/>
      <BannerComponent/>
      <div className='mx-auto flex w-full items-center justify-center'>
      <Testimonial/>
      </div>
      
      
      <br />
      <Footer/>
    </div>
  )
}

export default App
