"use client"

import { useState, useEffect } from "react"
import ProfileSection from "./ProfileSection"
import SearchSection from "./SearchSection"
import { getPatientAllAppointments, getPatientUpcomingAppointments, getPatientPastAppointments } from "../actions"

export default function DashboardShell({ patient }) {

    const [tab, setTab] = useState("profile")
    const [specFilter, setSpecFilter] = useState("All")
    const [histFilter, setHistFilter] = useState("all")

    const [appointments, setAppointments] = useState([])
    const [listLoading, setListLoading] = useState(false)
    const [listError, setListError] = useState("")

    useEffect(() => {
        if (tab !== "history") return
        async function fetchAppointments() {
            setListLoading(true)
            setListError("")
            let res
            if (histFilter === "all") {
                res = await getPatientAllAppointments()
            } else if (histFilter === "upcoming") {
                res = await getPatientUpcomingAppointments()
            } else if (histFilter === "past") {
                res = await getPatientPastAppointments()
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
    }, [histFilter, tab])

    const specializations = [
        "All", "Cardiologist", "Neurologist", "Dermatologist", "Orthopedist",
        "Pediatrician", "Gynecologist", "Ophthalmologist", "ENT Specialist",
        "Psychiatrist", "General Physician", "Dentist",
    ]

    return (
        <div className="px-60">
            <div className="my-3">
                <p className="text-2xl font-bold">Hello, {patient.fullName}</p>
                <p>Find and book appointments with top specialists</p>
            </div>

            {/* Tabbings */}
            <div className="flex gap-1 my-6 bg-white border border-slate-200 rounded-xl p-1 w-fit overflow-x-auto">
                {[
                    { key: "search", label: "Find Doctors" },
                    { key: "profile", label: "My Profile" },
                    { key: "history", label: "Bookings" },
                ].map((t) => (
                    <button
                        key={t.key}
                        onClick={() => setTab(t.key)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${tab === t.key
                            ? "bg-blue-600 text-white"
                            : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
                            }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            {tab === "search" && (
                <SearchSection />
            )}

            {tab === "profile" && (
                <ProfileSection patient={patient} />
            )}

            {tab === "history" && (
                <div>
                    {/* Filter: all / upcoming / past */}
                    <div className="flex gap-2 mb-5">
                        {["all", "upcoming", "past"].map((f) => (
                            <button
                                key={f}
                                onClick={() => setHistFilter(f)}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${histFilter === f
                                    ? "bg-blue-600 text-white"
                                    : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Booking cards */}
                    <div className="space-y-3">
                        {listLoading ? (
                            <p className="text-slate-500 text-sm py-4">Loading...</p>
                        ) : listError ? (
                            <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl">{listError}</div>
                        ) : appointments.length === 0 ? (
                            <p className="text-slate-500 text-sm py-4">No appointments found</p>
                        ) : (
                            appointments.map((appointment) => {
                                const doctorName = appointment.doctorName || appointment.doctor?.fullName || appointment.doctor?.name || "Doctor"
                                const initials = doctorName.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)
                                const statusRaw = appointment.status || "confirmed"
                                const statusText = statusRaw.charAt(0).toUpperCase() + statusRaw.slice(1)
                                const statusColor = 
                                    statusRaw === "completed" ? "bg-slate-100 text-slate-600 border-slate-200" :
                                    statusRaw === "cancelled" ? "bg-red-50 text-red-600 border-red-100" :
                                    "bg-blue-50 text-blue-700 border-blue-100"

                                return (
                                    <div
                                        key={appointment._id}
                                        className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Doctor initials avatar */}
                                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                                {initials}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-900 text-sm">
                                                    {doctorName}
                                                </p>
                                                <p className="text-xs text-blue-600 font-medium">
                                                    {appointment.doctor?.specialization || appointment.specialization || ""}
                                                </p>
                                                <p className="text-xs text-slate-500 mt-1">
                                                    🕒 {appointment.date || ""} {appointment.time || ""}
                                                </p>
                                                <p className="text-xs text-slate-400 mt-0.5">
                                                    Ref: {appointment._id.slice(-8).toUpperCase()}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-right">
                                                <p className="text-sm font-semibold text-slate-800">
                                                    ₹{appointment.consultationFee || appointment.doctor?.consultationFee || 0}
                                                </p>
                                                <p className="text-xs text-slate-400">Paid</p>
                                            </div>

                                            <span
                                                className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${statusColor}`}
                                            >
                                                {statusText}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}