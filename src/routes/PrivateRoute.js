import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(user && user.uid){
        return children;
    }
    if(loading){
        return <div className="container  d-flex justify-content-center item-center" ><Spinner animation="border" /></div>;
    }

    return <Navigate to='/login'></Navigate>;
};
export default PrivateRoute;