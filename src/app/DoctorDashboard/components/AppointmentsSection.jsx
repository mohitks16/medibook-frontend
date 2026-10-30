'use client'

import { useState, useEffect } from 'react'
import { createSlot, removeSlot, getAllAppointments, getPendingAppointments, getDoneAppointments } from '../actions'

export default function AppointmentsSection({ slots }) {

    console.log(slots) ;

    
    const [apptTab, setApptTab] = useState("list")
    const [apptFilter, setApptFilter] = useState("all")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const [appointments, setAppointments] = useState([])
    const [listLoading, setListLoading] = useState(false)
    const [listError, setListError] = useState("")

    useEffect(() => {
        if (apptTab !== "list") return   // only fetching the data when appointments tab is open 
        async function fetchAppointments() {
            setListLoading(true)
            setListError("")
            let res
            if (apptFilter === "all") {
                res = await getAllAppointments()
            } else if (apptFilter === "pending") {
                res = await getPendingAppointments()
            } else if (apptFilter === "done") {
                res = await getDoneAppointments()
            }
            setListLoading(false)
            if (res?.error) {
                setListError(res.error)
                setAppointments([])
            } else if (res?.appointments) {
                setAppointments(res.appointments)
            }
        }
        fetchAppointments()
    }, [apptFilter, apptTab])

    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
        "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM",
    ]


    async function handleAddSlot(formData) {

        setLoading(true)
        setError("")
        setSuccess("")

        const result = await createSlot(formData)

        if (result?.error) {
            setError(result.error)
        } else {
            setSuccess("Slot added successfully!")
        }
        setLoading(false)
    }

    async function handleDeleteSlot(slotId) {
        setError("")
        setSuccess("")

        const result = await removeSlot(slotId)

        if (result?.error) {
            setError(result.error)
        } else {
            setSuccess("Slot deleted successfully!")
        }
    }

    return (
        <>
            {/* Sub-tabs */}
            <div className="flex gap-2 mb-6 border-b border-slate-200">
                {["list", "availability"].map((t) => (
                    <button
                        key={t}
                        onClick={() => setApptTab(t)}
                        className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${apptTab === t ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"}`}
                    >
                        {t === "list" ? "Appointments" : "Availability Control"}
                    </button>
                ))}
            </div>

            {/* Feedback messages */}
            {error && (
                <div className='bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl mb-4'>
                    {error}
                </div>
            )}
            {success && (
                <div className='bg-green-50 text-green-600 text-sm px-4 py-3 rounded-xl mb-4'>
                    {success}
                </div>
            )}

            {/* Appointments List */}
            {apptTab === "list" && (
                <>
                    <div className="flex flex-wrap gap-2 mb-5">
                        {["all", "pending", "done"].map((f) => (
                            <button
                                key={f}
                                onClick={() => setApptFilter(f)}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors capitalize ${apptFilter === f ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-3">
                        {listLoading ? (
                            <p className="text-slate-500 text-sm py-4">Loading...</p>
                        ) : listError ? (
                            <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl">{listError}</div>
                        ) : appointments.length === 0 ? (
                            <p className="text-slate-500 text-sm py-4">No appointments found</p>
                        ) : (
                            appointments.map((appointment) => {
                                const patientName = appointment.patient?.fullName || "Patient"
                                const initials = patientName.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) // split converts 
                                const statusRaw = appointment.status || "confirmed"
                                const statusColor = 
                                    statusRaw === "completed" ? "bg-slate-100 text-slate-600 border-slate-200" :
                                    statusRaw === "cancelled" ? "bg-red-50 text-red-600 border-red-100" :
                                    "bg-blue-50 text-blue-700 border-blue-100"

                                return (
                                    <div key={appointment._id} className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-semibold text-sm shrink-0">
                                            {initials}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <p className="font-medium text-slate-900 text-sm">{patientName}</p>
                                                    <p className="text-xs text-slate-500">{appointment.reason || "Consultation"}</p>
                                                </div>
                                                <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full border ${statusColor}`}>
                                                    {statusRaw}
                                                </span>
                                            </div>
                                            <div className="mt-2 flex items-center justify-between">
                                                <p className="text-xs text-blue-600 font-medium">🕒 {appointment.date || ""} {appointment.time || ""}</p>
                                                {apptFilter === "pending"  && (
                                                    <button
                                                        onClick={() => alert("Coming in a future update")}
                                                        className="text-xs text-slate-500 hover:text-blue-600 border border-slate-200 px-2.5 py-1 rounded-lg hover:border-blue-200 transition-colors"
                                                    >
                                                        Mark as Done
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </>
            )}

            {/* Availability Control */}
            {apptTab === "availability" && (
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Add Slot Form */}
                    <form action={handleAddSlot} className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
                        <h3 className="font-semibold text-slate-900">Add New Slot</h3>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Select Date</label>
                            <input
                                type="date"
                                name="date"
                                required
                                className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Select Time Slot</label>
                            <select
                                name="time"
                                required
                                className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            >
                                <option value="">Choose a time</option>
                                {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                        
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                        >
                            {loading ? "Adding..." : "Add Slot"}
                        </button>
                    </form>

                    {/* View Slots */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5">
                        <h3 className="font-semibold text-slate-900 mb-4">All Active Slots</h3>
                        
                        {slots.length === 0 ? (
                            <p className="text-slate-500 text-sm text-center py-8">No slots added yet</p>
                        ) : (
                            <div className="space-y-2">
                                {slots.map((slot) => (
                                    <div key={slot._id} className="flex items-center justify-between p-3 rounded-xl border border-slate-100">
                                        <div>
                                            <p className="text-sm font-medium text-slate-800">{slot.date} · {slot.time}</p>
                                            <p className="text-xs text-slate-500 mt-0.5">
                                                {slot.isBooked ? `Patient: ${slot.bookedBy?.name || "Booked"}` : "No patient assigned"}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${slot.isBooked ? "bg-amber-50 text-amber-700 border border-amber-100" : "bg-teal-50 text-teal-700 border border-teal-100"}`}>
                                                {slot.isBooked ? "Booked" : "Available"}
                                            </span>
                                            {!slot.isBooked && (
                                                <button
                                                    onClick={() => handleDeleteSlot(slot._id)}
                                                    className="text-slate-400 hover:text-red-500 transition-colors p-1"
                                                    title="Delete slot"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}