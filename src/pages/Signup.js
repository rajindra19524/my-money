import styles from './Signup.module.css'
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

function Signup(){
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const [displayName,setDisplayName] = useState('')
        const {signup,error,isPending} = useSignup()
        

        const handleSubmit = (e) =>{
            e.preventDefault()
            console.log(email,password,displayName)
            signup(email,password,displayName)
        }

    return(
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
                    <h2>Signup</h2>
                    <label>
                        <span>Email: </span>
                        <input type="email"
                               onChange={(e)=>setEmail(e.target.value)}
                               value={email}
                        />
                    </label>
        
                    <label>
                        <span>Password: </span>
                        <input type="password"
                               onChange={(e)=>setPassword(e.target.value)} 
                               value={password}
                        />
                    </label>

                    <label>
                        <span>Display name: </span>
                        <input type="text"
                               onChange={(e)=>setDisplayName(e.target.value)} 
                               value={displayName}
                        />
                    </label>
        
                   {!isPending && <button className='btn'>Signup</button>}
                    {isPending && <button className='btn' disabled>Loading</button>}
                    {error && <p>{error}</p>}
                </form>
    )
}

export default Signup