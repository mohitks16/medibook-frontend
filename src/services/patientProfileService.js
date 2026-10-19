"use server"

import axios from "@/lib/axios"
import { cookies } from "next/headers"


async function getPatientToken() {
    const cookieStore = await cookies()
    return cookieStore.get("PatientToken")?.value
}


export async function getPatientProfile() {
    try {
        const token = await getPatientToken()

        console.log("Token is ", token)

        if (!token) {
            return {
                success: false,
                message: "No token found",
                status: 401,
            }
        }

        const res = await axios.get("/patient/patientApplication/get-profile", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        console.log("Response is ", res.data)
        return {
            success: true,
            patient: res.data.patient,
        }
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Failed to fetch profile",
            status: error.response?.status,
        }
    }
}


export async function updatePatientProfileService(fields) {
    try {
        const token = await getPatientToken()

        if (!token) {
            return {
                success: false,
                message: "No token found",
                status: 401,
            }
        }

        // console.log(" update Token is ", token)

        const res = await axios.patch(
            "/patient/patientApplication/update-profile",
            fields,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        // console.log("update profile Response is ", res.data)

        return {
            success: true,
            message: res.data.message,
            patient: res.data.patient,
        }
        
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Failed to update profile",
            status: error.response?.status,
        }
    }
}


export async function uploadProfilePictureService(formData) {
    try {
        const token = await getPatientToken()

        // console.log("upload Token is " , token)
        // console.log("upload profile pitchure frontend " , formData)

        // console.log("Token is ", token)

        if (!token) {
            return {
                success: false,
                message: "No token found",
                status: 401,
            }
        }

        const res = await axios.post(
            "/patient/patientApplication/upload-profile-picture",
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }
        )

        return {
            success: true,
            message: res.data.message,
            patient: res.data.patient,
        }
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Failed to upload picture",
            status: error.response?.status,
        }
    }
}