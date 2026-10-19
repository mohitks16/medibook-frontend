"use client"

import { useState } from "react"
import ProfileSection from "./ProfileSection"

export default function DashboardShell({ patient }) {

    const [tab, setTab] = useState("profile")
    const [specFilter, setSpecFilter] = useState("All")
    const [histFilter, setHistFilter] = useState("all")

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
                <div>
                    {/* PASTE YOUR EXISTING SEARCH TAB JSX HERE (unchanged) */}
                </div>
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
                        <div
                            className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                            <div className="flex items-start gap-4">
                                {/* Doctor initials avatar */}
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                    {/* {b.doctor.split(" ") .slice(/1) .map((n) => n[0]) .join("")} */}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900 text-sm">
                                        {/* {b.doctor} */}
                                    </p>
                                    <p className="text-xs text-blue-600 font-medium">
                                        {/* {b.spec} */}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        {/* 🕐 {b.slot} */}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        {/* Ref: {b.ref} */}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-slate-800">
                                        {/* ₹{b.fee} */}
                                    </p>
                                    <p className="text-xs text-slate-400">Paid</p>
                                </div>

                                <span
                                    className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100`}
                                >
                                    Upcoming
                                    {/* {b.status === "" ? "Upcoming" : "Completed"} */}
                                </span>
                            </div>
                        </div>

                        <div
                            className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                            <div className="flex items-start gap-4">
                                {/* Doctor initials avatar */}
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                    {/* {b.doctor.split(" ") .slice(/1) .map((n) => n[0]) .join("")} */}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900 text-sm">
                                        {/* {b.doctor} */}
                                    </p>
                                    <p className="text-xs text-blue-600 font-medium">
                                        {/* {b.spec} */}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        {/* 🕐 {b.slot} */}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        {/* Ref: {b.ref} */}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-slate-800">
                                        {/* ₹{b.fee} */}
                                    </p>
                                    <p className="text-xs text-slate-400">Paid</p>
                                </div>

                                <span
                                    className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100`}
                                >
                                    Upcoming
                                    {/* {b.status === "" ? "Upcoming" : "Completed"} */}
                                </span>
                            </div>
                        </div>

                        <div
                            className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                            <div className="flex items-start gap-4">
                                {/* Doctor initials avatar */}
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                                    {/* {b.doctor.split(" ") .slice(/1) .map((n) => n[0]) .join("")} */}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900 text-sm">
                                        {/* {b.doctor} */}
                                    </p>
                                    <p className="text-xs text-blue-600 font-medium">
                                        {/* {b.spec} */}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        {/* 🕐 {b.slot} */}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        {/* Ref: {b.ref} */}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-slate-800">
                                        {/* ₹{b.fee} */}
                                        fees in inr
                                    </p>
                                    <p className="text-xs text-slate-400">Paid</p>
                                </div>

                                <span
                                    className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200`}
                                >
                                    Completed
                                    {/* {b.status === "" ? "Upcoming" : "Completed"} */}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}