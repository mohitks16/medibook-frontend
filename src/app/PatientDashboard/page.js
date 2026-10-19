import { redirect } from "next/navigation"
import { getPatientProfile } from "@/services/patientProfileService"
import DashboardShell from "./components/DashboardShell"

export default async function Page() {

    const res = await getPatientProfile()

    if (res.status === 401) {
        redirect("/PatientLogin")
    }

    if (!res.success) {
        return (
            <div className='px-60 py-20 text-center'>
                <p className='text-red-500'>{res.message}</p>
            </div>
        )
    }

    return <DashboardShell patient={res.patient} />
}