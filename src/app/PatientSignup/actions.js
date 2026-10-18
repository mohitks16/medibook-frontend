"use server"
import { patientSignupRequestOtp, patientSignupVerifyOtp } from "@/services/authService";
// import { redirect } from "next/dist/server/api-utils";
import { redirect } from "next/navigation"

export async function requestSignupOtp(fullName, email, phoneNumber) {
    try {

        console.log("<--ACTIONS -->");
        console.log("Emial is  ", email)
        console.log("Phone Number is ", phoneNumber)
        console.log("Full Name is ", fullName)
        const res = await patientSignupRequestOtp(fullName, email, phoneNumber);

        // console.log("response is " , res.data)

        if (!res.success) {
            return { errormessage: res.message }
        } else {
            console.log("actions works successfully ")
        }

        return { status: res.success, message: res.message }

    } catch (error) {
        return { errormessage: "An Unexpected Error Occured" }
    }
    
}

export async function verifySignupOtp(email, otp) {
    try {
        // console.log()
        const res = await patientSignupVerifyOtp(email, otp);

        if (!res.success) {

            return { errormessage: res.message }
        }
        
       

        // return { success: true, message: res.data.message };
    } catch (error) {
        
        return {
            success: false,
            message: error.response?.data?.message || "Failed to submit OTP"
        };
    }

     redirect("/PatientDashboard")
}