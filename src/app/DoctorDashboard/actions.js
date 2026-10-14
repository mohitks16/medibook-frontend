"use server"

import { addSlot, deleteSlot } from "@/services/doctorService"
import { revalidatePath } from "next/cache"

export async function createSlot(formData) {

    const date = formData.get("date")
    const time = formData.get("time")

    if (!date || !time) {
        return { error: "Date and time are required" }
    }

    const result = await addSlot(date, time)

    if (result.error) {
        return { error: result.error }
    }

    revalidatePath("/DoctorDashboard")
    return { success: true }

}

export async function removeSlot(slotId) {
    
    if (!slotId) {
        return { error: "Slot ID is required" }
    }

    const result = await deleteSlot(slotId)

    if (result.error) {
        return { error: result.error }
    }

    revalidatePath("/DoctorDashboard")
    return { success: true }

}