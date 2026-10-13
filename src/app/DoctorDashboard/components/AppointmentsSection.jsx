'use client'

import { useState } from 'react'

export default function AppointmentsSection() {

    const [apptTab, setApptTab] = useState("list")
    const [apptFilter, setApptFilter] = useState("all")

    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
        "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM",
    ]

    return (
        <>
            {/* Sub-tabs: Appointments | Availability */}
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

            {/* Appointments List */}
            {apptTab === "list" && (
                <>
                    {/* Filter buttons */}
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

                    {/* Static appointment cards */}
                    <div className="space-y-3">
                        {/* Pending appointment */}
                        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-semibold text-sm shrink-0">
                                JD
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <p className="font-medium text-slate-900 text-sm">John Doe</p>
                                        <p className="text-xs text-slate-500">35 yrs · Chest pain consultation</p>
                                    </div>
                                    <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                                        Pending
                                    </span>
                                </div>
                                <div className="mt-2 flex items-center justify-between">
                                    <p className="text-xs text-blue-600 font-medium">🕐 Today, 10:00 AM</p>
                                    <button className="text-xs text-slate-500 hover:text-blue-600 border border-slate-200 px-2.5 py-1 rounded-lg hover:border-blue-200 transition-colors">
                                        Mark as Done
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Done appointment */}
                        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-semibold text-sm shrink-0">
                                AS
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <p className="font-medium text-slate-900 text-sm">Alice Smith</p>
                                        <p className="text-xs text-slate-500">28 yrs · Skin allergy checkup</p>
                                    </div>
                                    <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                                        Done
                                    </span>
                                </div>
                                <div className="mt-2 flex items-center justify-between">
                                    <p className="text-xs text-blue-600 font-medium">🕐 Yesterday, 3:30 PM</p>
                                    <button className="text-xs text-slate-500 hover:text-blue-600 border border-slate-200 px-2.5 py-1 rounded-lg hover:border-blue-200 transition-colors">
                                        Mark as Pending
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Availability Control */}
            {apptTab === "availability" && (
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Add Slot Form */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
                        <h3 className="font-semibold text-slate-900">Add New Slot</h3>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Select Date</label>
                            <input
                                type="date"
                                className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Select Time Slot</label>
                            <select
                                className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            >
                                <option value="">Choose a time</option>
                                {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                        <button
                            type="button"
                            className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Add Slot
                        </button>
                    </div>

                    {/* View Slots */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5">
                        <h3 className="font-semibold text-slate-900 mb-4">All Active Slots</h3>
                        <div className="space-y-2">
                            {/* Booked slot */}
                            <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100">
                                <div>
                                    <p className="text-sm font-medium text-slate-800">Oct 15, 2025 · 10:00 AM</p>
                                    <p className="text-xs text-slate-500 mt-0.5">Patient: John Doe</p>
                                </div>
                                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                                    Booked
                                </span>
                            </div>

                            {/* Unbooked slot */}
                            <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100">
                                <div>
                                    <p className="text-sm font-medium text-slate-800">Oct 15, 2025 · 11:00 AM</p>
                                    <p className="text-xs text-slate-500 mt-0.5">No patient assigned</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                                        Available
                                    </span>
                                    <button className="text-slate-400 hover:text-red-500 transition-colors p-1" title="Delete slot">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}