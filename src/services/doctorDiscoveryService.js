"use server"

import axios from "@/lib/axios"
import { cookies } from "next/headers"

async function getPatientToken() {
    const cookieStore = await cookies()
    return cookieStore.get("PatientToken")?.value
}

export async function fetchDoctors(filters = {}) {
    try {
        const token = await getPatientToken()

        if (!token) {
            return {
                success: false,
                status: 401,
                message: "No token found",
            }
        }

        const params = new URLSearchParams()
        if (filters.name) {
            params.append("name", filters.name)
        }
        if (filters.specialization) {
            params.append("specialization", filters.specialization)
        }
        if (filters.available) {
            params.append("available", filters.available)
        }

        const queryString = params.toString()
        const url = queryString
            ? `/patient/patientApplication/get-doctors?${queryString}`
            : "/patient/patientApplication/get-doctors"

        const res = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return {
            success: true,
            doctors: res.data.doctors || res.data,
        }
    } catch (error) {
        return {
            success: false,
            status: error.response?.status,
            message:
                error.response?.data?.message || "Failed to fetch doctors",
        }
    }
}

export async function getDoctorDetail(doctorId) {
    try {
        const token = await getPatientToken()

        if (!token) {
            return {
                success: false,
                status: 401,
                message: "No token found",
            }
        }

        // const url = `/patient/patientApplication/get-doctor-detail/${doctorId}`
        const url = `/patient/patientApplication/get-doctor-detail/${doctorId}`

        const res = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        console.log("Response is ", res.data)

        return {
            // success: true,
            // doctor: res.data.doctor || res.data,
            // slots: res.data.slots,
            doctor:res.data.doctor,
            slots:res.data.slots,
            message:res.data.message
        }
    } catch (error) {
        return {
            success: false,
            status: error.response?.status,
            message:
                error.response?.data?.message || "Failed to fetch doctor detail",
        }
    }
}