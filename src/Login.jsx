import React,{ useState } from "react"


export const Login=(props)=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(email);
    }
    return(
        
        <div className="auth-form-container">
            <h1>Login Form</h1>
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Enter Email</label>
                <input value={email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder="abc@gmail.com" id="email" name="email" />
                <label htmlFor="email">Enter Password</label>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch("register")} > Don't have an account? Register here.</button>
        </div>
    )
}