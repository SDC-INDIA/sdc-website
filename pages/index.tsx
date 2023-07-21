import About from "@/components/HomePage/About/About"
import Domain from "@/components/HomePage/Domain/Domain"
import Footer from "@/components/HomePage/Footer/Footer"
import Hero from "@/components/HomePage/Hero/Hero"
import Navbar from "@/components/HomePage/Navbar/Navbar"

export default function Home() {
  return (
    <div>
      <div className="lg:w-[80%] w-[90%] mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Domain />
      </div>
      <Footer />
    </div>
  )
}
