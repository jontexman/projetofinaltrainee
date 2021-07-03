import React, { useState } from 'react';
import LogoAzul from '../../assets/logo_azul.png';
import { Container } from './styles';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {IconContext} from 'react-icons';
import { SidebarData } from './SidebarData';


export const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Container>
            <IconContext.Provider value={{ color: '#fff' }}>
                <a href='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </a>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                        <a href='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </a>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                <a href={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className='logo'>
                    <a href='/'>
                        <p>Hashira</p>
                        <img src={LogoAzul} alt="" />
                        <p>Games</p>
                    </a>
                </div>

                
                
                <button>Usuário</button>
            </IconContext.Provider>
        </Container>
    )
}