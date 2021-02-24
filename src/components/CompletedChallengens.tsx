import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import styles from '../styles/components/CompletedeChallenges.module.css'

export function CompletedeChallenges()
{
    const {challengeCompleted} = useContext(ChallengesContext)
    return(
        <div className={styles.completedeChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengeCompleted}</span>
        </div>
    )
}