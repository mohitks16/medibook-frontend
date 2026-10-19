import { describe, test, expect, vi, beforeEach } from 'vitest'
import axios from '@/lib/axios'
import { cookies } from 'next/headers'
import {
    patienRequestOtp,
    patientSubmitOtp,
    patientSignupRequestOtp,
    patientSignupVerifyOtp,
} from './authService'

// Mock axios and cookies
vi.mock('@/lib/axios', () => ({
    default: {
        post: vi.fn(),
    },
}))

vi.mock('next/headers', () => ({
    cookies: vi.fn(),
}))

describe('Auth Service', () => {
    let mockCookieStore

    beforeEach(() => {
        vi.clearAllMocks()
        mockCookieStore = {
            set: vi.fn(),
        }
        cookies.mockResolvedValue(mockCookieStore)
    })

    describe('patienRequestOtp', () => {
        test('successfully requests login otp', async () => {
            axios.post.mockResolvedValue({ data: { message: 'OTP sent' } })

            const result = await patienRequestOtp('test@example.com')

            expect(axios.post).toHaveBeenCalledWith(
                '/patient/patientApplication/login/request-otp',
                { email: 'test@example.com' }
            )
            expect(result).toEqual({ success: true, message: 'OTP sent' })
        })

        test('handles error on request login otp', async () => {
            axios.post.mockRejectedValue({
                response: { data: { message: 'User not found' } },
            })

            const result = await patienRequestOtp('unknown@example.com')

            expect(result).toEqual({ success: false, message: 'User not found' })
        })
    })

    describe('patientSubmitOtp', () => {
        test('successfully submits login otp and sets cookie', async () => {
            axios.post.mockResolvedValue({
                data: { message: 'Login successful', token: 'token-abc' },
            })

            const result = await patientSubmitOtp('test@example.com', '123456')

            expect(axios.post).toHaveBeenCalledWith(
                '/patient/patientApplication/login/verify-otp',
                { email: 'test@example.com', otp: '123456' }
            )
            expect(mockCookieStore.set).toHaveBeenCalledWith(
                'PatientToken',
                'token-abc',
                expect.any(Object)
            )
            expect(result).toEqual({ success: true, message: 'Login successful' })
        })

        test('handles error on submit login otp', async () => {
            axios.post.mockRejectedValue({
                response: { data: { message: 'Invalid OTP' } },
            })

            const result = await patientSubmitOtp('test@example.com', '000000')

            expect(result).toEqual({ success: false, message: 'Invalid OTP' })
        })
    })

    describe('patientSignupRequestOtp', () => {
        test('successfully requests signup otp', async () => {
            axios.post.mockResolvedValue({ data: { message: 'Signup OTP sent' } })

            const result = await patientSignupRequestOtp('John Doe', 'test@example.com', '1234567890')

            expect(axios.post).toHaveBeenCalledWith(
                '/patient/patientApplication/signup/request-otp',
                { fullName: 'John Doe', email: 'test@example.com', phoneNumber: '1234567890' }
            )
            expect(result).toEqual({ success: true, message: 'Signup OTP sent' })
        })

        test('handles error on signup request otp', async () => {
            axios.post.mockRejectedValue({
                response: { data: { message: 'Email already exists' } },
            })

            const result = await patientSignupRequestOtp('John Doe', 'test@example.com', '1234567890')

            expect(result).toEqual({ success: false, message: 'Email already exists' })
        })
    })

    describe('patientSignupVerifyOtp', () => {
        test('successfully verifies signup otp and sets cookie', async () => {
            axios.post.mockResolvedValue({
                data: { message: 'Signup verified', token: 'signup-token-xyz' },
            })

            const result = await patientSignupVerifyOtp('test@example.com', '654321')

            expect(axios.post).toHaveBeenCalledWith(
                '/patient/patientApplication/signup/verify-otp',
                { email: 'test@example.com', otp: '654321' }
            )
            expect(mockCookieStore.set).toHaveBeenCalledWith(
                'PatientToken',
                'signup-token-xyz',
                expect.any(Object)
            )
            expect(result).toEqual({ success: true, message: 'Signup verified' })
        })

        test('handles error on signup verify otp', async () => {
            axios.post.mockRejectedValue({
                response: { data: { message: 'Verification failed' } },
            })

            const result = await patientSignupVerifyOtp('test@example.com', '000000')

            expect(result).toEqual({ success: false, message: 'Verification failed' })
        })
    })
})
