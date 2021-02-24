import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'

export function Countdown()
{
    const [time, setTime] = useState(1*60)
    const [active, setActive] = useState(false)

    const minutes = Math.floor(time/60)
    const seconds = time % 60

    const [minuteL, minuteR] = String(minutes).padStart(2,'0').split('')
    const [secondL, secondR] = String(seconds).padStart(2,'0').split('')

    console.log(minutes,seconds)

    function startCountdown()
    {
       setActive(active?false:true)
    }
    useEffect(()=>{
        if(active && time>0)
        {
            setTimeout(()=>{
                setTime(time-1)
            },1000)
        }       
    },[active,time])

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
            <button 
                type='button'
                className={active?styles.countdownButton:styles.countdownButton}
                onClick={startCountdown}>
                    {active?'Abandonar ciclo':'Iniciar um ciclo'}
                    <i>{active?'#':'->'}</i>
            </button>
        </div>

    )
}