"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { searchDoctors } from "../actions"



export default function SearchSection() {
    const [doctors, setDoctors] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [filters, setFilters] = useState({}) // default empty object
    // Handlers
    const handleSearchChange = (e) => {
        setFilters((prev) => ({ ...prev, name: e.target.value }))
    }

    const handleSpecialization = (spec) => {
        setFilters((prev) => ({ ...prev, specialization: spec }))
    }

    const handleAvailableChange = (e) => {
        setFilters((prev) => ({ ...prev, available: e.target.checked }))
    }

    useEffect(() => {
        const loadDoctors = async () => {
      setLoading(true)
      setError("")
      const res = await searchDoctors(filters)
      if (!res.success) {
        setError(res.message || "Failed to fetch doctors")
        setDoctors([])
      } else {
        setDoctors(res.doctors)
      }
      setLoading(false)
    }
    loadDoctors()
    }, [filters])



    // if (loading) {
    //     return <p className="text-slate-500 text-sm py-4">Loading…</p>
    // }


    return (<>

        <input
        value={filters.name}
        type="text"
        placeholder="write atleast 2 characters"
        className="border px-3 py-2 rounded w-full mb-4"
        onChange={handleSearchChange}
      />

        {/* Specialization buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {["Cardiologist", "Neurologist", "Dermatologist", "Orthopedist",
        "Pediatrician", "Gynecologist", "Ophthalmologist", "ENT Specialist",
        "Psychiatrist", "General Physician", "Dentist", "Radiologist"].map((spec) => (
          <button
            key={spec}
            className={`px-3 py-1 rounded ${
              filters.specialization === spec ? "bg-blue-600 text-white" : "bg-blue-100 hover:bg-blue-200"
            }`}
            onClick={() => handleSpecialization(spec)}
          >
            {spec}
          </button>
        ))}
      </div>


      {/* Available checkbox bound to filters.available */}
      <label className="flex items-center gap-2 mb-4">
        <input type="checkbox" checked={filters.available} onChange={handleAvailableChange} />
        Available
      </label>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* {loading && <p className="text-slate-500 text-sm py-4">Loading…</p>} */}

            {doctors.length === 0 && (
                <p className="text-slate-500 text-sm py-4">No doctors found</p>
            )}

            {loading? <p className="text-slate-500 text-sm py-4">Loading…</p> : doctors.map((doctor) => (
                <div 
                    key={doctor._id}
                    className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between gap-4"
                >
                    <div className="flex items-start gap-4">
                        <div className=" p-5  rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold shrink-0">
                            {doctor.fullName}
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">
                                {doctor.fullName}
                            </p>
                            <p className="text-xs text-blue-600 font-medium mt-0.5">
                                {doctor.specialization}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                                {doctor.currentlyWorkingAt}
                            </p>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <p className="text-xs text-slate-500">
                            {doctor.yearsOfExperience}+ yrs · ₹{doctor.consultationFee}
                        </p>
                        <Link
                            href={`/DoctorDetailPage/${doctor._id}`}
                            className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors"
                        >
                            View Profile
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </>
    )
}
