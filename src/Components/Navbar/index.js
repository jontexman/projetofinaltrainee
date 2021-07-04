import React, { useState, useEffect, useRef } from 'react';
import LogoAzul from '../../assets/logo_azul.png';
import { Container } from './styles';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {IconContext} from 'react-icons';
import { CategoryData } from './CategoryData';
import { PublisherData } from './PublisherData';
import {api} from '../../services/api'
import {useUserContext} from '../../contexts/userContext'


export const Navbar = () => {
    const {user, setUserContext} = useUserContext();

    const firstRenderReg = useRef(true);
    const firstRenderLog = useRef(true);

    const [user_register, setUserRegister] = useState([]);

    useEffect(() =>{
        if (!firstRenderReg.current){
            api.post('users/create', {"user": user_register})
            .then((response) => {
                alert("Registrado com sucessso! Faça login agora")
                console.log(response.data)
                showRegisterbar()
                
            }, (error) => {
                alert("Erro, tente novamente")
                console.log(error)
            })
        }
        firstRenderReg.current = false;
      }, [user_register]);

    const handleSubmitRegister = (Event) => {
        Event.preventDefault();
        let user = {
            'name': Event.target.user.value,
            'email': Event.target.email.value,
            'password': Event.target.password.value,
            'password_confirmation': Event.target.confirm_password.value
        }
        setUserRegister(user);
    }

    const [user_login, setUserLogin] = useState([]);

    useEffect(() =>{
        if (!firstRenderLog.current){
            api.post('users/login', user_login)
            .then((response) => {
                alert("Logado com Sucesso!")
                console.log(response.data)
                setUserContext(response.data)
                showRightbar()
                
            }, (error) => {
                alert("Erro, tente novamente")
                console.log(error)
            })
        }
        firstRenderLog.current = false;
      }, [user_login]);

    const handleSubmitLogin = (Event) => {
        Event.preventDefault();
        let user = {
            'email': Event.target.email.value,
            'password': Event.target.password.value
        }
        setUserLogin(user);
    }

    const logout = () => {
        setUserContext(null)
        showUserbar()
    }

    const [categories, setCategories] = useState([]);

  useEffect(() =>{
    api.get('category/index')
    .then((response) => {setCategories(response.data)})
  }, [])

  const [publishers, setPublishers] = useState([]);

  useEffect(() =>{
    api.get('publishers/index')
    .then((response) => {
        setPublishers(response.data)
    })
  }, [])


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

    const [userbar, setUserbar] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const showUserbar = () =>{ 
        setUserbar(!userbar)
        setIsAdmin(user.is_Admin)
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
                        {categories.map((category) => {
                        return (
                            <li key={category.id} className='nav-text'>
                            <a href={`/category/${category.name}`}>
                                <span>{category.name}</span>
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
                        {publishers.map((publisher) => {
                        return (
                            <li key={publisher.id} className='nav-text'>
                            <a href={`/publisher/${publisher.name}`}>
                                <span>{publisher.name}</span>
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

                
                <a href='#' className='menu-bars-right' onClick={user? showUserbar : showRightbar} >
                    <span>{user? user.name: "Entrar"}</span>
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
                            <form onSubmit={handleSubmitLogin}>
                                <label>Email</label>
                                <input type='email' id='email'/>
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
                            <form className='register' onSubmit={handleSubmitRegister}>
                                <label>Usuário</label>
                                <input type='text' id='user'/>
                                <label>Email</label>
                                <input type='email' id='email'/>
                                <label>Senha</label>
                                <input type='password' id='password'/>
                                <label>Confirmar Senha</label>
                                <input type='password' id='confirm_password'/>
                                <button type='submit'>Registrar</button>
                            </form>
                        </li>
                    </ul>
                </nav>
                <nav className={userbar ? 'nav-menu-right active' : 'nav-menu-right'}>
                    <ul className='nav-menu-items' onClick={showUserbar}>
                        <li className='navbar-toggle'>
                        <a href='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </a>
                        </li>
                        <li className={isAdmin ? 'nav-text' : 'hide'}>
                            <a href='/criar_jogo' >
                                <IoIcons.IoMdAdd />
                                <span>Criar jogo</span>
                            </a>
                        </li>
                        <li className={isAdmin ? 'nav-text' : 'hide'}>
                            <a href='/criar_categoria' >
                                <IoIcons.IoMdAdd />
                                <span>Criar categoria</span>
                            </a>
                        </li>
                        <li className={isAdmin ? 'nav-text' : 'hide'}>
                            <a href='/criar_publisher' >
                                <IoIcons.IoMdAdd />
                                <span>Criar publisher</span>
                            </a>
                        </li>
                        <li className='nav-text'>
                            <a href='/' onClick={logout}>
                                <FiIcons.FiLogOut />
                                <span>Sair</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>



        </Container>
    )
}