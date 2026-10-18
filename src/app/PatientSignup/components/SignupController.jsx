"use client"
import React, { useState } from 'react'
import SignUpForm from './SignUpForm'
import OtpVerfication from './OtpVerfication';

export default function SignupController() {

    const [step, setStep] = useState("login");
    const [email, setEmail] = useState("");
    const handleSuccess = (verifiedEmail) => {
        setStep("otp");
        setEmail(verifiedEmail);
    }
    return ( 
        <div className='w-[440px] bg-white py-10 px-15 rounded-2xl '>

            {step === "login" ?

                <SignUpForm onSuccess={handleSuccess} />

                : <OtpVerfication email={email} />
            }

        </div>
    )
}
