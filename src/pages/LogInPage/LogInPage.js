import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../services/user.service.js";
import { useNavigate } from "react-router-dom";
import { login } from '../../store/actions/userActions.js';
export const LogInPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        // Perform login logic here, such as sending a request to a backend
        console.log(`Username: ${username}, Password: ${password}`);
        const userToSend = { username, password };
        try {
            await dispatch(login(userToSend));
            navigate('/patient');

        } catch (error) {
            console.log(error);
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

    return (
        <>
            <div style={{ textAlign: 'center', fontSize: '30px', marginTop: '50px' }}> LOGIN</div>
            <form onSubmit={handleSubmit} style={formStyles}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        style={inputStyles}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        style={inputStyles}
                    />
                </label>
                <br />
                <button type="submit" style={{ width: '200px', height: '30px', margin: '10px' }}>Login</button>
            </form>
        </>
    );
};