'use client'

import { useState } from 'react'
import AppointmentsSection from './AppointmentsSection'

export default function ProfileSection({ doctor  , slots}) {

    const [mainTab, setMainTab] = useState("profile")

    const specializations = [
        "Cardiologist", "Neurologist", "Dermatologist", "Orthopedist",
        "Pediatrician", "Gynecologist", "Ophthalmologist", "ENT Specialist",
        "Psychiatrist", "General Physician", "Dentist", "Radiologist",
    ]

    const degrees = ["MBBS", "BDS", "BSc Nursing", "MD", "MS", "MSc", "DNB", "DM", "MCh", "MDS", "BAMS", "BHMS"]

    return (
        <>
            {/* Tab buttons */}
            <div className="flex gap-2 mb-6 bg-white border border-slate-200 rounded-xl p-1 w-fit">
                <button
                    onClick={() => setMainTab("profile")}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${mainTab === "profile" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"}`}
                >
                    Profile Setup
                </button>
                <button
                    onClick={() => setMainTab("appointments")}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${mainTab === "appointments" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"}`}
                >
                    Appointment
                </button>
            </div>

            {mainTab === "profile" && (
                <div className='flex gap-6'>
                    <div className='w-2/3'>
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
                            <h2 className="font-semibold text-slate-900">Profile Information</h2>
                            
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                                    <input
                                        name="fullName"
                                        defaultValue={doctor.fullName}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Specialization</label>
                                    <select
                                        name="specialization"
                                        defaultValue={doctor.specialization}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    >
                                        {specializations.map((s) => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Consultation Fee (₹)</label>
                                    <input
                                        name="consultationFee"
                                        type="number"
                                        defaultValue={doctor.consultationFee}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Years of Experience</label>
                                    <input
                                        name="yearsOfExperience"
                                        type="number"
                                        defaultValue={doctor.yearsOfExperience}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Currently Working At</label>
                                <input
                                    name="currentlyWorkingAt"
                                    defaultValue={doctor.currentlyWorkingAt}
                                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Professional Bio</label>
                                <textarea
                                    name="professionalBio"
                                    rows={3}
                                    defaultValue={doctor.professionalBio}
                                    className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                />
                            </div>
                        </div>

                        <button
                            className="w-full my-3 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Save Profile
                        </button>
                    </div>

                    {/* Right side preview card */}
                    <div className='w-1/3'>
                        <div className="bg-white border border-slate-200 rounded-2xl p-5">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-2xl mx-auto mb-4">
                                {doctor.fullName?.split(" ").map(n => n[0]).join("")}
                            </div>
                            <div className="text-center">
                                <p className="font-semibold text-slate-900">{doctor.fullName}</p>
                                <p className="text-sm text-slate-500">{doctor.specialization}</p>
                                <p className="text-xs text-slate-400 mt-1">{doctor.currentlyWorkingAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {mainTab === "appointments" && (
                <AppointmentsSection slots={slots} />
            )}
        </>
    )
}