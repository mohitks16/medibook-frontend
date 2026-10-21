<directory_structure>
public/
  ambulance.svg
  file.svg
  globe.svg
  Line.svg
  logo-icon.svg
  next.svg
  Rectangle.svg
  Vector.svg
  vercel.svg
  window.svg
src/
  app/
    AppointmentCheckout/
      [...slug]/
        page.js
    DoctorDashboard/
      components/
        AppointmentsSection.jsx
        ProfileSection.jsx
      page.js
    DoctorDetailPage/
      [...slug]/
        page.js
    DoctorLogin/
      components/
        LoginForm.jsx
      actions.js
      page.js
    PatientDashboard/
      components/
        DashboardShell.jsx
        ProfileSection.jsx
      actions.js
      actions.test.js
      page.js
    PatientLogin/
      components/
        actions.js
        AuthController.jsx
        EnterOtp.jsx
        LoginForm.jsx
      page.js
    PatientSignup/
      components/
        OtpVerfication.jsx
        SignupController.jsx
        SignUpForm.jsx
      actions.js
      page.js
    RegisterAsDoctor/
      page.js
    favicon.ico
    layout.js
    page.js
  components/
    Footer.jsx
    Header.jsx
    Header.test.jsx
  lib/
    axios.js
  services/
    appointmentService.js
    authService.js
    doctorService.js
    patientProfileService.js
package.json
README.md
</directory_structure>

<file path="src/app/DoctorDetailPage/[...slug]/page.js">
'use client'
import React, { useState } from 'react'

export default function page() {
  
    const [selectedSlot, setSelectedSlot] = useState(null);

    const slots = [ "10:00 AM" , "12:00 PM" , "2:00 PM" , "4:00 PM" , "6:00 PM" , "8:00 PM" , "10:00 PM" ]; 

  return (
    
    <>

    <div className="px-60">
         <div>
            <button
            //   onClick={() => { setBookingStep("browse"); setSelectedDoc(null); }}
              className="text-sm text-slate-600 hover:text-blue-600 font-medium mb-6 flex items-center gap-1"
            >
              ← Back to search
            </button>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Doctor details card */}
              <div className="lg:col-span-2 space-y-5">
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl shrink-0">
                      {/* {selectedDoc.name.split(" ").slice(1).map((n) => n[0]).join("")} */}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        {/* {selectedDoc.name} */}
                        name goes here
                        </h2>
                      <p className="text-blue-600 font-medium text-sm">
                        {/* {selectedDoc.spec} */}
                        specialization goes here
                        </p>
                      <p className="text-slate-500 text-xs mt-0.5">
                        {/* {selectedDoc.hospital} */}
                        hospital goes here
                        </p>
                      <div className="mt-1.5 flex items-center gap-2 flex-wrap">
                        {/* {selectedDoc.degrees.map((d) => ( */}
                          <span className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-md font-medium">Degrees</span>
                        {/* ))} */}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {/* {selectedDoc.bio} */}
                    Bio goes here
                    </p>
                  {/* Stats row */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <p className="text-lg font-bold text-slate-900">
                        {/* {selectedDoc.exp}+ */}
                        doctor experience
                        </p>
                      <p className="text-xs text-slate-500">Years Exp.</p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <p className="text-lg font-bold text-amber-500">
                        {/* {selectedDoc.rating}★ */}
                        </p>
                      <p className="text-xs text-slate-500">
                        {/* {selectedDoc.reviews} reviews */}
                        number of reviews
                        </p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <p className="text-lg font-bold text-teal-600">
                        {/* ₹{selectedDoc.fee} */}
                        fees in inr
                        </p>
                      <p className="text-xs text-slate-500">Consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking panel: slot selection */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-900 mb-4">Select a Slot</h3>
                <div className="space-y-2 mb-5">
                  {slots.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSlot(s)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm border transition-all 
                        ${selectedSlot === s
                          ? "border-blue-600 bg-blue-50 text-blue-700 font-medium"
                          : "border-slate-200 text-slate-700 hover:border-blue-200"
                        }`}
                    >
                      {s}
                    </button>
                   ))} 
                </div>
                <button
                //   onClick={() => {
                    // if (selectedSlot) setBookingStep("book");
                    // else onNotify("Please select a time slot first.");
                //   }}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}
</file>

<file path="src/app/DoctorLogin/components/LoginForm.jsx">
'use client'

import { useState } from 'react'
import { loginDoctor } from '../actions'
import { useRouter } from 'next/navigation'

export default function LoginForm() {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function handleSubmit(formData) { // handle submit is called when the form is submitted , formData is the data submitted by the form , formData is an object
        setLoading(true)
        setError("")

        const result = await loginDoctor(formData)

        if (result?.error) {
            setError(result.error)
            setLoading(false)
        }
        
        // If success, server action redirects automatically
    }

    return (
        <>
            {error && (
                <div className='bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl my-4'>
                    {error}
                </div>
            )}

            <form className='my-3' action={handleSubmit}>
                <label className='font-semibold'>Username</label>
                <input
                    name="username"
                    className='w-full px-3 my-2 py-2 border-2 border-[#cccccc57] outline-none rounded-xl'
                    placeholder='jane_smith_cardiology'
                    type="text"
                    required
                />

                <label className='font-semibold'>DoctorId</label>
                <input
                    name="doctorId"
                    className='outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl'
                    placeholder='MD-2049-SA'
                    type="text"
                    required
                />

                <label className='font-semibold'>Password</label>
                <input
                    name="password"
                    className='outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl'
                    placeholder='password'
                    type="password"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB] disabled:opacity-50'
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <div className="text-center mt-5">
                    <p>New Doctor ? <span className='text-[#2563EB]'>Register here</span></p>
                </div>
            </form>
        </>
    )
}
</file>

<file path="src/app/PatientDashboard/components/DashboardShell.jsx">
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
</file>

<file path="src/app/PatientDashboard/components/ProfileSection.jsx">
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
</file>

<file path="src/app/PatientDashboard/actions.js">
"use server"

import {
    updatePatientProfileService,
    uploadProfilePictureService,
} from "@/services/patientProfileService"
import { revalidatePath } from "next/cache"


export async function updateProfile(formData) {
    try {
        const fields = {
            fullName: formData.get("fullName"),
            phoneNumber: formData.get("phoneNumber"),
            dateOfBirth: formData.get("dateOfBirth"),
            gender: formData.get("gender"),
            address: formData.get("address"),
            bloodGroup: formData.get("bloodGroup"),
            allergies: formData.get("allergies"),
            medicalHistory: formData.get("medicalHistory"),
        }

        // console.log("Fields are ", fields)

        const res = await updatePatientProfileService(fields)

        if (!res.success) {
            return { success: false, message: res.message }
        }

        revalidatePath("/PatientDashboard")

        return {
            success: true,
            message: res.message,
            patient: res.patient,
        }
    } catch (error) {
        console.log("Error is ", error)
        return {
            success: false,
            message: "An unexpected error occurred",
        }
        
    }
}


export async function uploadProfilePicture(formData) {
    try {

        // console.log("upload profile pitchure from frontend " , formData)
        const res = await uploadProfilePictureService(formData)

        if (!res.success) {
            return { success: false, message: res.message }
        }

        revalidatePath("/PatientDashboard")

        return {
            success: true,
            message: res.message,
            patient: res.patient,
        }
    } catch (error) {
        return {
            success: false,
            message: "An unexpected error occurred",
        }
    }
}
</file>
<file path="src/app/PatientLogin/components/actions.js">
"use server"

import { patienRequestOtp, patientSubmitOtp } from "@/services/authService";
// import { redirect } from "next/dist/server/api-utils";
import { redirect } from "next/navigation"



export async function requestLoginOtp(email) {
    try {

        console.log("Emial is " , email)
        const res = await patienRequestOtp(email) ;


        if(!res.success){
            return { errormessage : res.message }
        }else{
            console.log("actions works successfully ")
        }
        
        return { response : res.success , message : res.message }
        
    } catch (error) {
        return { errormessage : "An Unexpected Error Occured" }
    }
}

export async function verifyLoginOtp(email , otp) {
    try {

        // console.log()
        const res = await patientSubmitOtp(email , otp) ;   


        if(!res.success){
            return { errormessage : res.message }
        }
         redirect("/PatientDashboard")
        // return { status : res.success , message : res.message }

    } catch (error) {
        if (error.digest?.startsWith("NEXT_REDIRECT")) {
            throw error;
        }
        return { errormessage : "An Unexpected Error Occured" }
        // return { errormessage: "An Unexpected Error Occurred" };
    }

    
}
</file>

<file path="src/app/PatientLogin/components/AuthController.jsx">
"use client"
import React, { useState } from 'react'
import EnterOtp from './EnterOtp'
import LoginForm from './LoginForm'


export default function AuthController() {

    const [step , setStep] = useState("login") ; 
    const [email , setEmail] = useState("") ;
    const handleSuccess = (verifiedEmail) => {
        setStep("otp") ; 
        setEmail(verifiedEmail) ;
    }

    return (
    <div>
        {step  === "login" ? 
        
        <LoginForm onSuccess={handleSuccess} />
        
        : <EnterOtp  email={email} />
        }

    </div>
  )
}
</file>

<file path="src/app/PatientLogin/components/EnterOtp.jsx">
"use client"
import React from 'react'
import { verifyLoginOtp } from './actions';

export default function EnterOtp({email}) {

  const handleFormSubmit = async (formData) => {
    const otp = formData.get("otp") ; 
    const res = await verifyLoginOtp(email , otp) ; 
    if(res.status){
      console.log("successfully verified otp") ;
      // redirect to dashboard 
      // router.push("/PatientDashboard")
    } 
  }

  return (
    <div>
      <div className='w-[440px] bg-white py-10 px-15 rounded-2xl '>

                <div className='text-[28px] mb-2 font-bold'>
                    Enter OTP
                </div>

                <form action={handleFormSubmit} className='my-3 grid grid-cols-1 gap-5'>

                    <div className='bg-[#E5E7EB] p-5 rounded-xl'>
                        <p className='text-lg font-semibold'>Enter OTP</p>
                        <p className='text-sm text-gray-500'>An email has been sent to {email} , please enter the OTP</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <label className='font-semibold' htmlFor="otp">OTP</label>
                        <input className='w-full px-3 my-2 py-2 border-2 border-[#cccccc57] outline-none rounded-xl' placeholder='Enter the otp ' type="text" name="otp" id="otp" required />
                    </div>

                    <div className='flex justify-center'>
                        <button type="submit" className='w-full px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                            Submit OTP
                        </button>
                    </div>
                    
                </form>
            </div>
    </div>
  )
}
</file>

<file path="src/app/PatientLogin/components/LoginForm.jsx">
"use client"
import React from 'react'
import { requestLoginOtp } from './actions';

export default function LoginForm({onSuccess}) {

    const handleFormSubmit = async (formData) => {

        const email = formData.get("email");
        console.log("email is : " , email) ;
        const res = await requestLoginOtp(email) ;

        if(res.response){
            console.log("successfully requested otp") ;
            onSuccess(String(email)) ;  
        } 
        
    }

    return (
        <div>
            <div className='w-[440px] bg-white py-10 px-15 rounded-2xl '>

                <div className='text-[28px] mb-2 font-bold'>
                    Patient Login
                </div>

                <form action={handleFormSubmit} className='my-3'>

                    <label className='font-semibold' htmlFor="">Email Id </label>
                    <input  className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' placeholder='Enter your email id' type="email" name="email" id="email" required />

                    <button type="submit" className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                        Request OTP
                    </button>

                    <div className="text-center mt-5">
                        <p>Don't have an account ? <span className='text-[#2563EB]'> Register here </span></p>
                    </div>
                </form>
            </div>
        

        </div>

    

    )
}
</file>

<file path="src/app/PatientSignup/components/OtpVerfication.jsx">
'use client'
import React from 'react'
import { verifySignupOtp } from '../actions';

export default function OtpVerfication({email}) {
     const handleOtpSubmit = async (formData) => {

        const otp = formData.get("otp") ; 

        const res = await verifySignupOtp(email , otp) ;
        
        // const res = await verifyLoginOtp(email , otp) ; 
        
        if(res.status){

          console.log("successfully verified otp") ;

        } 

      }
  return (
      <div>
      <div className='w-[440px] bg-white py-10 px-15 rounded-2xl '>

                <div className='text-[28px] mb-2 font-bold'>
                    Enter OTP
                </div>

                <form action={handleOtpSubmit} className='my-3 grid grid-cols-1 gap-5'>

                    <div className='bg-[#E5E7EB] p-5 rounded-xl'>
                        <p className='text-lg font-semibold'>Enter OTP</p>
                        <p className='text-sm text-gray-500'>An email has been sent to {email} , please enter the OTP</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <label className='font-semibold' htmlFor="otp"> OTP </label>
                        <input className='w-full px-3 my-2 py-2 border-2 border-[#cccccc57] outline-none rounded-xl' placeholder='Enter the otp ' type="text" name="otp" id="otp" required />
                    </div>

                    <div className='flex justify-center'>

                        <button type="submit" className='w-full px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                            Submit OTP
                        </button>

                    </div>
                    
                </form>
            </div>
    </div>
  )
}
</file>

<file path="src/app/PatientSignup/components/SignupController.jsx">
"use client"
import React, { useState } from 'react'
import SignUpForm from './SignUpForm'
import OtpVerfication from './OtpVerfication';

export default function SignupController() {

    const [step, setStep] = useState("login");
    const [email, setEmail] = useState("");
    const handleSuccess = (verifiedEmail) => {
        setStep("otp");
        setEmail(verifiedEmail);
    }
    return ( 
        <div className='w-[440px] bg-white py-10 px-15 rounded-2xl '>

            {step === "login" ?

                <SignUpForm onSuccess={handleSuccess} />

                : <OtpVerfication email={email} />
            }

        </div>
    )
}
</file>

<file path="src/app/PatientSignup/components/SignUpForm.jsx">
"use client"
import Link from 'next/link'
import React from 'react'
import { requestSignupOtp } from '../actions'

export default function SignUpForm({onSuccess}) {

    const handleFormSubmit = async (formData) => {
        const fullName = formData.get("fullName")
        const email = formData.get("email")
        const phoneNumber = formData.get("phoneNumber")

        const res = await requestSignupOtp(fullName , email , phoneNumber) ;

        if(res.status){
            console.log("successfully requested otp") ;
            onSuccess(String(email)) ;  
        }
    }

    return (
        <div>
            <div className='text-[28px] mb-2 font-bold'>
                Patient Signup
            </div>

            <form action={handleFormSubmit} className='my-3'>
                <label className='font-semibold' htmlFor="">Full Name</label>
                <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' required placeholder='Enter your full name' type="text" name="fullName" id="fullName"  />

                <label className='font-semibold' htmlFor="">Gmail Id</label>
                <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' required placeholder='please enter your valid gmail id' type="email" name ="email" />
                
                <label className='font-semibold' htmlFor="">phone number</label>
                <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' required placeholder='please enter your phone number ' type="text" name ="phoneNumber" />

                <button type="submit" className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                    Signup
                </button>

                <div className="text-center mt-5">
                   <p>Already have an account ? <Link href='/PatientLogin'>Login here</Link></p>
                </div>
        
            </form>

        </div>
    )
}
</file>

<file path="src/app/PatientSignup/actions.js">
"use server"
import { patientSignupRequestOtp, patientSignupVerifyOtp } from "@/services/authService";
// import { redirect } from "next/dist/server/api-utils";
import { redirect } from "next/navigation"

export async function requestSignupOtp(fullName, email, phoneNumber) {
    try {

        console.log("<--ACTIONS -->");
        console.log("Emial is  ", email)
        console.log("Phone Number is ", phoneNumber)
        console.log("Full Name is ", fullName)
        const res = await patientSignupRequestOtp(fullName, email, phoneNumber);

        // console.log("response is " , res.data)

        if (!res.success) {
            return { errormessage: res.message }
        } else {
            console.log("actions works successfully ")
        }

        return { status: res.success, message: res.message }

    } catch (error) {
        return { errormessage: "An Unexpected Error Occured" }
    }
    
}

export async function verifySignupOtp(email, otp) {
    try {
        // console.log()
        const res = await patientSignupVerifyOtp(email, otp);

        if (!res.success) {

            return { errormessage: res.message }
        }
        
       

        // return { success: true, message: res.data.message };
    } catch (error) {
        
        return {
            success: false,
            message: error.response?.data?.message || "Failed to submit OTP"
        };
    }

     redirect("/PatientDashboard")
}
</file>

<file path="src/app/RegisterAsDoctor/page.js">
import React from 'react'

export default function page() {
    return (
        <div className='flex justify-center bg-[#E5E7EB] items-center py-10'>
            <div className='w-[640px] bg-white py-10 px-15 rounded-2xl '>
                <div className='text-[28px] mb-2 font-bold'>
                    Register As Doctor
                </div>
                <div className='text-[#6B7280] text-[14px] text-wrap '>
                    Join our platform and connect with thousands of patients. Submit credentials for clinical verification.
                </div>

                <form className='my-3' action="">
                    <label className='font-semibold' htmlFor="">Full name</label>
                    <input className='w-full px-3 my-2 py-2 border-2  border-[#cccccc57] outline-none rounded-xl ' type="text" />

                    <label className='font-semibold' htmlFor="">Email</label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="Email" />

                    <label className='font-semibold' htmlFor="">Phone Number</label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="number" />

                    <div className='flex'>
                        <div>
                            <label className='font-semibold ' htmlFor="">Years of Expereience</label>
                            <input className='  outline-none w-50 px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="number" />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">Specialisation</label>
                            <input className='  outline-none w-50 px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="number" />
                        </div>

                    </div>

                    <label className='font-semibold' htmlFor="">Currently Working at hospital/clinic </label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="text" />

                    <label className='font-semibold' htmlFor="">Education / degree </label>
                    <input className='  outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl ' type="text" />

                    <p className='font-semibold my-3 '> ID & Credential Proof Upload </p>

                    <label className="flex flex-col items-center gap-2 p-6 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer">
                        {/* Icon */}
                        <div className="w-6 h-6">
                            <img src="/vector.svg" alt="Upload Icon" className="w-full h-full" />
                        </div>

                        {/* Title */}
                        <p className="text-sm font-semibold text-blue-600">
                            Upload Certificate PDF / JPEG
                        </p>

                        {/* Subtitle */}
                        <p className="text-xs text-gray-500 text-center">
                            Upload government medical registration proof (Max 10MB)
                        </p>

                        {/* Hidden Input */}
                        <input type="file" accept=".pdf,.jpg,.jpeg" className="hidden" />

                    </label>

                <button className='w-full mt-5 px-5 py-3 text-white font-semibold hover:bg-blue-300 rounded-xl text-center bg-[#2563EB]'>
                        Submit Registration 
                </button>

                </form>
            </div>
        </div>
    )
}
</file>

<file path="src/app/layout.js">
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Medibook",
  description: "Medical booking app",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
         <Header/>
        {children}
        </body>
        <Footer/>
    </html>
  );
}
</file>

<file path="src/services/appointmentService.js">
// code related to appointment related server-side functions
</file>

<file path="src/services/patientProfileService.js">
"use server"

import axios from "@/lib/axios"
import { cookies } from "next/headers"


async function getPatientToken() {
    const cookieStore = await cookies()
    return cookieStore.get("PatientToken")?.value
}


export async function getPatientProfile() {
    try {
        const token = await getPatientToken()

        console.log("Token is ", token)

        if (!token) {
            return {
                success: false,
                message: "No token found",
                status: 401,
            }
        }

        const res = await axios.get("/patient/patientApplication/get-profile", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        console.log("Response is ", res.data)
        return {
            success: true,
            patient: res.data.patient,
        }
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Failed to fetch profile",
            status: error.response?.status,
        }
    }
}


export async function updatePatientProfileService(fields) {
    try {
        const token = await getPatientToken()

        if (!token) {
            return {
                success: false,
                message: "No token found",
                status: 401,
            }
        }

        // console.log(" update Token is ", token)

        const res = await axios.patch(
            "/patient/patientApplication/update-profile",
            fields,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        // console.log("update profile Response is ", res.data)

        return {
            success: true,
            message: res.data.message,
            patient: res.data.patient,
        }
        
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Failed to update profile",
            status: error.response?.status,
        }
    }
}


export async function uploadProfilePictureService(formData) {
    try {
        const token = await getPatientToken()

        // console.log("upload Token is " , token)
        // console.log("upload profile pitchure frontend " , formData)

        // console.log("Token is ", token)

        if (!token) {
            return {
                success: false,
                message: "No token found",
                status: 401,
            }
        }

        const res = await axios.post(
            "/patient/patientApplication/upload-profile-picture",
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }
        )

        return {
            success: true,
            message: res.data.message,
            patient: res.data.patient,
        }
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Failed to upload picture",
            status: error.response?.status,
        }
    }
}
</file>

<file path="src/app/DoctorDashboard/page.js">
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
</file>

<file path="src/app/PatientDashboard/page.js">
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
</file>

<file path="src/app/PatientLogin/page.js">
import React from 'react'
import LoginForm from './components/LoginForm'
import AuthController from './components/AuthController'


export default function page() {
  return (
    
     <div className='flex justify-center bg-[#E5E7EB] items-center py-10 my-3'>
            <AuthController />
        </div>
  )
}
</file>

<file path="src/app/PatientSignup/page.js">
import React from 'react'
import SignupController from './components/SignupController'

export default function page() {
    return (
        <div className='flex justify-center bg-[#E5E7EB] items-center py-10 my-3'>
            <SignupController />
        </div>
    )
}
</file>

<file path="src/app/page.js">
import Image from "next/image";

export default function Home() {

  // console.log(process.env.PRIVATE_BACKEND_API_URL) ; 
  return (

    <>
      {/*-------------------------- Hero Section --------------------------------------- */}
      
      <div className="px-[150px] items-center gap-[100px] bg-[#F3F4F6] flex py-[96px] ">
        <div className="w-3/5" >
          <div className="bg-[#b8c6e5] text-[10px] mb-[24px] inline-block rounded-[7px] font-semibold py-[2px] px-[5px] text-[#2563EB]">
            NOW INTRODUCING INSTANT CONFIRMATION
          </div>
          <div className="font-bold text-[56px] text-wrap mb-[24px]">
            Book Trusted Doctors, Anytime, Anywhere
          </div>
          <div className="text-[#6B7280] text-[18px] text-wrap text-left mb-[24px] " >Skip the waiting room. Connect with certified practitioners, schedule face-to-face appointments, and manage your health seamlessly on the absolute standard healthcare portal.</div>
          <div className="flex justify-start gap-[13px] " >
            <div className=" rounded-[10px] bg-[#2563EB] hover:bg-[#aec0e8] px-5 py-3">Find a Doctor Now </div>
            <div className=" rounded-[10px] hover:bg-[#b9c8e9] shadow-md px-4 py-2 ">How It Works </div>
          </div>
        </div>
        <div className="w-2/5" >

          <Image
            src="/Rectangle.svg"
            alt="Doctor Icon"
            width={520}
            height={400}
            className="rounded-2xl"
          />

        </div>
      </div>
    </>

  );
}
</file>

<file path="src/components/Footer.jsx">
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 px-20 pt-[60px] pb-10 flex flex-col gap-10">
      {/* Top Section */}
      <div className="flex justify-between w-full">
        {/* Logo + Description */}
        <div className="w-80 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 flex items-center justify-center bg-blue-600 rounded-md">
              <Image src="/ambulance.svg" alt="Ambulance Icon" width={14} height={14} />
            </div>
            <div className="text-lg font-bold text-white">MedConnect</div>
          </div>
          
          <p className="text-sm text-gray-500">
            Connecting patients with trusted healthcare professionals instantly.
            Simple scheduling, verified credentials.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-white">For Patients</div>
            <div className="text-[13px] text-gray-500">Search for Doctors</div>
            <div className="text-[13px] text-gray-500">Book Appointments</div>
            <div className="text-[13px] text-gray-500">Patient Portal</div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-white">For Doctors</div>
            <div className="text-[13px] text-gray-500">Join MedConnect</div>
            <div className="text-[13px] text-gray-500">Professional Portal</div>
            <div className="text-[13px] text-gray-500">Guidelines</div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-white">Legal</div>
            <div className="text-[13px] text-gray-500">Privacy Policy</div>
            <div className="text-[13px] text-gray-500">Terms of Use</div>
            <div className="text-[13px] text-gray-500">HIPAA Compliance</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <Image src="/line.svg" alt="Divider Line" width={1280} height={1} />

      {/* Bottom Section */}
      <div className="flex justify-between w-full">
        <p className="text-[13px] text-gray-500">© 2026 MedConnect. All rights reserved.</p>
        <p className="text-[13px] text-gray-500">Providing standard clinical assurance.</p>
      </div>
    </footer>
  );
}
</file>

<file path="src/components/Header.jsx">
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <nav className='max-w-full px-[80px] flex py-4 '>
            <div className='flex gap-[10px] flex-1'>
                <div>
                    <Image
                        src="/logo-icon.svg"
                        alt="Doctor Icon"
                        width={36}
                        height={36}
                    />
                </div>
                <div className='text-[20px] font-bold'>Medibook</div>
            </div>
            <div className='flex flex-1 gap-[16px] items-center'>
                <Link href='/PatientDashboard/123'>
                    <div className='font-semibold text-[14px]' >Search Doctor </div>
                </Link>

                <Link href='/RegisterAsDoctor'>
                    <div className=' hover:bg-blue-300 rounded-[10px] font-semibold text-[14px] text-white bg-[#2563EB] px-4 py-3' >Register as Doctor </div>
                </Link>

                <Link href='/DoctorLogin'>
                    <div className=' hover:bg-blue-300 rounded-[10px] font-semibold text-[14px] text-white bg-[#2563EB] px-4 py-3' >Doctor Login </div>
                </Link>

                <Link href='/PatientLogin'>
                <div className=' hover:bg-blue-300 rounded-[10px] font-semibold text-[14px] text-white bg-[#2563EB] px-4 py-3' >Patient Login </div>
                </Link>

                <Link href='/PatientSignup'>
                <div className=' hover:bg-blue-300 rounded-[10px] font-semibold text-[14px] text-white bg-[#2563EB] px-4 py-3' >Patient Signup</div>
                </Link>

            </div>
        </nav>
    )
}
</file>

<file path="src/lib/axios.js">
import axios from "axios";

const api = axios.create({
    baseURL: process.env.PRIVATE_BACKEND_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
</file>

<file path="src/app/DoctorDashboard/components/AppointmentsSection.jsx">
'use client'

import { useState } from 'react'
import { createSlot, removeSlot } from '../actions'

export default function AppointmentsSection({ slots }) {

    console.log(slots) ; 
    
    const [apptTab, setApptTab] = useState("list")
    const [apptFilter, setApptFilter] = useState("all")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

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
</file>

<file path="src/app/DoctorDashboard/components/ProfileSection.jsx">
'use client'

import { useState } from 'react'
import AppointmentsSection from './AppointmentsSection'
// import { updateDoctorProfile } from '@/services/doctorService';
import { updateProfile } from '../actions';

export default function ProfileSection({ doctor , slots}) {

    // const [doctor, setdoctor] = useState(initialDoctor);
    // const [formKey, setFormKey] = useState(0);
    const [mainTab, setMainTab] = useState("profile")
    const [message, setMessage] = useState({ text: "", type: "" });
    const [loading, setLoading] = useState(false);
    const specializations = [
        "Cardiologist", "Neurologist", "Dermatologist", "Orthopedist",
        "Pediatrician", "Gynecologist", "Ophthalmologist", "ENT Specialist",
        "Psychiatrist", "General Physician", "Dentist", "Radiologist",
    ]

    const handleProfileUpdate = async (e) => {

    e.preventDefault();
    const payload = {
      fullName: e.target.fullName.value,
      specialization: e.target.specialization.value,
      consultationFee: Number(e.target.consultationFee.value),
      yearsOfExperience: Number(e.target.yearsOfExperience.value),
      currentlyWorkingAt: e.target.currentlyWorkingAt.value,
      professionalBio: e.target.professionalBio.value,

    };

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const result = await updateProfile(payload);

      if (result.error) {
        setMessage({ text: result.error, type: "error" });
      } else {
        setMessage({ text: "Profile updated successfully!", type: "success" });
      }
    } catch (err) {
      setMessage({ text: "Something went wrong", type: "error" });
    } finally {
      setLoading(false);
    }
  };
 

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
                    <form onSubmit={handleProfileUpdate} className='w-2/3'>
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
                            type="submit"
                            className="w-full my-3 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Save Profile
                        </button>
                    </form>

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
</file>

<file path="src/app/DoctorLogin/actions.js">
"use server"

import axios from "@/lib/axios"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function loginDoctor(formData) {
    // let redirectPath = null

    try {

        const data = {
            username: formData.get("username"),
            doctorId: formData.get("doctorId"),
            password: formData.get("password")
        }

        const res = await axios.post("/doctor/doctorApplication/login", data)

        // Fix: await cookies() before using .set()
        const cookieStore = await cookies()
        
        cookieStore.set("doctorToken", res.data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 // 1 day
        })

        // console.log(res.data.doctor.id) ;
        // redirectPath = `/DoctorDashboard/${res.data.doctor.id}`
        // redirect(`/DoctorDashboard${res.data.doctor.id}`) 

    } catch (error) {
        const message = error.response?.data?.message || "Login failed. Try again."
        return { error: message }
    }

        redirect("/DoctorDashboard")
    
}
</file>

<file path="src/app/DoctorLogin/page.js">
import LoginForm from './components/LoginForm'

export default function DoctorLoginPage() {
    return (
        <div className='flex justify-center bg-[#E5E7EB] items-center py-10'>
            <div className='w-[440px] bg-white py-10 px-15 rounded-2xl'>
                <div className='text-[28px] mb-2 font-bold'>
                    Doctor login
                </div>
                <div className='text-[#6B7280] text-[14px] text-wrap'>
                    Sign in to access your appointment schedule.
                </div>

                <LoginForm />
            </div>
        </div>
    )
}
</file>

<file path="src/services/authService.js">
"use server"
import axios from "@/lib/axios"
import { cookies } from "next/headers"


// Patient Login and Signup

export async function patienRequestOtp(email) { 
    try { 
        // console.log("Email is , in the service layer " , email)
        const res = await axios.post("/patient/patientApplication/login/request-otp", { email }); 

        // console.log("response is " , res.data)

        return { success: true, message: res.data.message }; 
    } catch (error) { 
        // Returns an object with success: false so the caller knows it failed
        return { 
            success: false, 
            message: error.response?.data?.message || "Failed to request OTP" 
        }; 
    } 
}

export async function patientSubmitOtp(email , otp ){
    try{   
        // console.log("API and  ")
        const res = await axios.post("/patient/patientApplication/login/verify-otp", { email, otp }) ; 

        const cookieStore = await cookies() ; 

        cookieStore.set("PatientToken", res.data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 // 1 day
        }) ;


        return { success: true, message: res.data.message }; 
    } catch (error) { 
        // Returns an object with success: false so the caller knows it failed
        return { 
            success: false, 
            message: error.response?.data?.message || "Failed to submit OTP" 
        };
    }
}

export async function patientSignupRequestOtp(fullName , email , phoneNumber) { 
    try { 

        console.log("<--SERVICE -->") ;

        // console.log("Full Name is , in the service layer " , fullName)
        // console.log("Phone Number is , in the service layer " , phoneNumber)
        // console.log("Email is , in the service layer " , email)

        const res = await axios.post("/patient/patientApplication/signup/request-otp", { fullName , email , phoneNumber }) ;
        
        // console.log("response is " , res.data)
        
        
        return { success: true, message: res.data.message }; 
    } catch (error) { 
        // Returns an object with success: false so the caller knows it failed
        return { 
            success: false, 
            message: error.response?.data?.message || "Failed to request OTP" 
        }; 
    } 
}

export async function patientSignupVerifyOtp(email , otp ){
    try{   
        // console.log("API and  ")
        const res = await axios.post("/patient/patientApplication/signup/verify-otp", { email, otp }) ;

        const cookieStore = await cookies() ; 

        cookieStore.set("PatientToken", res.data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 // 1 day
        }) ;

        // console.log("response is " , res.data)

        return { success: true, message: res.data.message }; 
        
    } catch (error) { 
        // Returns an object with success: false so the caller knows it failed
        return { 
            success: false, 
            message: error.response?.data?.message || "Failed to submit OTP" 
        };
    }
}
</file>

<file path="package.json">
{
  "name": "medibook",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "test": "vitest",
    "test:run": "vitest run",
    "test:ui": "vitest --ui"
  },
  "dependencies": {
    "axios": "^1.20.0",
    "js-cookie": "^3.0.8",
    "next": "16.3.3",
    "react": "19.2.8",
    "react-dom": "19.2.8"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@testing-library/dom": "^10.4.2",
    "@testing-library/jest-dom": "^7.0.1",
    "@testing-library/react": "^16.3.3",
    "@vitejs/plugin-react": "^6.1.2",
    "eslint": "^9",
    "eslint-config-next": "16.3.3",
    "jsdom": "^29.1.1",
    "tailwindcss": "^4",
    "vitest": "^5.0.5"
  }
}
</file>

<file path="src/services/doctorService.js">
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
</file>
</files>
