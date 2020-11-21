import React from 'react';
import { Link } from 'react-router-dom';
import Image3 from '../../images/kid3.jpg';

const Resources = () => {
    return (
        <div className="main-container">
            <div className="main-section">
                    <ul className="igloo" role="navigation">
                    <Link to={'/main-page'}>
                        <li className="back-icon"><i className="fas fa-undo-alt"></i> <i className="fas fa-th-large"></i></li>
                    </Link>
                        <li className="igloo-logo"><i className="fas fa-paperclip"></i></li>
                        <li><img src={Image3} className="profile-image user-icon-alt" alt="profile"/></li>
                    </ul>

                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="Cerca un recurs" />
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <h3>Fes clic a la icona del recurs per a visualitzar-lo</h3>

                    <div className="recourse-section">
                        <h3 className="recourse-title">Lorem ipsum dolor sit amet.</h3>
                        <div className="file">
                            <i className="fas fa-circle"></i>
                             <h3>Lorem ipsum. <i class="file-icon far fa-file-alt"></i></h3>
                        </div>
                        <div className="file">
                            <i className="fas fa-circle"></i>
                             <h3>Amet consectetur. <i className="file-icon fas fa-link"></i></h3>
                        </div>
                        <div className="file">
                            <i className="fas fa-circle"></i>
                             <h3>Tortor turpisa. <i className="file-icon far fa-file-alt"></i></h3>
                        </div>
                        <div className="file">
                            <i className="fas fa-circle"></i>
                             <h3>Interdum turpisisi. <i className="file-icon fas fa-link"></i></h3>
                        </div>       


                        <h3 className="recourse-title">At penatibus senectus.</h3>
                        <div className="file">
                            <i className="fas fa-circle"></i>
                             <h3>Amet consectetur. <i className="file-icon fas fa-link"></i></h3>
                        </div>
                        <div className="file">
                            <i className="fas fa-circle"></i>
                             <h3>Tortor turpisa. <i className="file-icon far fa-file-alt"></i></h3>
                        </div>
                        <div className="file">
                            <i className="fas fa-circle"></i>
                             <h3>Interdum turpisisi. <i className="file-icon fas fa-link"></i></h3>
                        </div>      
                        <div className="file">
                            <i className="fas fa-circle"></i>
                             <h3>Lorem ipsum. <i className="file-icon far fa-file-alt"></i></h3>
                        </div>                   
                    </div>
                        
            </div>
        </div>
    );
};

export default Resources;