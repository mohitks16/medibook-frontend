'use client'
import React, { useState } from 'react'
import axios from '@/lib/axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function page() {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")



        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        try {
            const res = await axios.post("/doctor/doctorApplication/login", data)

            // console.log(res.data.token) ; 

            
             Cookies.set("doctorToken", res.data.token) 
            //  console.log("Login Successful") ; 
            router.push(`/DoctorDashboard/${res.data.doctor.id}`)

        } catch (err) {
            setError(err.response?.data?.message || "Login failed. Try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex justify-center bg-[#E5E7EB] items-center py-10'>
            <div className='w-[440px] bg-white py-10 px-15 rounded-2xl'>
                <div className='text-[28px] mb-2 font-bold'>
                    Doctor login
                </div>
                <div className='text-[#6B7280] text-[14px] text-wrap'>
                    Sign in to access your appointment schedule.
                </div>

                {error && (
                    <div className='bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl my-4'>
                        {error}
                    </div>
                )}

                <form className='my-3' onSubmit={handleSubmit}>
                    <label className='font-semibold'>Username</label>
                    <input
                        name="username"
                        className='w-full px-3 my-2 py-2 border-2 border-[#cccccc57] outline-none rounded-xl'
                        placeholder='jane_smith_cardiology'
                        type="text"
                    />

                    <label className='font-semibold'>DoctorId</label>
                    <input
                        name="doctorId"
                        className='outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl'
                        placeholder='MD-2049-SA'
                        type="text"
                    />

                    <label className='font-semibold'>Password</label>
                    <input
                        name="password"
                        className='outline-none w-full px-3 my-2 py-2 border-2 border-[#cccccc57] rounded-xl'
                        placeholder='password'
                        type="password"
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
            </div>
        </div>
    )
}