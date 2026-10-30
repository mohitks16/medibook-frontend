"use server"

import {
    updatePatientProfileService,
    uploadProfilePictureService,
} from "@/services/patientProfileService"
import { fetchDoctors } from "@/services/doctorDiscoveryService"
import {
    getPatientAllAppointmentsService,
    getPatientUpcomingAppointmentsService,
    getPatientPastAppointmentsService,
} from "@/services/appointmentService"
import { revalidatePath } from "next/cache"


export async function searchDoctors(filters) {
    try {
        const res = await fetchDoctors(filters)
        if (!res.success) return { error: res.message }
        return { success: true, doctors: res.doctors }
    } catch (error) {
        return { error: "Failed to fetch doctors" }
    }
}


export async function updateProfile(formData) {
    try {
        const fields = {
            fullName: formData.get("fullName"),
            phoneNumber: formData.get("phoneNumber"),
            dateOfBirth: formData.get("dateOfBirth"),
            gender: formData.get("gender"),
            address: formData.get("address"),
            bloodGroup: formData.get("bloodGroup"),
            allergies: formData.get("allergies"),
            medicalHistory: formData.get("medicalHistory"),
        }

        // console.log("Fields are ", fields)

        const res = await updatePatientProfileService(fields)

        if (!res.success) {
            return { success: false, message: res.message }
        }

        revalidatePath("/PatientDashboard")

        return {
            success: true,
            message: res.message,
            patient: res.patient,
        }
    } catch (error) {
        console.log("Error is ", error)
        return {
            success: false,
            message: "An unexpected error occurred",
        }

    }
}


export async function uploadProfilePicture(formData) {
    try {

        // console.log("upload profile pitchure from frontend " , formData)
        const res = await uploadProfilePictureService(formData)

        if (!res.success) {
            return { success: false, message: res.message }
        }

        revalidatePath("/PatientDashboard")

        return {
            success: true,
            message: res.message,
            patient: res.patient,
        }
    } catch (error) {
        return {
            success: false,
            message: "An unexpected error occurred",
        }
    }
}

export async function getPatientAllAppointments() {
    const res = await getPatientAllAppointmentsService()
    if (!res.success) return { error: res.message, status: res.status }
    return { success: true, appointments: res.appointments }
}

export async function getPatientUpcomingAppointments() {
    const res = await getPatientUpcomingAppointmentsService()
    if (!res.success) return { error: res.message, status: res.status }
    return { success: true, appointments: res.appointments }
}

export async function getPatientPastAppointments() {
    const res = await getPatientPastAppointmentsService()
    if (!res.success) return { error: res.message, status: res.status }
    return { success: true, appointments: res.appointments }
}