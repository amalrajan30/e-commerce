import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="carousel slide" data-ride='carousel' data-interval="5000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://via.placeholder.com/1080x360?text=1" className='d-block w-100' />
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/1080x360?text=2" className='d-block w-100' />
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/1080x360?text=3" className='d-block w-100' />
                        </div>
                    </div>
                </div>

                <h4 className="text-center mt-5 font-weight-bold h2">Latest Products</h4>

                <div className="container mt-5">
                    <div className="row">
                        <div className="card col-3 mt-4 ml-0.5 mr-0.5">
                            <img src="https://via.placeholder.com/264x408?text=1" />
                            <div className="card-footer">
                                <p style={{ float: "left" }}>Samsung Galaxy s10</p>
                                <p style={{ float: "right" }} className='font-weight-bold d-block'>$1000</p>
                            </div>
                        </div>
                        <div className="card col-3 mt-4 ml-0.5 mr-0.5">
                            <img src="https://via.placeholder.com/264x408?text=1" />
                        </div>
                        <div className="card col-3 mt-4 ml-0.5 mr-0.5">
                            <img src="https://via.placeholder.com/264x408?text=1" />
                        </div>
                        <div className="card col-3 mt-4 ml-0.5 mr-0.5">
                            <img src="https://via.placeholder.com/264x408?text=1" />
                        </div>
                        <div className="card col-3 mt-4 ml-0.5 mr-0.5">
                            <img src="https://via.placeholder.com/264x408?text=1" />
                        </div>
                        <div className="card col-3 mt-4 ml-0.5 mr-0.5">
                            <img src="https://via.placeholder.com/264x408?text=1" />
                        </div>
                        <div className="card col-3 mt-4 ml-0.5 mr-0.5">
                            <img src="https://via.placeholder.com/264x408?text=1" />
                        </div>
                        <div className="card col-3 mt-4 ml-0.5 mr-0.5">
                            <img src="https://via.placeholder.com/264x408?text=1" />
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
