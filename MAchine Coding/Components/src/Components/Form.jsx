import React , {useState , useEffect} from 'react'
import './form.css'

const Form = () => {

    const [form ,setForm] =useState({name: "" ,email : "" , password : ""});
    const [error ,setError] =useState("")

    const handlechange =(e) => {
        setForm({...form , [e.target.name] : e.target.value})
    }
    const handleclick = (e) => {
        
        e.preventDefault();
        if(!form.name){
            setError("Name is required");
            return;
        }
        if(!form.email){
            setError("Email is required");
            return;
        }
        if(!form.password){
            setError("Password is required");
            return;
        }
        if(!form.email.includes("@") ){
            setError("include @in email")
            return;
        }
        if(!form.email.includes(".com")){
            setError("include .com in email")
            return;
        }
        if(form.password.length <6){
            setError("Password must be at least 6 characters long")
            return;
        }

       alert("Form submitted successfully");
        setForm({name: "" ,email : "" , password : ""});
        setError("");
      


    }
     return (
     <>
     <div className="form-container">
        <form className="form-card" onSubmit={handleclick}>
            <h2 className="form-title">Sign Up</h2>

            <div className="form-field">
                <label>Name</label>
                <input type='text' name='name' value={form.name} placeholder='Enter Name' onChange={handlechange} />
                {(!form.name) && <div className="error-text">{error}</div>}
            </div>

            <div className="form-field">
                <label>Email</label>
                <input type='email' name='email' value={form.email} placeholder='Enter Email' onChange={handlechange} />
                {((!form.email) || (!form.email.includes("@")) || (!form.email.includes(".com"))) && <div className="error-text">{error}</div>}
            </div>

            <div className="form-field">
                <label>Password</label>
                <input type='password' name='password' value={form.password} placeholder='Enter Password' onChange={handlechange} />
                {((!form.password) || (form.password.length < 6)) && <div className="error-text">{error}</div>}
            </div>

            <button className="submit-btn" type="submit" >Submit</button>
        </form>
     </div>
     </>
    )
}

export default Form