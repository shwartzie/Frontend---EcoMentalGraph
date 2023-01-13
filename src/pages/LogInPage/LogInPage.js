import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../services/user.service.js";
import { useNavigate } from "react-router-dom";
import { login } from '../../store/actions/userActions.js'
import './design.css'

export const LogInPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const {loggedinUser} = useSelector((state) => state.userModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
        const userToSend = { username, password }
        try {
            await dispatch(login(userToSend))
            navigate('/patient')
        } catch (error) {
            console.log(error)
        }
    }

    const formStyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    };

    const inputStyles = {
        width: "200px",
        height: "30px",
        margin: "10px"
    };

    const labelStyles = {
        width: "200px",
        height: "10px",
        margin: "10px"
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form-container" style={formStyles} >
                <div className=".logo" style={{ textAlign: 'center', fontSize: '30px', marginTop: '50px' }}>Logo</div>
                <br />
                <br />
                <br />
                <label className=".label" style={labelStyles}>
                    Username
                </label>
                <input
                    className="input"
                    type="text"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    style={inputStyles}

                />
                <br />
                <label className=".label" style={labelStyles}>
                    Password
                </label>
                <input
                    className="input"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}

                    style={inputStyles}
                />
                <br />
                <button type="submit" className="form-btn" style={{ width: '200px', height: '30px', margin: '10px' }}>Login</button>
                <br />
                <div className=".forgot-pass">Forgot your password?</div>
            </form>
        </>
    );
};