import styles from '../styles/components/Profile.module.css'

export function Profile()
{
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/69650967?s=400&u=340dd62c56af4224bef29fde08ea63fd8fbe6b50&v=4" alt="Img Profile"/>
            <div>
                <strong>Willian Jr</strong>
                <p>
                    <i>!</i>
                    Level 1
                </p>
            </div>
        </div>
    )
}