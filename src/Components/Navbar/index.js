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
    const showSidebar = () =>{ 
        setRightbar(false)
        setRegisterbar(false)
        setSidebar(!sidebar)
    };

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

    const [rightbar, setRightbar] = useState(false);
    const showRightbar = () => {
        setSidebar(false)
        setRightbar(!rightbar)
    };

    const [registerbar, setRegisterbar] = useState(false);
    const showRegisterbar = () => {
        setRegisterbar(!registerbar)
        setRightbar(!rightbar)
    };
    const closeRegisterbar = () => setRegisterbar(false);

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
                                <span>Publishers</span>
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

                
                <a href='#' className='menu-bars-right' onClick={showRightbar} >
                    <span>Entrar</span>
                    <AiIcons.AiOutlineUser className='hide-small'/>
                </a>
                <nav className={rightbar ? 'nav-menu-right active' : 'nav-menu-right'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'  >
                        <a href='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose onClick={showRightbar}/>
                        </a>
                        <span>Entrar</span>
                        </li>
                        <li className='nav-text small'>
                                <span>Não é cadastrado? <a onClick={showRegisterbar}>Registre-se</a></span>
                        </li>
                        <li className='nav-text'>
                            <form>
                                <label>Usuário/Email</label>
                                <input type='text' id='user'/>
                                <label>Senha</label>
                                <input type='password' id='password'/>
                                <button type='submit'>Entrar</button>
                            </form>
                        </li>
                    </ul>
                </nav>
                <nav className={registerbar ? 'nav-menu-right active' : 'nav-menu-right'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'  >
                        <a href='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose onClick={closeRegisterbar}/>
                        </a>
                        <span>Registrar</span>
                        </li>
                        <li className='nav-text small'>
                                <span>Já é cadastrado? <a onClick={showRegisterbar}>Entrar</a></span>
                        </li>
                        <li className='nav-text'>
                            <form className='register'>
                                <label>Usuário</label>
                                <input type='text' id='user'/>
                                <label>Email</label>
                                <input type='email' id='email'/>
                                <label>Senha</label>
                                <input type='password' id='password'/>
                                <label>Confirmar Senha</label>
                                <input type='password' id='confirm-password'/>
                                <button type='submit'>Registrar</button>
                            </form>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>



        </Container>
    )
}