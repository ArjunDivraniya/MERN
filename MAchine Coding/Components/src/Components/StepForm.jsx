
import React, { useState } from 'react'

const StepForm = () => {
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        city: '',
        contry: '',
        pincode: '',
        course: '',
        brach: '',
        university: ''

    })
    const [step, setStep] = useState(1);
    const nextStep = () => {
        if (step < 3) setStep(prev => prev + 1);
    }
    const priousStep = () => {
        if (step > 0) setStep(prev => prev - 1);
    }

    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted Successfully");
    }

    return (
        <>
            <form onSubmit={handlesubmit}>
                {step === 1 && (
                    <>
                        <h1>Step 1 of 3</h1>
                        <input type='text' name='firstname' placeholder='Enter First Name' value={data.firstname} onChange={handlechange} />
                        <input type='text' name='lastname' placeholder='Enter Last Name' value={data.lastname} onChange={handlechange} />
                        <input type='email' name='email' placeholder='Enter Email' value={data.email} onChange={handlechange} />
                        <input type='password' name='password' placeholder='Enter Password' value={data.password} onChange={handlechange} />

                    </>
                )}

                {step === 2 && (
                    <>
                        <h1>Step 2 of 3</h1>
                        <input type='text' name='city' placeholder='Enter City' value={data.city} onChange={handlechange} />
                        <input type='text' name='contry' placeholder='Enter Contry' value={data.contry} onChange={handlechange} />
                        <input type='text' name='pincode' placeholder='Enter Pincode' value={data.pincode} onChange={handlechange} />
                    </>
                )}

                {step === 3 && (
                    <>
                        <h1>Step 3 of 3</h1> 
                        <input type='text' name='course' placeholder='Enter Course' value={data.course} onChange={handlechange} />  
                        <input type='text' name='brach' placeholder='Enter Brach' value={data.brach} onChange={handlechange} />
                        <input type='text' name='university' placeholder='Enter University' value={data.university} onChange={handlechange} />
                    </>
                )}  
                       
            </form>

            {step > 1 && <button onClick={priousStep} >Prious</button>}
            {step < 3 && <button onClick={nextStep} >Next</button>}
            {step === 3 && <button type='submit' onClick={handlesubmit} >Submit</button>}

        </>
    )
}

export default StepForm