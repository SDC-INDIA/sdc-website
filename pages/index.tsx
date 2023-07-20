import About from "@/components/HomePage/About/About"
import Hero from "@/components/HomePage/Hero/Hero"
import Navbar from "@/components/HomePage/Navbar/Navbar"


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mt-16">
        <About />
      </div>
    </div>
  )
}
