import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
    const [user, saveUser] = useState({
        name: '',
        school: '',
        email: '',
        password: '',
        confirmation: ''
    }); 

    const {name, email, password, confirmation} = user;


    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //Validar

        //Password min 6 carac.

        //Passwords iguales

        //Pasar al action

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1><i className="fas fa-user-plus"></i> Crea un compte</h1>

                <form onSubmit={onSubmit}>
                    {/* NAME */}
                    <div className="campo-form">
                        <i className="far fa-user"></i>
                        <input 
                            type="text"
                            className="userInput"
                            id="name"
                            name="name"
                            placeholder="Introdueix el teu nom"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                    {/* SCHOOL */}
                    <div className="campo-select">
                        <i className="graduation fas fa-graduation-cap"></i>
                        <select id="school" name="school" onChange={onChange}>
                            <option defaultValue>Selecciona la teva escola</option>
                            <option value="">Escola Sant Medir</option>
                            <option value="">Escola Mare de Déu del Roser - Les Planes</option>
                            <option value="">Escola Sant Josep Oriol</option>
                            <option value="">Escola Bon Pastor</option>
                        </select>
                    </div>
                    {/* EMAIL */}
                    <div className="campo-form">
                        <i className="far fa-envelope"></i>
                        <input 
                            type="email"
                            className="emailInput"
                            id="email"
                            name="email"
                            placeholder="Introdueix el teu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    {/* PASSWORD */}
                    <div className="campo-form">
                        <i className="fa fa-unlock-alt"></i>
                        <input 
                            type="password"
                            className="passwordInput"
                            id="password"
                            name="password"
                            placeholder="Introdueix una contrasenya"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <i className="fas fa-redo-alt"></i>
                        <input 
                            type="password"
                            className="repeatInput"
                            id="confirmation"
                            name="confirmation"
                            placeholder="Repeteix la contrasenya"
                            value={confirmation}
                            onChange={onChange}
                        />
                    </div>
                    {/* SUBMIT */}
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrar-se"
                        />
                    </div>
                </form>
                
                <Link to={'/'} className="enlace-cuenta">
                    Tornar a 'Iniciar sessió'
                </Link>

            </div>
        </div>
    );
};

export default NewAccount;