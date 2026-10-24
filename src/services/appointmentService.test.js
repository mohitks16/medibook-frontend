import { describe, test, expect, vi, beforeEach } from 'vitest'
import axios from '@/lib/axios'
import { cookies } from 'next/headers'
import {
    getSlotByIdService,
    createAppointmentService,
} from './appointmentService'

vi.mock('@/lib/axios', () => ({
    default: {
        get: vi.fn(),
        post: vi.fn(),
    },
}))

vi.mock('next/headers', () => ({
    cookies: vi.fn(),
}))

describe('Appointment Service', () => {
    let mockCookieStore

    beforeEach(() => {
        vi.clearAllMocks()
        mockCookieStore = {
            get: vi.fn(),
        }
        cookies.mockResolvedValue(mockCookieStore)
    })

    describe('getSlotByIdService', () => {
        test('returns 401 when no token is found', async () => {
            mockCookieStore.get.mockReturnValue(undefined)

            const result = await getSlotByIdService('slot-123')

            expect(result).toEqual({
                success: false,
                status: 401,
                message: 'No token found',
            })
        })

        test('successfully fetches slot by id', async () => {
            mockCookieStore.get.mockReturnValue({ value: 'mock-token' })
            axios.get.mockResolvedValue({
                data: { slot: { id: 'slot-123', time: '10:00 AM' } },
            })

            const result = await getSlotByIdService('slot-123')

            expect(axios.get).toHaveBeenCalledWith(
                '/patient/patientApplication/slots/slot-123',
                {
                    headers: {
                        Authorization: 'Bearer mock-token',
                    },
                }
            )
            expect(result).toEqual({
                success: true,
                slot: { id: 'slot-123', time: '10:00 AM' },
            })
        })

        test('handles error on fetch slot by id', async () => {
            mockCookieStore.get.mockReturnValue({ value: 'mock-token' })
            axios.get.mockRejectedValue({
                response: { status: 404, data: { message: 'Slot not found' } },
            })

            const result = await getSlotByIdService('slot-123')

            expect(result).toEqual({
                success: false,
                status: 404,
                message: 'Slot not found',
            })
        })
    })

    describe('createAppointmentService', () => {
        test('returns 401 when no token is found', async () => {
            mockCookieStore.get.mockReturnValue(undefined)

            const result = await createAppointmentService('slot-123')

            expect(result).toEqual({
                success: false,
                status: 401,
                message: 'No token found',
            })
        })

        test('successfully creates appointment', async () => {
            mockCookieStore.get.mockReturnValue({ value: 'mock-token' })
            axios.post.mockResolvedValue({
                data: { appointment: { id: 'appt-1', status: 'confirmed' } },
            })

            const result = await createAppointmentService('slot-123')

            expect(axios.post).toHaveBeenCalledWith(
                '/patient/patientApplication/appointments/create',
                { slotId: 'slot-123' },
                {
                    headers: {
                        Authorization: 'Bearer mock-token',
                    },
                }
            )
            expect(result).toEqual({
                success: true,
                appointment: { id: 'appt-1', status: 'confirmed' },
            })
        })

        test('handles error on create appointment', async () => {
            mockCookieStore.get.mockReturnValue({ value: 'mock-token' })
            axios.post.mockRejectedValue({
                response: { status: 400, data: { message: 'Slot already booked' } },
            })

            const result = await createAppointmentService('slot-123')

            expect(result).toEqual({
                success: false,
                status: 400,
                message: 'Slot already booked',
            })
        })
    })
})
