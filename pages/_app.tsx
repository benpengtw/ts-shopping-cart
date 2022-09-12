import { Provider } from 'react-redux';       // Importing Provider
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import store from '../redux/store';           // Importing redux store
import '../styles/globals.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <div className="wrapper">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  </Provider>
  )
}

export default MyApp
