import React, { useState } from 'react';
import LogoAzul from '../../assets/logo_azul.png';
import { Container } from './styles';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {IconContext} from 'react-icons';
import { CategoryData } from './CategoryData';
import { PublisherData } from './PublisherData';


export const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [categorybar, setCategorybar] = useState(false);
    const showCategorybar = () => {
        setCategorybar(!categorybar)
        setSidebar(!sidebar)
    };

    const [publisherbar, setPublisherbar] = useState(false);
    const showPublisherbar = () => {
        setPublisherbar(!publisherbar)
        setSidebar(!sidebar)
    };

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
                        <li className='nav-text'>
                            <a href='/'>
                                <AiIcons.AiFillHome />
                                <span>Home</span>
                            </a>
                        </li>
                        <li className='nav-text' onClick={showCategorybar}>
                            <a href='#'>
                                <IoIcons.IoIosPaper />
                                <span>Categorias</span>
                            </a>
                        </li>
                        <li className='nav-text' onClick={showPublisherbar}>
                            <a href='#'>
                                <IoIcons.IoMdPeople />
                                <span>Publicadoras</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className={categorybar ? 'nav-menu active' : 'nav-menu'}>                    <ul className='nav-menu-items' onClick={showCategorybar}>
                        <li className='navbar-toggle'>
                        <a href='#' className='menu-bars'>
                            <FiIcons.FiArrowLeft />
                        </a>
                        </li>
                        {CategoryData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                            <a href={item.path}>
                                <span>{item.title}</span>
                            </a>
                            </li>
                        );
                        })}
                    </ul>
                </nav>
                <nav className={publisherbar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showPublisherbar}>
                        <li className='navbar-toggle'>
                        <a href='#' className='menu-bars'>
                            <FiIcons.FiArrowLeft />
                        </a>
                        </li>
                        {PublisherData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                            <a href={item.path}>
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