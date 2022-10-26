import { Modalinterface } from '../../Interfaces'
import { Button } from '../Button/Button'
import styles from './modal.module.css'
export const Modal:React.FC<Modalinterface>=({message,title,type, onCancel})=>{
    const handleClick =()=>{
        onCancel(null)
    }
    return (
        <div className={styles.container} onClick={handleClick}>
           <div className={styles.modal}>
                <header className={styles.header}> {title}</header>
                <p>{message}</p>
                <Button type='button' onclick={handleClick}>Okay</Button>
            </div> 
        </div>
    )
}