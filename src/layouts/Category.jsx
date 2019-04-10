import React, { Component } from 'react'

export default class Category extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md py-0 navbar-dark bg-dark py-md-0">
                    <div className="container">
                        <ul className='navbar-nav'>
                            <li className='nav-item py-0'>
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li className='nav-item ml-4 py-0'>
                                <a href="#" className="nav-link">Smartphones</a>
                            </li>
                            <li className='nav-item ml-4 py-0'>
                                <a href="#" className="nav-link">Fashion</a>
                            </li>
                            <li className='nav-item ml-4 py-0'>
                                <a href="#" className="nav-link">Home Appliance</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
