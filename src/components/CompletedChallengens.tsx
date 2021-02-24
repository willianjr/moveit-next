import styles from '../styles/components/CompletedeChallenges.module.css'

export function CompletedeChallenges()
{
    return(
        <div className={styles.completedeChallengesContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}