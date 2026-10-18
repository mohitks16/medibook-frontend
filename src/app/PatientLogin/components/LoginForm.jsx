"use client"
import React from 'react'
import { requestLoginOtp } from './actions';

export default function LoginForm({onSuccess}) {

    const handleFormSubmit = async (formData) => {

        const email = formData.get("email");
        console.log("email is : " , email) ;
        const res = await requestLoginOtp(email) ;

        if(res.response){
            console.log("successfully requested otp") ;
            onSuccess(String(email)) ;  
        } 
        
    }

    return (
        <div>
            <div className='w-[440px] bg-white py-10 px-15 rounded-2xl '>

                <div className='text-[28px] mb-2 font-bold'>
                    Patient Login
                </div>

                <form action={handleFormSubmit} className='my-3'>

                    <label className='font-semibold' htmlFor="">Email Id </label>
                    <input  className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' placeholder='Enter your email id' type="email" name="email" id="email" required />

                    <button type="submit" className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                        Request OTP
                    </button>

                    <div className="text-center mt-5">
                        <p>Don't have an account ? <span className='text-[#2563EB]'> Register here </span></p>
                    </div>
                </form>
            </div>
        

        </div>

    

    )
}
