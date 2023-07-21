import React,{ useState } from "react"
export const Register=(props)=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [fullname,setName]=useState('')

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(email);
    }
    return(
       
        <div className="auth-form-container">
            <h1>Register Form</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="fullname">Full Name</label>
                <input value={fullname} onChange={(e) =>setName(e.target.value)} type="text" placeholder="Enter Full Name" id="fullname" name="fullname" />
        
                <label htmlFor="email">Enter Email</label>
                <input value={email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="email">Enter Password</label>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="enter password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('login')} >Already have an account? Login here.</button>
        </div>
    
    )
}