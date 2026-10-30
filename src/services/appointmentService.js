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
        const res = await axios.get(`/patient/patientApplication/appointments/get-slot-by-id/${slotId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        // console.log("resataservice" , res.data)

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
            "/patient/patientApplication/appointments/create-order",
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

export async function verifyPaymentService(payload) {
    try {
        const token = await getPatientToken()

        if (!token) {
            return { success: false, status: 401, message: "No token found" }
        }

        const res = await axios.post(
            "/patient/patientApplication/appointments/verify-payment",
            payload,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        )

        return { success: true, appointment: res.data.appointment }
    } catch (error) {
        return {
            success: false,
            status: error.response?.status,
            message: error.response?.data?.message || "Failed to verify payment",
        }
    }
}

export async function getPatientAllAppointmentsService() {
    try {
        const token = await getPatientToken()
        if (!token) return { success: false, status: 401, message: "No token found" }
        const res = await axios.get("/appointments/patient/all", {
            headers: { Authorization: `Bearer ${token}` },
        })
        return { success: true, appointments: res.data.appointments || [] }
    } catch (error) {
        return {
            success: false,
            status: error.response?.status,
            message: error.response?.data?.message || "Failed to fetch appointments",
        }
    }
}

export async function getPatientUpcomingAppointmentsService() {
    try {
        const token = await getPatientToken()
        if (!token) return { success: false, status: 401, message: "No token found" }
        const res = await axios.get("/appointments/patient/upcoming", {
            headers: { Authorization: `Bearer ${token}` },
        })
        return { success: true, appointments: res.data.appointments || [] }
    } catch (error) {
        return {
            success: false,
            status: error.response?.status,
            message: error.response?.data?.message || "Failed to fetch appointments",
        }
    }
}

export async function getPatientPastAppointmentsService() {
    try {
        const token = await getPatientToken()
        if (!token) return { success: false, status: 401, message: "No token found" }
        const res = await axios.get("/appointments/patient/past", {
            headers: { Authorization: `Bearer ${token}` },
        })
        return { success: true, appointments: res.data.appointments || [] }
    } catch (error) {
        return {
            success: false,
            status: error.response?.status,
            message: error.response?.data?.message || "Failed to fetch appointments",
        }
    }
}
