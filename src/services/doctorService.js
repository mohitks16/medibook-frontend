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