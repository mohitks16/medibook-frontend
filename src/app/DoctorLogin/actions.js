"use server"

import axios from "@/lib/axios"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function loginDoctor(formData) {
    // let redirectPath = null

    try {

        const data = {
            username: formData.get("username"),
            doctorId: formData.get("doctorId"),
            password: formData.get("password")
        }

        const res = await axios.post("/doctor/doctorApplication/login", data)

        // Fix: await cookies() before using .set()
        const cookieStore = await cookies()
        
        cookieStore.set("doctorToken", res.data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 // 1 day
        })

        // console.log(res.data.doctor.id) ;
        // redirectPath = `/DoctorDashboard/${res.data.doctor.id}`
        // redirect(`/DoctorDashboard${res.data.doctor.id}`) 

    } catch (error) {
        const message = error.response?.data?.message || "Login failed. Try again."
        return { error: message }
    }

        redirect("/DoctorDashboard")
    
}