import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
    const token = localStorage.getItem('t_A1b2C3d');
    const user = JSON.parse(token);

    return (
        user && user.email ? <Component/> : <Navigate to="/login" />
            
         
    );
};

export default ProtectedRoute;
