import React, { useState } from 'react'



import { useAuth } from '../context/AuthContext'

function FormsFirebase() {


    const auth=useAuth()
    const [ emailRegister,setEmailregister] =useState('')
    const [ passwordRegister,setPasswordRegister] =useState('')
    const [ email,setEmail] =useState('')
    const [ password,setPassword] =useState('')




    const handleRegister =(e)=>{
        e.preventDefault()

        
        auth.register(emailRegister,passwordRegister)
    }




    const handleLogin =(e)=>{
        e.preventDefault()

        
        auth.login(email,password)
    }

    const handleGoogle =(e)=>{
        e.preventDefault()

        
        auth.loginWithGoogle()
    }

  return (
    <div>
        <form>
            <h3>
                register
            </h3>
            <input onChange={(e)=>setEmailregister(e.target.value)} type="email" />

            <input onChange={(e)=>setPasswordRegister(e.target.value)} type="password"  />
            <button onClick={(e)=>handleRegister(e)}>submit</button>
        </form>


        <form>
            <h3>
                login
            </h3>
            <input  onChange={(e)=>setEmail(e.target.value)} type="email" />
            <input onChange={(e)=>setPassword(e.target.value)}  type="password"  />

            <button onClick={(e)=>handleLogin(e)}>submit</button>
            <button onClick={(e)=>handleGoogle(e)}>google</button>
        </form>


        <button>logout</button>
    </div>
  )
}

export default FormsFirebase