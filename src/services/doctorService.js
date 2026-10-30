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
} ; 

export async function updateDoctorProfileService(formData) {
  try {
    const token = await getToken();

    const {
      fullName,
      specialization,
      consultationFee,
      currentlyWorkingAt,
      professionalBio,
    } = formData;

    const response = await axios.patch(
      "/doctor/doctorApplication/update-profile",
      {
        fullName,
        specialization,
        consultationFee,
        currentlyWorkingAt,
        professionalBio,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data; // Return server response (e.g. { message, data })
  } catch (error) {
    console.error("Error updating profile:", error.response?.data || error.message);
    throw error; // Let UI component handle toast/notification
  }
} ; 


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

export async function getDoctorAllAppointmentsService() {
    try {
        const token = await getToken()
        if (!token) return { success: false, status: 401, message: "No token found" }
        const res = await axios.get("/appointments/doctor/all", {
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

export async function getDoctorPendingAppointmentsService() {
    try {
        const token = await getToken()
        if (!token) return { success: false, status: 401, message: "No token found" }
        const res = await axios.get("/appointments/doctor/pending", {
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

export async function getDoctorDoneAppointmentsService() {
    try {
        const token = await getToken()
        if (!token) return { success: false, status: 401, message: "No token found" }
        const res = await axios.get("/appointments/doctor/done", {
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