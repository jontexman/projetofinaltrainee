import styled from 'styled-components';

export const Container = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1E2535;
    z-index: 2;

    li span {
        text-decoration: none;
        color: #f5f5f5;
        font-size: 24px;
        font-weight: bold;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;
    }

    .logo a{
        display: flex;
        height: 4rem;
        p {
            color: #fff;
            margin-top: 1.5rem;
            font-size: 20px;
            font: roboto;
            font-weight: bold;
        }
        img {
            height: 4rem;
        }
    }

        
    .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    }

    .nav-menu {
    background-color: #1E2535;
    width: 250px;
    min-height: 100vh;
    height: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    }

    .nav-menu.active {
    left: 0;
    transition: 350ms;
    }

    .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
    }

    .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    }

    .nav-text a:hover {
    background-color: #1a83ff;
    }

    .nav-menu-items {
    width: 100%;
    }

    .navbar-toggle {
    background-color: #1E2535;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
    }

    span {
    margin-left: 16px;
    }

    .menu-bars-right {
    height: 2rem;
    width:auto ;
    padding: 0 0.25rem;
    margin-right: 2rem;
    font-size: 1.25rem;
    background: none;
    border-radius: 5px;
    span{
        font: roboto;
        color: #fff;
    }

    }


    .nav-menu-right {
    background-color: #1E2535;
    width: 250px;
    min-height: 100vh;
    height: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    }

    .nav-menu-right.active {
    right: 0;
    transition: 350ms;
    }

    .nav-text.small a {
    text-decoration: underline;
    color: #f5f5f5;
    font-size: 10px;
    width: 95%;
    height: 100%;
    align-items: center;
    padding: 0 5px;
    border-radius: 4px;
    background-color: none;
    }

    .nav-text.small span {
    color: #f5f5f5;
    font-size: 14px;
    width: 95%;
    height: 100%;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    }

    .nav-text.small a:hover{
        background-color: rgba(0,0,0,0) !important;
    }

    label {
        color: #f5f5f5;
        font-size: 20px;
        width: 100%;
        height: 100%;
        align-items: center;
        position: center;
        padding: 0 16px;
        margin-top: 10rem;
    }
    input{
        height: 25px;
        width: 100%;
        border-radius: 5px;
        font: roboto;
        font-size: 20px;
        margin: none;
        border: none;
    }

    button{
        height: 25px;
        width: 100%;
        border-radius: 5px;
        margin-top:  1rem;
        font: roboto;
        font-size: 20px;
        color: #fff;
        background-color: #243C58;
        border: none;
    }

    button:hover{
        cursor: pointer;
        border: 2px solid white;
    }
    form{
        margin-top: 4rem;
        margin-right: 1.5rem;
    }

    .register{
        margin-top: 10rem;
    }

 



    
`;