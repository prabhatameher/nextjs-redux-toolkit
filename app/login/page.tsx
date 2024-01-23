"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, logOut, toggleMode } from '../redux/reducers/auth-slice'
import { AppDispatch, useAppSelector } from '../redux/store'


const Login = () => {
    const [userName, setUserName] = useState('')

    const dispatch = useDispatch<AppDispatch>();
    const authState = useAppSelector((state) => state.authReducer.value)

    console.log("Auth State", authState)

    const onClickLogin = () => {
        dispatch(logIn(userName))
    }
    const onClickLogout = () => {
        dispatch(logOut())

    }
    const onClickToggle = () => {
        dispatch(toggleMode())
    }

    return (
        <div>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='text-black px-2 outline-none' />
            <br />
            <br />

            {!authState.isAuth ?
                <button className='bg-blue-500 px-2 py-1' onClick={onClickLogin}>Login</button>
                : <>
                    <button className='bg-blue-400 px-2 py-1' onClick={onClickLogout}>Logout</button>
                    <br />
                    <br />
                    <button className='bg-blue-600 px-2 py-1' onClick={onClickToggle}>Toggle Mode</button>
                </>
            }
        </div>
    )
}

export default Login