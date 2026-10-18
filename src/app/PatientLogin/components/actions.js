"use server"

import { patienRequestOtp, patientSubmitOtp } from "@/services/authService";
// import { redirect } from "next/dist/server/api-utils";
import { redirect } from "next/navigation"



export async function requestLoginOtp(email) {
    try {

        console.log("Emial is " , email)
        const res = await patienRequestOtp(email) ;


        if(!res.success){
            return { errormessage : res.message }
        }else{
            console.log("actions works successfully ")
        }
        
        return { response : res.success , message : res.message }
        
    } catch (error) {
        return { errormessage : "An Unexpected Error Occured" }
    }
}

export async function verifyLoginOtp(email , otp) {
    try {

        // console.log()
        const res = await patientSubmitOtp(email , otp) ;   


        if(!res.success){
            return { errormessage : res.message }
        }
         redirect("/PatientDashboard")
        // return { status : res.success , message : res.message }

    } catch (error) {
        if (error.digest?.startsWith("NEXT_REDIRECT")) {
            throw error;
        }
        return { errormessage : "An Unexpected Error Occured" }
        // return { errormessage: "An Unexpected Error Occurred" };
    }

    
}