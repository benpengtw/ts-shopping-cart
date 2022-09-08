import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="wrapper">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
