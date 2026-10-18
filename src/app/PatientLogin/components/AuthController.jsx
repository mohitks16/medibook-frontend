"use client"
import React, { useState } from 'react'
import EnterOtp from './EnterOtp'
import LoginForm from './LoginForm'


export default function AuthController() {

    const [step , setStep] = useState("login") ; 
    const [email , setEmail] = useState("") ;
    const handleSuccess = (verifiedEmail) => {
        setStep("otp") ; 
        setEmail(verifiedEmail) ;
    }

    return (
    <div>
        {step  === "login" ? 
        
        <LoginForm onSuccess={handleSuccess} />
        
        : <EnterOtp  email={email} />
        }

    </div>
  )
}
