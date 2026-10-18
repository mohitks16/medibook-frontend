"use server"
import axios from "@/lib/axios"
import { cookies } from "next/headers"


// Patient Login and Signup

export async function patienRequestOtp(email) { 
    try { 
        console.log("Email is , in the service layer " , email)
        const res = await axios.post("/patient/patientApplication/login/request-otp", { email }); 

        console.log("response is " , res.data)

        return { success: true, message: res.data.message }; 
    } catch (error) { 
        // Returns an object with success: false so the caller knows it failed
        return { 
            success: false, 
            message: error.response?.data?.message || "Failed to request OTP" 
        }; 
    } 
}

export async function patientSubmitOtp(email , otp ){
    try{   
        // console.log("API and  ")
        const res = await axios.post("/patient/patientApplication/login/verify-otp", { email, otp }) ; 

        const cookieStore = await cookies() ; 

        cookieStore.set("PatientToken", res.data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 // 1 day
        }) ;


        return { success: true, message: res.data.message }; 
    } catch (error) { 
        // Returns an object with success: false so the caller knows it failed
        return { 
            success: false, 
            message: error.response?.data?.message || "Failed to submit OTP" 
        };
    }
}

export async function patientSignupRequestOtp(fullName , email , phoneNumber) { 
    try { 

        console.log("<--SERVICE -->") ;

        console.log("Full Name is , in the service layer " , fullName)
        console.log("Phone Number is , in the service layer " , phoneNumber)
        console.log("Email is , in the service layer " , email)

        const res = await axios.post("/patient/patientApplication/signup/request-otp", { fullName , email , phoneNumber }) ;
        
        console.log("response is " , res.data)
        
        
        return { success: true, message: res.data.message }; 
    } catch (error) { 
        // Returns an object with success: false so the caller knows it failed
        return { 
            success: false, 
            message: error.response?.data?.message || "Failed to request OTP" 
        }; 
    } 
}

export async function patientSignupVerifyOtp(email , otp ){
    try{   
        // console.log("API and  ")
        const res = await axios.post("/patient/patientApplication/signup/verify-otp", { email, otp }) ;

        const cookieStore = await cookies() ; 

        cookieStore.set("PatientToken", res.data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 // 1 day
        }) ;

        console.log("response is " , res.data)

        return { success: true, message: res.data.message }; 
        
    } catch (error) { 
        // Returns an object with success: false so the caller knows it failed
        return { 
            success: false, 
            message: error.response?.data?.message || "Failed to submit OTP" 
        };
    }
}
