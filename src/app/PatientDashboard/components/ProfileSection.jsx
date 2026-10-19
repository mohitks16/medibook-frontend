"use client"

import { useActionState } from "react"
import { updateProfile, uploadProfilePicture } from "../actions"

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

// function toDateInputValue(date) {
//     if (!date) return ""
//     try {
//         return new Date(date).toISOString().split("T")[0]
//     } catch {
//         return ""
//     }
// }

function getInitials(name) {
    if (!name) return "?"
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
}

export default function ProfileSection({ patient }) {

    const [profileState, profileFormAction, isSaving] = useActionState(
        async (prev, formData) => await updateProfile(formData),
        null
    )

    const [uploadState, uploadFormAction, isUploading] = useActionState(
        async (prev, formData) => await uploadProfilePicture(formData),
        null
    )

    console.log("Patient is ", patient)

    return (
        <div className="flex gap-6">
            {/* Left: Profile Form */}
            <div className="w-2/3">
                <form
                    action={profileFormAction}
                    className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5"
                >
                    <h2 className="font-semibold text-slate-900">Profile Information</h2>

                    {/* Full Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                Full Name
                            </label>
                            <input
                                name="fullName"
                                defaultValue={patient.fullName || ""}
                                required
                                className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                Email (cannot be changed)
                            </label>
                            <input
                                defaultValue={patient.email || ""}
                                disabled
                                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-slate-50 text-slate-500 cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Phone + DOB */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                Phone Number
                            </label>
                            <input
                                name="phoneNumber"
                                type="text"
                                defaultValue={patient.phoneNumber || ""}
                                className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                Date of Birth
                            </label>
                            <input
                                name="dateOfBirth"
                                type="date"
                                defaultValue={
                                    patient.dateOfBirth
                                        ? new Date(patient.dateOfBirth).toISOString().split("T")[0]
                                        : ""
                                }
                                className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>
                    </div>

                    {/* Gender + Blood Group */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                Gender
                            </label>
                            <select
                                name="gender"
                                defaultValue={patient.gender || ""}
                                className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            >
                                <option value="">Not specified</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                Blood Group
                            </label>
                            <select
                                name="bloodGroup"
                                defaultValue={patient.bloodGroup || ""}
                                className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            >
                                <option value="">Not specified</option>
                                {bloodGroups.map((bg) => (
                                    <option key={bg} value={bg}>
                                        {bg}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Address
                        </label>
                        <textarea
                            name="address"
                            rows={2}
                            defaultValue={patient.address || ""}
                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    {/* Allergies */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Allergies
                        </label>
                        <textarea
                            name="allergies"
                            rows={2}
                            defaultValue={patient.allergies || ""}
                            placeholder="e.g. Penicillin, peanuts"
                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    {/* Medical History */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Medical History
                        </label>
                        <textarea
                            name="medicalHistory"
                            rows={3}
                            defaultValue={patient.medicalHistory || ""}
                            placeholder="e.g. Hypertension since 2020, no surgeries"
                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    {/* Feedback */}
                    {profileState?.message && (
                        <p
                            className={`text-sm font-medium ${profileState.success ? "text-teal-600" : "text-red-500"
                                }`}
                        >
                            {profileState.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSaving}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isSaving ? "Saving..." : "Save Profile"}
                    </button>
                </form>
            </div>

            {/* Right: Preview + Upload */}
            <div className="w-1/3">
                <div className="bg-white border border-slate-200 rounded-2xl p-5">
                    {/* Avatar */}
                    {patient.profilePicture ? (
                        <img
                            src={patient.profilePicture}
                            alt="Profile"
                            className="w-20 h-20 rounded-full object-cover mx-auto"
                        />
                    ) : (
                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-2xl mx-auto">
                            {getInitials(patient.fullName)}
                        </div>
                    )}

                    <div className="text-center mt-3">
                        <p className="font-semibold text-slate-900">{patient.fullName}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{patient.email}</p>
                    </div>

                    {/* Upload form */}
                    <form
                        action={uploadFormAction}
                        className="mt-5 pt-4 border-t border-slate-100"
                    >
                        <label className="block text-xs font-semibold text-slate-700 mb-2">
                            Update Profile Picture
                        </label>
                        <input
                            type="file"
                            name="profilePicture"
                            accept="image/*"
                            className="block w-full text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />

                        {uploadState?.message && (
                            <p
                                className={`text-xs font-medium mt-2 ${uploadState.success ? "text-teal-600" : "text-red-500"
                                    }`}
                            >
                                {uploadState.message}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isUploading}
                            className="w-full mt-3 bg-slate-800 text-white py-2 rounded-lg text-sm font-semibold hover:bg-slate-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isUploading ? "Uploading..." : "Upload"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}