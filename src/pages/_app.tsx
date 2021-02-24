import '../styles/global.css'

import { ChallengeProvider } from '../contexts/ChallengesContexts'

function MyApp({ Component, pageProps }) {
  return(<ChallengeProvider>
            <Component {...pageProps} />
          </ChallengeProvider>)
}

export default MyApp
