import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import appointmentRoutes from './routes/apointment.js';
import doctorRoutes from './routes/doctor.js'
import medicineScheduleRoutes from './routes/medicineSchedule.js'

dotenv.config();
const app = express();
const port = process.env.PORT 



// Database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message); 
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/medicineSchedule", medicineScheduleRoutes)



// Start server
app.listen(port, () => {
    console.log('Server listening on port', port);
});
