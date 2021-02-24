import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout : NodeJS.Timeout

export function Countdown()
{
    const minuteCountdown = 1;
    const [time, setTime] = useState(minuteCountdown*60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time/60)
    const seconds = time % 60

    const [minuteL, minuteR] = String(minutes).padStart(2,'0').split('')
    const [secondL, secondR] = String(seconds).padStart(2,'0').split('')

    const {startNewChallenge} = useContext(ChallengesContext)
    
    console.log(minutes,seconds)

    function startCountdown()
    {
        setIsActive(true)
    }
    function resetCountdown()
    {
        setIsActive(false)
        clearTimeout(countdownTimeout)
        setTime(minuteCountdown*60)
    }
    useEffect(()=>{
        if(isActive && time>0)
        {
            countdownTimeout = setTimeout(()=>{
                setTime(time-1)
            },1000)
        }
        else if(isActive && time === 0)
        {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }     
    },[isActive,time])

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteL}</span>
                    <span>{minuteR}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondL}</span>
                    <span>{secondR}</span>
                </div>
            </div>
            { hasFinished ? (
                <button 
                disabled
                className={styles.countdownButton}>
                    Ciclo encerrado
                    <img className='svg' src="icons/finish.svg" alt=""/>
                </button>
            ):(
                <>
                    {isActive ?(
                        <button 
                            type='button'
                            className={`${styles.countdownButtonActive} ${styles.countdownButton}`}
                            onClick={resetCountdown}>
                                Abandonar um ciclo
                                <img src="icons/stop.svg" alt=""/>
                        </button>):(
                            <button 
                            type='button'
                            className={styles.countdownButton}
                            onClick={startCountdown}>
                                Iniciar um ciclo
                                <img className='svg' src="icons/play.svg" alt=""/>
                        </button>
                )}
                </>
            )}
            
        </div>


    )
}