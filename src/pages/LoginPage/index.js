import React from 'react';
import {Container} from './styles'
export const Login_page = () => {
    return (
        <Container>
        <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form>
            <label>
            <p>Email</p>
            <input type="text" />
            </label>
            <label>
            <p>Password</p>
            <input type="password" />
            </label>
            <div>
            <button type="submit">Submit</button>
            </div>
        </form>
        </div>
    </Container>
    );
}