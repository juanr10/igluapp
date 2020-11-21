import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/kid2.jpg';
import Image2 from '../../images/kid1.jpg';
import Image3 from '../../images/kid3.jpg';
import Image4 from '../../images/kid4.jpg';
import Toy from '../../images/toys.jpg';

const Feed = () => {
    return (
        <div className="main-container">
            <div className="main-section">
                    <ul className="igloo" role="navigation">
                    <Link to={'/main-page'}>
                        <li className="back-icon"><i className="fas fa-undo-alt"></i> <i className="fas fa-th-large"></i></li>
                    </Link>
                        <li className="igloo-logo"><i className="fas fa-igloo"></i></li>
                        <li><i className="fa fa-bell"></i></li>
                        <li><img src={Image3} className="profile-image user-icon" alt="profile"/></li>
                    </ul>

                    <div className="card">
                        <img src={Image} alt="John"/>
                        <i className="fas fa-ellipsis-h options"></i>

                        <div className="card-header">
                            <p>Joan López 
                                <span>@jlopez</span>
                                <span className="time"><i className="fas fa-clock"></i> Fa 18 minuts</span>
                            </p>   
                        </div>

                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit per sollicitudin nullam, diam vestibulum donec aliquet cum litora et magna nisl arcu.</p>
                        </div>
                                        
                        <div className="card-footer">
                            <i className="fas fa-comments"></i> 
                            <i className="fas fa-share-square"></i>
                        </div>
                    </div>

                    <div className="card">
                        <img src={Image4} alt="John"/>
                        <i className="fas fa-ellipsis-h options"></i>

                        <div className="card-header">
                            <p>Ferran Roig 
                                <span>@roiiig94</span>
                                <span className="time"><i className="fas fa-clock"></i> Fa 2 hores</span>
                            </p>   
                        </div>

                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit per sollicitudin nullam.</p>
                            <img className="toys" src={Toy} alt="toys" />
                        </div>

                        <div className="card-footer">
                            <i className="fas fa-comments"></i> 
                            <i className="fas fa-share-square"></i>
                        </div>
                    </div>

                    <div className="card">
                        <img src={Image2} alt="John"/>
                        <i className="fas fa-ellipsis-h options"></i>

                        <div className="card-header">
                            <p>Carlos Oliveira 
                                <span>@caarlos</span>
                                <span className="time"><i className="fas fa-clock"></i> Fa 4 hores</span>
                            </p>   
                        </div>

                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit per sollicitudin nullam, diam vestibulum donec aliquet cum litora et magna nisl arcu.</p>
                        </div>
                                        
                        <div className="card-footer">
                            <i className="fas fa-comments"></i> 
                            <i className="fas fa-share-square"></i>
                        </div>
                    </div>

                <div className="footer-section">
                    <ul className="igloo-footer" role="navigation">
                        <li className="search-icon"><i className="fa fa-search fa-lg"></i></li>
                        <li className="igloo-logo"><i className="fas fa-plus-circle"></i></li>
                        <li className="email-icon"><i className="fa fa-envelope"></i></li>
                    </ul>
                </div>
                   
{/* *********** */}
            </div>
            
                    {/* CUADRADOS */}
                    {/* <i className="fas fa-th-large"></i> */}
                    {/* */}
        </div>
    );
};

export default Feed;