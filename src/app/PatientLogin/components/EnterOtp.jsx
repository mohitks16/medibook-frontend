"use client"
import React from 'react'
import { verifyLoginOtp } from './actions';

export default function EnterOtp({email}) {

  const handleFormSubmit = async (formData) => {
    const otp = formData.get("otp") ; 
    const res = await verifyLoginOtp(email , otp) ; 
    if(res.status){
      console.log("successfully verified otp") ;
      // redirect to dashboard 
      // router.push("/PatientDashboard")
    } 
  }

  return (
    <div>
      <div className='w-[440px] bg-white py-10 px-15 rounded-2xl '>

                <div className='text-[28px] mb-2 font-bold'>
                    Enter OTP
                </div>

                <form action={handleFormSubmit} className='my-3 grid grid-cols-1 gap-5'>

                    <div className='bg-[#E5E7EB] p-5 rounded-xl'>
                        <p className='text-lg font-semibold'>Enter OTP</p>
                        <p className='text-sm text-gray-500'>An email has been sent to {email} , please enter the OTP</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <label className='font-semibold' htmlFor="otp">OTP</label>
                        <input className='w-full px-3 my-2 py-2 border-2 border-[#cccccc57] outline-none rounded-xl' placeholder='Enter the otp ' type="text" name="otp" id="otp" required />
                    </div>

                    <div className='flex justify-center'>
                        <button type="submit" className='w-full px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                            Submit OTP
                        </button>
                    </div>
                    
                </form>
            </div>
    </div>
  )
}
