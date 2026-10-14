import axios from "@/lib/axios"
import { cookies } from "next/headers"

export async function getDoctorProfile() {
    try {
        
        const cookieStore = await cookies()
        const token = cookieStore.get("doctorToken")?.value

        if (!token) {
            return { error: "No token found", status: 401 }
        }

        const res = await axios.get("/doctor/doctorApplication/profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return { doctor: res.data.doctor }

    } catch (error) {

        if (error.response?.status === 401) {
            return { error: "Unauthorized", status: 401 }
        }
        
        return { error: "Failed to fetch profile" }
    
    }
}

async function getToken() {
    const cookieStore = await cookies()
    return cookieStore.get("doctorToken")?.value
    //  console.log("getToken called, token:", token ? "EXISTS" : "NULL")
}



export async function addSlot(date, time) {
    try {
        const token = await getToken()

        if (!token) {
            return { error: "No token found", status: 401 }
        }

        const res = await axios.post("/doctor/doctorSlot/add-slots", 
            { date, time },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        return { slot: res.data.slot }

    } catch (error) {
        return { 
            error: error.response?.data?.message || "Failed to add slot" 
        }
    }
}

export async function getMySlots() {
     try {
        const token = await getToken()

        if (!token) {
            return { error: "No token found", status: 401 }
        }

        console.log("Token found:", token ? "YES" : "NO")  


        const res = await axios.get("/doctor/doctorSlot/get-slots", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log("API Response:", res.data)  // Add this

        return { slots: res.data.slots }

    } catch (error) {
        console.log("Error:", error.response?.data)  // Add this
        return { 
            error: error.response?.data?.message || "Failed to fetch slots" 
        }
    }
    
}

export async function deleteSlot(slotId) {
    try {
        const token = await getToken()

        if (!token) {
            return { error: "No token found", status: 401 }
        }

        await axios.delete(`/doctor/doctorSlot/delete-slots/${slotId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return { success: true }

    } catch (error) {
        return { 
            error: error.response?.data?.message || "Failed to delete slot" 
        }
    }

}