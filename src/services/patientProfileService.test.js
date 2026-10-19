import { describe, test, expect, vi, beforeEach } from 'vitest'
import axios from '@/lib/axios'
import { cookies } from 'next/headers'
import {
    getPatientProfile,
    updatePatientProfileService,
    uploadProfilePictureService,
} from './patientProfileService'

// Mock axios instance and next/headers cookies
vi.mock('@/lib/axios', () => ({
    default: {
        get: vi.fn(),
        patch: vi.fn(),
        post: vi.fn(),
    },
}))

vi.mock('next/headers', () => ({
    cookies: vi.fn(),
}))

describe('Patient Profile Service', () => {
    let mockCookieStore

    beforeEach(() => {
        vi.clearAllMocks()
        mockCookieStore = {
            get: vi.fn(),
        }
        cookies.mockResolvedValue(mockCookieStore)
    })

    describe('getPatientProfile', () => {
        // Test case: returns 401 error when no PatientToken cookie is present
        test('returns failure when no token cookie exists', async () => {
            mockCookieStore.get.mockReturnValue(undefined)

            const result = await getPatientProfile()

            expect(result.success).toBe(false)
            expect(result.status).toBe(401)
            expect(result.message).toBe('No token found')
        })

        // Test case: successfully fetches patient profile when token exists
        test('successfully fetches patient profile when valid token exists', async () => {
            mockCookieStore.get.mockReturnValue({ value: 'mock-token-123' })
            const mockPatient = { fullName: 'John Doe', email: 'john@example.com' }
            axios.get.mockResolvedValue({ data: { patient: mockPatient } })

            const result = await getPatientProfile()

            expect(mockCookieStore.get).toHaveBeenCalledWith('PatientToken')
            expect(axios.get).toHaveBeenCalledWith(
                '/patient/patientApplication/get-profile',
                {
                    headers: { Authorization: 'Bearer mock-token-123' },
                }
            )
            expect(result.success).toBe(true)
            expect(result.patient).toEqual(mockPatient)
        })

        // Test case: handles axios API errors gracefully
        test('handles API errors during profile fetch', async () => {
            mockCookieStore.get.mockReturnValue({ value: 'mock-token-123' })
            const error = {
                response: {
                    status: 500,
                    data: { message: 'Server error' },
                },
            }
            axios.get.mockRejectedValue(error)

            const result = await getPatientProfile()

            expect(result.success).toBe(false)
            expect(result.status).toBe(500)
            expect(result.message).toBe('Server error')
        })
    })

    describe('updatePatientProfileService', () => {
        // Test case: returns 401 error when no token is present during update
        test('returns failure when no token cookie exists on update', async () => {
            mockCookieStore.get.mockReturnValue(undefined)

            const result = await updatePatientProfileService({ fullName: 'Updated Name' })

            expect(result.success).toBe(false)
            expect(result.status).toBe(401)
            expect(result.message).toBe('No token found')
        })

        // Test case: successfully updates patient profile fields
        test('successfully updates patient profile with fields', async () => {
            mockCookieStore.get.mockReturnValue({ value: 'mock-token-123' })
            const updatedFields = { fullName: 'Jane Doe', phoneNumber: '9876543210' }
            const mockUpdatedPatient = { ...updatedFields }
            axios.patch.mockResolvedValue({
                data: {
                    message: 'Profile updated successfully',
                    patient: mockUpdatedPatient,
                },
            })

            const result = await updatePatientProfileService(updatedFields)

            expect(axios.patch).toHaveBeenCalledWith(
                '/patient/patientApplication/update-profile',
                updatedFields,
                {
                    headers: { Authorization: 'Bearer mock-token-123' },
                }
            )
            expect(result.success).toBe(true)
            expect(result.message).toBe('Profile updated successfully')
            expect(result.patient).toEqual(mockUpdatedPatient)
        })

        // Test case: handles patch API error during update
        test('handles API errors during profile update', async () => {
            mockCookieStore.get.mockReturnValue({ value: 'mock-token-123' })
            const error = {
                response: {
                    status: 400,
                    data: { message: 'Validation failed' },
                },
            }
            axios.patch.mockRejectedValue(error)

            const result = await updatePatientProfileService({ fullName: '' })

            expect(result.success).toBe(false)
            expect(result.status).toBe(400)
            expect(result.message).toBe('Validation failed')
        })
    })

    describe('uploadProfilePictureService', () => {
        // Test case: returns 401 error when no token is present during upload
        test('returns failure when no token cookie exists on upload', async () => {
            mockCookieStore.get.mockReturnValue(undefined)

            const formData = new FormData()
            const result = await uploadProfilePictureService(formData)

            expect(result.success).toBe(false)
            expect(result.status).toBe(401)
            expect(result.message).toBe('No token found')
        })

        // Test case: successfully uploads profile picture formData
        test('successfully uploads profile picture', async () => {
            mockCookieStore.get.mockReturnValue({ value: 'mock-token-123' })
            const formData = new FormData()
            const mockPatient = { profilePicture: 'url' }
            axios.post.mockResolvedValue({
                data: {
                    message: 'Picture uploaded successfully',
                    patient: mockPatient,
                },
            })

            const result = await uploadProfilePictureService(formData)

            expect(axios.post).toHaveBeenCalledWith(
                '/patient/patientApplication/upload-profile-picture',
                formData,
                {
                    headers: {
                        Authorization: 'Bearer mock-token-123',
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
            expect(result.success).toBe(true)
            expect(result.message).toBe('Picture uploaded successfully')
            expect(result.patient).toEqual(mockPatient)
        })
    })
})
