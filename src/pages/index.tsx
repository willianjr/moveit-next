import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedeChallenges } from '../components/CompletedChallengens'
import { Countdown } from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | moveIt - wrjr</title>
      </Head>
      <ExperienceBar/>
      <section>
        <div>
          <Profile/>
          <CompletedeChallenges/>
          <Countdown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
      
    </div>
      
    
  

  )
}
