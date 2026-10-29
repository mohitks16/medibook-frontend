"use server"

import { getSlotByIdService, createAppointmentService , verifyPaymentService} from "@/services/appointmentService"

export async function getSlotById(slotId) {
    try {
        // console.log("slotIdfromactions" , slotId)
        const res = await getSlotByIdService(slotId)

        // console.log("resfromactions" , res)

        if (!res.success) {
            return { error: res.message, status: res.status }
        }

        return { success: true, slot: res.slot }

    } catch (error) {

        return { error: "Failed to fetch slot" }

    }
}

export async function createAppointment(slotId) {
    try {
        const res = await createAppointmentService(slotId)
        if (!res.success) {
            return { error: res.message, status: res.status }
        }   
        
        return { success: true, appointment: res.appointment }
    } catch (error) {
        return { error: "Failed to create appointment" }
    }
}

export async function verifyPayment(payload) {
    try {
        const res = await verifyPaymentService(payload)
        if (!res.success) {
            return { error: res.message, status: res.status }
        }
        return { success: true, appointment: res.appointment }
    } catch (error) {
        return { error: "Failed to verify payment" }
    }
}