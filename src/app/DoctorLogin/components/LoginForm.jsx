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

