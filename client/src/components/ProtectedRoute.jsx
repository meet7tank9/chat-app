import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

    const { isAuthenticated, screenLoading } = useSelector(state => state.userReducer)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated && !screenLoading) {
            navigate("/login")
        }
        // console.log(isAuthenticated, screenLoading);
    }, [isAuthenticated, screenLoading])

    return (
        children
    )
}

export default ProtectedRoute