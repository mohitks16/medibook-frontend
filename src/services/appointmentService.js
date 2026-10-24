"use server"

import axios from "@/lib/axios"
import { cookies } from "next/headers"

async function getPatientToken() {
    const cookieStore = await cookies()
    return cookieStore.get("PatientToken")?.value
}

export async function getSlotByIdService(slotId) {
    try {

        // console.log("Function called ")
        const token = await getPatientToken()

        if (!token) {
            return {
                success: false,
                status: 401,
                message: "No token found",
            }
        }
        // console.log("slotIdataservice" , slotId)
        // console.log("tokenataservice" , token)


        const res = await axios.get(`/patient/patientApplication/appointments/get-slot-by-id/${slotId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        console.log("resataservice" , res.data)

        return {
            success: true,
            slot: res.data.slot || res.data,
        }
    } catch (error) {
        return {
            success: false,
            status: error.response?.status,
            message:
                error.response?.data?.message || "Failed to fetch slot",
        }
    }
}

export async function createAppointmentService(slotId) {
    try {
        const token = await getPatientToken()

        if (!token) {
            return {
                success: false,
                status: 401,
                message: "No token found",
            }
        }

        const res = await axios.post(
            "/patient/patientApplication/appointments/create",
            { slotId },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return {
            success: true,
            appointment: res.data.appointment || res.data,
        }
    } catch (error) {
        return {
            success: false,
            status: error.response?.status,
            message:
                error.response?.data?.message || "Failed to create appointment",
        }
    }
}
