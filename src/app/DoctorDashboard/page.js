import { redirect } from 'next/navigation'
import { getDoctorProfile, getMySlots } from '@/services/doctorService'
import ProfileSection from './components/ProfileSection'
import AppointmentsSection from './components/AppointmentsSection'

export default async function DoctorDashboardPage() {

    const { doctor, error, status } = await getDoctorProfile()

    // Redirect if not authenticated
    if (status === 401 || error === "No token found") {
        redirect('/DoctorLogin')
    }

    // Show error state
    if (error) {
        return (
            <div className='px-60 py-20 text-center'>
                <p className='text-red-500'>{error}</p>
            </div>
        )
    }

     // Fetch slots
    const { slots, error: slotsError } = await getMySlots() 
    console.log("Slots from service:", slots)
    console.log("Slots error:", slotsError) 

    return (
        <div className='px-60'>
            {/* Header with real doctor name */}
            <div className='my-5 flex justify-between'>
                <div>
                    <p className='text-2xl font-bold'>Welcome Back Dr. {doctor.fullName}</p>
                    <p className='text-slate-500'>{doctor.specialization}</p>
                </div>
                {/* Stats cards - static for now */}
                <div className="flex gap-2">
                    <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-center">
                        <p className="text-xl font-bold text-blue-600">5</p>
                        <p className="text-xs text-slate-500">Total</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-center">
                        <p className="text-xl font-bold text-amber-500">3</p>
                        <p className="text-xs text-slate-500">Pending</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-center">
                        <p className="text-xl font-bold text-teal-600">2</p>
                        <p className="text-xs text-slate-500">Done</p>
                    </div>
                </div>
            </div>

            {/* Profile section with tabs */}
            <ProfileSection doctor={doctor} slots={slots || []} />
            
        </div>
    )
}