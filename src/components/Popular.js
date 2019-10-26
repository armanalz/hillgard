import React from 'react';
import Icon from './utilities/Icon';

const Popular = () => {
     
    return (
       <section className="section-popular">
          
          <div className="section-popular__main">

              <div className="section-popular__number">

                <span className="section-popular__number-no">03</span>
                <span className="section-popular__number-line"></span>
                <span className="section-popular__number-rec">Recommendation</span>

              </div> 

              <div className="section-popular__title">
                    <h1>Most Popular</h1>
              </div>

              <div  className="section-popular__content">

                <div className="section-popular__content-wrapper" >

                  <div className="section-popular__content-wrapper-autor">
                    <span className="section-popular__content-wrapper-autor-date">
                        March15,2016
                    </span>
                    <span className="section-popular__content-wrapper-autor-name">
                        by Erin Hilgart
                    </span>
                  </div>
                  <div className="section-popular__content-wrapper-title">
                     <a href="#" className="section-popular__content-wrapper-title-link">
                        <h2>A guide to a Golden Ratio for Designers</h2>
                     </a>
                     <img src={require('../resources/img/img5-2x.jpg')}
                          className="section-popular__content-wrapper-img"
                     />
                  </div>
                  
                </div>

                <div className="section-popular__content-wrapper">

                   <div className="section-popular__content-wrapper-autor">
                       <span className="section-popular__content-wrapper-autor-date">
                          March15,2016
                       </span>
                       <span className="section-popular__content-wrapper-autor-name">
                          by Erin Hilgart
                       </span>
                   </div>
                   <div className="section-popular__content-wrapper-title">
                      <a href="#" className="section-popular__content-wrapper-title-link">
                          <h2>Why Your Strategy Presentaion Is Boring Me</h2>
                      </a>
                      <img src={require('../resources/img/img4-2x.jpg')} 
                           className="section-popular__content-wrapper-img"
                      />
                   </div>
                  
                </div>

                <div className="section-popular__content-wrapper" >

                    <div className="section-popular__content-wrapper-autor">
                       <span className="section-popular__content-wrapper-autor-date">
                             March15,2016
                       </span>
                       <span className="section-popular__content-wrapper-autor-name">
                          by Erin Hilgart
                       </span>
                    </div>
                    <div className="section-popular__content-wrapper-title">
                       <a href="#" className="section-popular__content-wrapper-title-link">
                          <h2>Top 7 photo editing apps for designers</h2>
                       </a>
                       <img src={require('../resources/img/img6-2x.jpg')} 
                            className="section-popular__content-wrapper-img"
                       />
                    </div>
                    
                </div>

                <div className="section-popular__content-wrapper" >
                    
                   <div className="section-popular__content-wrapper-autor">
                       <span className="section-popular__content-wrapper-autor-date">
                         March15,2016
                       </span>
                       <span className="section-popular__content-wrapper-autor-name">
                           by Erin Hilgart
                       </span>
                   </div>
                   <div className="section-popular__content-wrapper-title">
                       <a href="#" className="section-popular__content-wrapper-title-link">
                           <h2>Getting started with accessibility user testing</h2>
                       </a>
                       <img src={require('../resources/img/img8-2x.jpg')} 
                            className="section-popular__content-wrapper-img"
                       />
                   </div>
                  
                </div>
                
                <button className="section-popular__btn">

                     <span className="section-popular__btn-txt">
                        View More
                     </span>

                     <Icon name="icon-arrow-right2"/>

                </button>
                

              </div> {/* section-popular__content */}

          </div> {/* section-popular__main */}

      </section>

    );
};

export default Popular;