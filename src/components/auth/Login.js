import React, {useState} from 'react';
import Logo from '../../images/igloo_2.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const [user, saveUser] = useState({
        email: '',
        password: ''
    }); 
    // const [error, saveError] = useState(false);

    const {email, password} = user;


    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if(user.email === '' && user.password === ''){
            // saveError(true);
            return;
        }
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
            <img className="img-title" src={Logo} alt="igloo-img" />
                <h1 className="title-shadow">IGLÚ</h1>
                <h2><i className="fas fa-sign-in-alt"></i> Iniciar sessi&oacute;</h2>

                <form onSubmit={onSubmit}>
                    {/* EMAIL */}
                    <div className="campo-form">
                        <i className="far fa-user"></i>
                        <input 
                            type="email"
                            className="loginUser"
                            id="email"
                            name="email"
                            placeholder="Correu electrònic o usuari"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    {/* PASSWORD */}
                    <div className="campo-form">
                        <i className="fas fa-unlock-alt"></i>
                        <input 
                            type="password"
                            className="loginPass"
                            id="password"
                            name="password"
                            placeholder="Contrasenya"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <Link to={'/'} className="enlace-cuenta-2">
                        Has oblidat la teva contrasenya?
                    </Link>

                    {/* SUBMIT */}
                    <div className="campo-form">
                        <Link to={'/main-page'} className="btn-block">
                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Accedir"
                            />
                        </Link>
                    </div>
                </form>
                {/* LINK NEW ACCOUNT */}
                <Link to={'/new-account'} className="enlace-cuenta">
                    No tens un compte? Registra't aqu&iacute;
                </Link>
            </div>
        </div>
    );
};

export default Login;