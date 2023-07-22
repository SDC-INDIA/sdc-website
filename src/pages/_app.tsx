import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "@/src/components/HomePage/Navbar/Navbar"
import Footer from "@/src/components/HomePage/Footer/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
