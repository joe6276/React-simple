import React, { useState } from "react"
import { AddStudentProp, Error } from "../Interfaces"
import { Button } from "../UI/Button/Button"
import { Modal } from "../UI/Modal/Modal"
import styles from './addStudent.module.css'
export const AddStudent:React.FC<AddStudentProp>=()=>{
    const [user,setUser] =useState({
        username:'',
        age:'',
        id:''
    })

    const [error , setError] = useState<Error>({
        title:'',
        message:''
    })

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUser(prev =>({...prev, [e.target.name]:e.target.value , id:Math.floor(Math.random()).toString()}))
    }
    const handleSubmit =(e:React.FormEvent)=>{
            e.preventDefault()
            if(user.username.trim().length===0 || user.age.trim().length===0){
                setError({
                    title:'Username/Age is Required',
                    message:'please Enter a Value for username and Age'
                })
                console.log('username');
                
            }

            if( +user.age<1){
                setError({
                    title:'Age is Incorrect',
                    message:'Please Enter a Valid Value for  Age'
                })
                console.log('Age');
                
            
            }
    }

const handleCancel=()=>{
    setError({
        title:'',
        message:''
    })
}
    
    return (
        <div className={styles.container}>
            { error.title && <Modal  onCancel={handleCancel} type='button' message={error.message} title={error.title}/>}
            <form  onSubmit={handleSubmit}>
                <div className={styles['form-control']} >
                    <label htmlFor="name">Username</label>
                    <input type="text" name="username" value={user.username}  onChange={handleChange} />
                </div>
                <div className={styles['form-control']} >
                    <label htmlFor="name">Age</label>
                    <input type="text" name="age" value={user.age}  onChange={handleChange} />
                </div>
                <Button type="button" onclick={handleSubmit}> Add Student</Button>
            </form>

        </div>
    )
}