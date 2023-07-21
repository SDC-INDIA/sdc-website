import About from "@/components/HomePage/About/About"
import Domain from "@/components/HomePage/Domain/Domain"
import Hero from "@/components/HomePage/Hero/Hero"
import Navbar from "@/components/HomePage/Navbar/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Domain />
    </div>
  )
}
