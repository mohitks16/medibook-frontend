"use server"

import { getDoctorDetail } from "@/services/doctorDiscoveryService"



export async function fetchDoctorProfile(doctorId) {
    try {
        const res = await getDoctorDetail(doctorId)
        // if (!res.success) return { error: res.message }

        console.log("This is actions " , res)
       const {doctor , slots , message} = res ;
        return { Doctor : doctor , Slots : slots , Message : message }
    } catch (error) {
        return { error: "Failed to fetch doctor profile" }
    }
}