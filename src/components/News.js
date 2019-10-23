import React, { Component } from 'react';
import Carousel from './utilities/Carousel';

class News extends Component {
    render() {
        return (
            <section className="section-news">

                <div className="section-news__number">
                    <span className="section-news__number-no">02</span>
                    <span className="section-news__number-line"></span>
                    <span className="section-news__number-new">New</span>
                </div>

                <div className="section-news__title">
                  <h1>Latest News</h1>
                </div>             

                  <Carousel/>                

            </section>
        );
    }
}

export default News;