import React from 'react'
import {Navigate, Outlet} from 'react-router-dom';

const Protected  = () => {
 const auth = true;

 if(!auth) return <Navigate to ='/signup' />;
 return <Outlet/>;
}

export default Protected