import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="form-usuario">
            <div className="contenedor-mainpage sombra-dark">
                <h1>A on vols anar?</h1>
                    <div className="item-container">
                        <Link to={'/feed'}>
                            <button className="btn item"><i className="fas fa-users fa-3x size"></i><h3>Perfils</h3></button>
                        </Link>
                        <Link to={'/chat'}>
                            <button className="btn item"><i className="fas fa-comments fa-3x size"></i><h3>Xat</h3></button>
                        </Link>
                    </div>

                    <div className="item-container">
                    <Link to={'/video'}> 
                        <button className="btn item"><i className="fas fa-video fa-3x size"></i><h3>Videotrucada</h3></button>
                    </Link>
                    <Link to={'/resources'}>
                        <button className="btn item"><i className="fas fa-paperclip fa-3x size"></i><h3>Recursos</h3></button>
                    </Link>
                    </div>  

                      
                    <Link to={'/'} className="enlace-cuenta">
                        Tornar a 'Iniciar sessió'
                    </Link>
            </div>
        </div>
    );
};

export default MainPage;