import { describe, test, expect, vi, beforeEach } from 'vitest'
import { updateProfile, uploadProfilePicture } from './actions'
import {
    updatePatientProfileService,
    uploadProfilePictureService,
} from '@/services/patientProfileService'
import { revalidatePath } from 'next/cache'

// Mock dependencies
vi.mock('@/services/patientProfileService', () => ({
    updatePatientProfileService: vi.fn(),
    uploadProfilePictureService: vi.fn(),
}))

vi.mock('next/cache', () => ({
    revalidatePath: vi.fn(),
}))

describe('Patient Dashboard Actions', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    describe('updateProfile', () => {
        // Test case: successfully updates profile and revalidates path
        test('successfully updates profile when service succeeds', async () => {
            const formData = new FormData()
            formData.append('fullName', 'John Doe')
            formData.append('phoneNumber', '1234567890')
            formData.append('dateOfBirth', '1990-01-01')
            formData.append('gender', 'male')
            formData.append('address', 'Test Address')
            formData.append('bloodGroup', 'O+')
            formData.append('allergies', 'None')
            formData.append('medicalHistory', 'None')

            const mockPatient = { fullName: 'John Doe' }
            updatePatientProfileService.mockResolvedValue({
                success: true,
                message: 'Profile updated',
                patient: mockPatient,
            })

            const result = await updateProfile(formData)

            expect(updatePatientProfileService).toHaveBeenCalledWith({
                fullName: 'John Doe',
                phoneNumber: '1234567890',
                dateOfBirth: '1990-01-01',
                gender: 'male',
                address: 'Test Address',
                bloodGroup: 'O+',
                allergies: 'None',
                medicalHistory: 'None',
            })
            expect(revalidatePath).toHaveBeenCalledWith('/PatientDashboard')
            expect(result).toEqual({
                success: true,
                message: 'Profile updated',
                patient: mockPatient,
            })
        })

        // Test case: returns failure when service fails
        test('returns failure message when update service fails', async () => {
            const formData = new FormData()
            updatePatientProfileService.mockResolvedValue({
                success: false,
                message: 'Update failed',
            })

            const result = await updateProfile(formData)

            expect(result).toEqual({
                success: false,
                message: 'Update failed',
            })
            expect(revalidatePath).not.toHaveBeenCalled()
        })

        // Test case: handles unexpected errors gracefully
        test('handles unexpected errors during updateProfile', async () => {
            const formData = new FormData()
            updatePatientProfileService.mockRejectedValue(new Error('Network error'))

            const result = await updateProfile(formData)

            expect(result).toEqual({
                success: false,
                message: 'An unexpected error occurred',
            })
        })
    })

    describe('uploadProfilePicture', () => {
        // Test case: successfully uploads profile picture and revalidates path
        test('successfully uploads profile picture when service succeeds', async () => {
            const formData = new FormData()
            const mockPatient = { profilePicture: 'url' }
            uploadProfilePictureService.mockResolvedValue({
                success: true,
                message: 'Picture uploaded',
                patient: mockPatient,
            })

            const result = await uploadProfilePicture(formData)

            expect(uploadProfilePictureService).toHaveBeenCalledWith(formData)
            expect(revalidatePath).toHaveBeenCalledWith('/PatientDashboard')
            expect(result).toEqual({
                success: true,
                message: 'Picture uploaded',
                patient: mockPatient,
            })
        })

        // Test case: returns failure when upload service fails
        test('returns failure when upload service fails', async () => {
            const formData = new FormData()
            uploadProfilePictureService.mockResolvedValue({
                success: false,
                message: 'Upload failed',
            })

            const result = await uploadProfilePicture(formData)

            expect(result).toEqual({
                success: false,
                message: 'Upload failed',
            })
        })

        // Test case: handles unexpected errors during uploadProfilePicture
        test('handles unexpected errors during uploadProfilePicture', async () => {
            const formData = new FormData()
            uploadProfilePictureService.mockRejectedValue(new Error('Error'))

            const result = await uploadProfilePicture(formData)

            expect(result).toEqual({
                success: false,
                message: 'An unexpected error occurred',
            })
        })
    })
})
