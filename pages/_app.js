import '../styles/globals.css'
import '../styles/comp.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
