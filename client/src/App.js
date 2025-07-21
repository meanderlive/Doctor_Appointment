import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Homepage from './pages/homepage';
import About from './pages/About';
import Appointment from './pages/Appointment';
import MedicineSchedule from './pages/MedicineSchedule';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { store } from './redux/store/store';
import ProtectedRoute from './components/layout/ProtectRoute';
import Profile from './pages/Profile';
import Covid from './pages/Covid';

function App() {
    console.log('store ', store.getState());

    return (
        <Provider store={store}>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<ProtectedRoute component={Homepage} />} />
                        <Route path="/about-us" element={<ProtectedRoute component={About}/>} />
                        <Route path="/book-appointment" element={<ProtectedRoute component={Appointment}/>} />
                        <Route path="/schedule-medicine" element={<ProtectedRoute component={MedicineSchedule}/>} />
                        <Route path="/profile" element={<ProtectedRoute component={Profile}/>} />
                        <Route path="/covid19" element={<ProtectedRoute component={Covid}/>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/sign-up" element={<SignUp />} />
                    </Routes>
                    <ToastContainer />
                </Router>
            </div>
        </Provider>
    );
}

export default App;
