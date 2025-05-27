import React from 'react'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {

    const { isAuthenticated } = useSelector(state => state.userReducer)
    console.log(isAuthenticated);
    return (
        children
    )
}

export default ProtectedRoute