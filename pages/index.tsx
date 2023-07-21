import About from "@/components/HomePage/About/About"
import Domain from "@/components/HomePage/Domain/Domain"
import Hero from "@/components/HomePage/Hero/Hero"

export default function Home() {
  return (
    <div>
      <div className="lg:w-[80%] w-[90%] mx-auto">
        <Hero />
        <About />
        <Domain />
      </div>
    </div>
  )
}
