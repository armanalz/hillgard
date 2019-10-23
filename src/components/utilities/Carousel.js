import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Carousel extends Component {
    render() {
 

        const settings = {
            
                dots: false,
                infinite: true,
                speed: 300,
                autoplay:true,
                
                centerMode:true,
                slidesToScroll:1,
                responsive:[ { breakpoint: 600, settings: { slidesToShow: 1 } },
                            { breakpoint: 900, settings: { slidesToShow: 2 } },
                            { breakpoint: 1200, settings: { slidesToShow: 2.9 } },
                            { breakpoint: 1800, settings: { slidesToShow: 3.13 } }, 
                            { breakpoint: 100000, settings: 'unslick' } ]

          } 
       

        return (

                <div className="section-news__content">

                    <Slider {...settings}>

                        <div className="section-news__content-wrapper" >

                            <div style={{display:"flex",justifyContent:"center",overflow:"hidden" }}>
                                <img src={require('../../resources/img/img4-2x.jpg')} alt="bild4" 
                                    className="section-news__content-wrapper-bild"
                                    srcSet={`${require('../../resources/img/img4-1x.jpg')} 500w,
                                          ${require('../../resources/img/img4-2x.jpg')} 1000w,
                                          ${require('../../resources/img/img4-2x.jpg')} 3112w`}
                                    sizes="(max-width:600px) 80vw ,(max-width:900px) 40vw"
                                />
                            </div>
                            <div className="section-news__content-wrapper-autor">
                                <span className="section-news__content-wrapper-autor-date">
                                     March15,2016
                                </span>
                                <span className="section-news__content-wrapper-autor-name">
                                     by Erin Hilgart
                                </span>
                            </div>
                            <div className="section-news__content-wrapper-title">
                                <h2>Creative technics that help you build fabulous UIs</h2>
                            </div>

                        </div>

                        <div className="section-news__content-wrapper" >

                            <div style={{display:"flex",justifyContent:"center",overflow:"hidden" }}>
                                <img src ={require('../../resources/img/img5-2x.jpg')} 
                                     className="section-news__content-wrapper-bild" alt="bild5"
                                     srcSet={`${require('../../resources/img/img5-1x.jpg')} 500w,
                                              ${require('../../resources/img/img5-2x.jpg')} 1000w, 
                                              ${require('../../resources/img/img5-2x.jpg')} 1020w`}
                                />
                            </div>
                            <div className="section-news__content-wrapper-autor">
                                <span className="section-news__content-wrapper-autor-date">
                                     March15,2016
                                </span>
                                <span className="section-news__content-wrapper-autor-name">
                                     by Erin Hilgart
                                </span>
                            </div>
                            <div className="section-news__content-wrapper-title">
                                <h2>4 types of search methods all designers should know</h2>
                            </div>

                        </div>

                        <div className="section-news__content-wrapper" >

                            <div style={{display:"flex",justifyContent:"center",overflow:"hidden" }}>
                                 <img src ={require('../../resources/img/img6-2x.jpg')} 
                                      className="section-news__content-wrapper-bild" alt="bild6"
                                      srcSet={`${require('../../resources/img/img6-1x.jpg')} 500w,
                                               ${require('../../resources/img/img6-2x.jpg')} 1000w,
                                               ${require('../../resources/img/img6-2x.jpg')} 1020w`}
                                 />
                            </div>
                            <div className="section-news__content-wrapper-autor">
                                <span className="section-news__content-wrapper-autor-date">
                                     March15,2016
                                </span>
                                <span className="section-news__content-wrapper-autor-name">
                                     by Erin Hilgart
                                </span>
                            </div>
                            <div className="section-news__content-wrapper-title">
                                <h2>How to do user search with kids</h2>
                            </div>
                            
                        </div>

                        <div className="section-news__content-wrapper" >

                            <div style={{display:"flex",justifyContent:"center",overflow:"hidden" }}>
                                <img src ={require('../../resources/img/img7-2x.jpg')} 
                                     className="section-news__content-wrapper-bild" alt="bild7" 
                                     srcSet={`${require('../../resources/img/img7-1x.jpg')} 500w,
                                              ${require('../../resources/img/img7-2x.jpg')} 1000w, 
                                              ${require('../../resources/img/img7-2x.jpg')} 1020w`}
                                />
                            </div>
                            <div className="section-news__content-wrapper-autor">
                                <span className="section-news__content-wrapper-autor-date">
                                     March15,2016
                                </span>
                                <span className="section-news__content-wrapper-autor-name">
                                     by Erin Hilgart
                                </span>
                            </div>
                            <div className="section-news__content-wrapper-title">
                                <h2>Designing for accessibility is not that hard</h2>
                            </div>

                        </div>

                        <div className="section-news__content-wrapper" >

                            <div style={{display:"flex",justifyContent:"center",overflow:"hidden" }}>
                                <img src ={require('../../resources/img/img8-2x.jpg')} 
                                     className="section-news__content-wrapper-bild" alt="bild8"
                                     srcSet={`${require('../../resources/img/img8-1x.jpg')} 500w,
                                              ${require('../../resources/img/img8-2x.jpg')} 1000w,
                                              ${require('../../resources/img/img8-2x.jpg')} 1020w`}
                                />
                            </div>
                            <div className="section-news__content-wrapper-autor">
                                <span className="section-news__content-wrapper-autor-date">
                                     March15,2016
                                </span>
                                <span className="section-news__content-wrapper-autor-name">
                                     by Erin Hilgart
                                </span>
                            </div>
                            <div className="section-news__content-wrapper-title">
                                <h2>Why Your Strategy
                                    Presentaion Is
                                    Boring Me
                                </h2>
                            </div>

                        </div>

                        <div className="section-news__content-wrapper" >

                            <div style={{display:"flex",justifyContent:"center",overflow:"hidden" }}>
                                <img src ={require('../../resources/img/img9-2x.jpg')}
                                    className="section-news__content-wrapper-bild" alt="bild9"
                                    srcSet={`${require('../../resources/img/img9-1x.jpg')} 500w,
                                            ${require('../../resources/img/img9-2x.jpg')} 1000w,
                                            ${require('../../resources/img/img9-2x.jpg')} 1020w`}
                                />
                            </div>
                            <div className="section-news__content-wrapper-autor">
                                <span className="section-news__content-wrapper-autor-date">
                                     March15,2016
                                </span>
                                <span className="section-news__content-wrapper-autor-name">
                                     by Erin Hilgart
                                </span>
                            </div>
                            <div className="section-news__content-wrapper-title">
                                <h2>What should you know about UX</h2>
                            </div>

                        </div>                        
                        
                    </Slider>

                </div> /* section-news__content */
        );
    }
}

export default Carousel;