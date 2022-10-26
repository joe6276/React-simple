import styles from './button.module.css'
interface ButtonInterface{
    children:React.ReactNode
    type:"submit" |'button',
    onclick:(e:any)=>void
}
export const Button:React.FC<ButtonInterface>=({children, type , onclick})=>{
    return(
    <button className={styles.button}  type={type || 'button'} onClick={onclick}>{children}</button>
)
}