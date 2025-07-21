import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../slice/user'
import AppointmentSlice from '../slice/appointment'
import MedicineScheduleSlice from '../slice/medicineSchedule'

export const store = configureStore({
  reducer: {
    user: userSlice,
    appointment: AppointmentSlice,
    medicineSchedule: MedicineScheduleSlice,
  },
})
