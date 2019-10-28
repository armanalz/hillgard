import React, { Component } from 'react';
import Icon from './utilities/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './utilities/SideDrawer';


class Header extends Component {

    state = {
        
        drawerOpen:false,
        bckShow:false 
    }

    componentDidMount() {

        window.addEventListener('scroll',this.handlerScroll);

    }

    handlerScroll = () => {

        if (window.scrollY > 50) {

             this.setState({
                 bckShow:true
             })

        } else {

             this.setState({
                 bckShow:false
             })
        }
     }

    toggleDrawer = (value) => {

        this.setState({
            drawerOpen:value
        })

    }

    render() {

        return (

         <header className="header">

            <div className="header__container">

               <div className="header__container--title">
                    <h4>
                        <span className="header__container--title-span">
                            The Hilgart
                        </span>
                    </h4>
                    <div className="header__container--title-btn">

                        <IconButton area-label="Menu" color="inherit" 
                                    id={this.state.bckShow ? "bg-show" : "transparent"}
                                    onClick={()=>this.toggleDrawer(true)} 
                        >
                            <MenuIcon id="btn"
                                      className={this.state.bckShow ? "btn-scroll" : "btn-top"}
                            />
                        </IconButton>
                            
                    </div>
                    <SideDrawer
                                open={this.state.drawerOpen}
                                onClose={(value)=> this.toggleDrawer(value)}
                    />
               </div>

               <div className="header__container--main">

                    <nav className="header__container--nav">

                        <ul className="header__container--nav-list">
                            <li className="header__container--nav-item">
                                <a href="http://localhost:3000/" 
                                   className="header__container--nav-link"
                                >
                                    About
                                </a>
                            </li>
                            <li className="header__container--nav-item">
                                <a href="http://localhost:3000/" 
                                   className="header__container--nav-link"
                                >
                                    Services
                                </a>
                            </li>
                            <li className="header__container--nav-item">
                                <a href="http://localhost:3000/" 
                                   className="header__container--nav-link active"
                                >
                                    Journal
                                </a>
                            </li>
                            <li className="header__container--nav-item">
                                <a href="http://localhost:3000/" 
                                   className="header__container--nav-link"
                                >
                                    Contacts
                                </a>
                            </li>
                        </ul>
                       <Icon name="icon-reply"/>

                    </nav>

                    <div className="header__container--content">

                        <div className="header__container--content-first">

                            <div className="header__container--content-first-head">
                                <span className="header__container--content-first-head-no">
                                    01
                                </span>
                                <span className="header__container--content-first-head-date">
                                    May17,2018
                                </span>
                                <span className="header__container--content-first-head-name">
                                     by Erin Hilgart
                                </span>
                            </div>

                            <h1 className="header__container--content-first-title">
                                Why Your Strategy<br/> Presentaion Is<br/>  Boring Me
                            </h1>
                            <div className="header__container--content-first-btn">

                                <div className="header__container--content-first-btn-txt">
                                   Read More
                                </div>
                                <Icon name="icon-arrow-right2"/>
                            
                            </div>

                        </div> {/* header__container--content first */} 

                        <div className="header__container--content-border">
                                <span className="header__container--content-border-left"></span>
                                <span className="header__container--content-border-right"></span>
                        </div>
                        <div className="header__container--content-second">

                            <span className="header__container--content-second-no">
                                02
                            </span>
                            <img src={require('../resources/img/img-2.jpg')} alt="bild2" 
                                 className="header__container--content-second-img"
                                 srcSet={`${require('../resources/img/img2-1x.jpg')} 300w,
                                          ${require('../resources/img/img2-2x.jpg')} 600w,
                                          ${require('../resources/img/img-2.jpg')} 1020w`
                                        }
                            />
                            <div className="header__container--content-second-txt">
                                <span className="header__container--content-second-name">
                                    by Erin Hilgart
                                </span>
                                <h3 className="header__container--content-second-h3">
                                    How getting fired<br/> built me a career
                                </h3>
                            </div>

                        </div>

                        <div className="header__container--content-third">

                            <span className="header__container--content-third-no">
                                03
                            </span>
                            <img src={require('../resources/img/img-3.jpg')} alt="bild3" 
                                 className="header__container--content-third-img"
                                 srcSet={`${require('../resources/img/img3-1x.jpg')} 300w,
                                          ${require('../resources/img/img3-2x.jpg')} 600w, 
                                          ${require('../resources/img/img-3.jpg')} 1020w`}
                            />
                            <div className="header__container--content-third-txt">
                                <span className="header__container--content-third-name">
                                    by Erin Hilgart
                                </span>
                                <h3 className="header__container--content-third-h3">
                                    6 designs that<br/> celebrate inclusivity
                                </h3>
                            </div>

                        </div>

                    </div>  {/* header__container--content */}

                </div>       {/* header__container--main */}
          
            </div> {/* header__container */}

            <div className="header__photo">

                 <img src={require('../resources/img/headerphoto.jpg')}
                      className="header__photo--img" alt="header"
                 />

            </div>

        </header>
        );
    }
}

export default Header;