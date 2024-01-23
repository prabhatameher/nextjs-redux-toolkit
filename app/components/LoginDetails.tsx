"use client"
import React from 'react'
import { useAppSelector } from '../redux/store'

const LoginDetails = () => {
    const authState = useAppSelector(state => state.authReducer.value)
    return (
        authState?.isAuth &&
        <div>
            <p>uid : {authState.uid}</p>
            <p>UserName : {authState.username}</p>
            <p>is Moderator ? : {authState.isModerator ? "Yes" : "No"}</p>
        </div>
    )
}

export default LoginDetails