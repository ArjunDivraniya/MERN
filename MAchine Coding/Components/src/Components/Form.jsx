import React , {useState , useEffect} from 'react'

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
   <form onSubmit={handleclick}>
    <input type='text' name='name' value={form.name} placeholder='Enter Name' onChange={handlechange} />
   {(!form.name) && <div style={{color : "red"}}>{error}</div>}
    <input type='email' name='email' value={form.email} placeholder='Enter Email' onChange={handlechange} />
      {(!form.email) || (!form.email.includes("@")) || (!form.email.includes(".com")) && <div style={{color : "red"}}>{error}</div>}

    <input type='password' name='password' value={form.password} placeholder='Enter Password' onChange={handlechange} />
      {(!form.password) || (form.password.length < 6) && <div style={{color : "red"}}>{error}</div>}
    <button type="submit" >Submit</button>

   </form> 
   </>
  )
}

export default Form