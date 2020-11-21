import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/kid2.jpg';
import Image2 from '../../images/kid1.jpg';
import Image3 from '../../images/kid3.jpg';
import Image4 from '../../images/kid4.jpg';

const Chat = () => {
    return (
        <div className="main-container">
            <div className="main-section">
                    <ul className="igloo" role="navigation">
                    <Link to={'/main-page'}>
                        <li className="back-icon"><i className="fas fa-undo-alt"></i> <i className="fas fa-th-large"></i></li>
                    </Link>
                        <li className="igloo-logo"><i className="fas fa-comments"></i></li>
                        <li><img src={Image3} className="profile-image user-icon-alt" alt="profile"/></li>
                    </ul>

                    <h3>Fes clic a la icona de conversa per a iniciar un xat</h3>
                
                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="Cerca a un amic" />
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <div className="chat-section">
                        <h3>Xats recents  <i className="title-icon fas fa-clock fa-sm"></i></h3> 
                        <img src={Image2} alt="John"/>
                        <div className="card-header">
                            <p>Joan López 
                                <span>@jlopez</span>
                            </p>   
                        </div>
                    <Link to={'/main-page'}>    
                        <i className="fas fa-comment-medical fa-2x"></i>
                    </Link>
                        <img src={Image} alt="John"/>
                        <div className="card-header">
                            <p>Ferran Roig 
                                <span>@froiigg</span>
                            </p>   
                        </div>
                        <i className="fas fa-comment-medical fa-2x"></i>

                        <img src={Image4} alt="John"/>
                        <div className="card-header">
                            <p>Josep Prado
                                <span>@jprado</span>
                            </p>   
                        </div>
                    <Link to={'/main-page'}>   
                        <i className="fas fa-comment-medical fa-2x"></i>
                    </Link>
                        <h3>Amics connectats  <i className="title-icon fas fa-circle"></i></h3>
                        <img src={Image3} alt="John"/>
                        <div className="card-header">
                            <p>Laia López 
                                <span>@laiiii</span>
                            </p>   
                        </div>
                    <Link to={'/main-page'}>   
                        <i className="fas fa-comment-medical fa-2x"></i>
                    </Link>
                        <img src={Image4} alt="John"/>
                        <div className="card-header">
                            <p>Fran Oliveira
                                <span>@carlos</span>
                            </p>   
                        </div>
                    <Link to={'/main-page'}>   
                        <i className="fas fa-comment-medical fa-2x"></i>
                    </Link>

                        <h3>Amics desconnectats  <i className="title-icon fas fa-circle red"></i></h3>
                        <img src={Image2} alt="John"/>
                        <div className="card-header">
                            <p>Fran Pérez 
                                <span>@jlopez</span>
                            </p>   
                        </div>

                        <img src={Image} alt="John"/>
                        <div className="card-header">
                            <p>Oscar Coll 
                                <span>@froiigg</span>
                            </p>   
                        </div>

                        <img src={Image4} alt="John"/>
                        <div className="card-header">
                            <p>Carles Solis
                                <span>@charles24</span>
                            </p>   
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Chat;