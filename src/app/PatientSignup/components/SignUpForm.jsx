"use client"
import Link from 'next/link'
import React from 'react'
import { requestSignupOtp } from '../actions'

export default function SignUpForm({onSuccess}) {

    const handleFormSubmit = async (formData) => {
        const fullName = formData.get("fullName")
        const email = formData.get("email")
        const phoneNumber = formData.get("phoneNumber")

        const res = await requestSignupOtp(fullName , email , phoneNumber) ;

        if(res.status){
            console.log("successfully requested otp") ;
            onSuccess(String(email)) ;  
        }
    }

    return (
        <div>
            <div className='text-[28px] mb-2 font-bold'>
                Patient Signup
            </div>

            <form action={handleFormSubmit} className='my-3'>
                <label className='font-semibold' htmlFor="">Full Name</label>
                <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' required placeholder='Enter your full name' type="text" name="fullName" id="fullName"  />

                <label className='font-semibold' htmlFor="">Gmail Id</label>
                <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' required placeholder='please enter your valid gmail id' type="email" name ="email" />
                
                <label className='font-semibold' htmlFor="">phone number</label>
                <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' required placeholder='please enter your phone number ' type="text" name ="phoneNumber" />

                <button type="submit" className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                    Signup
                </button>

                <div className="text-center mt-5">
                   <p>Already have an account ? <Link href='/PatientLogin'>Login here</Link></p>
                </div>
        
            </form>

        </div>
    )
}
