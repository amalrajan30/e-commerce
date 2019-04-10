import React, { Component } from 'react'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            pass: ''
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-lg navbar-ligh bg-light'>
                    <div className="container">
                        <a href="#" className="navbar-brand p-2"> Brand</a>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <button onChange={this.handleChange} data-toggle='modal' data-target='#signup' className="nav-link btn btn-link">Signup</button>
                            </li>
                            <li className='nav-item'>
                                <button onChange={this.handleChange} data-toggle='modal' data-target='#login' className="nav-link btn btn-link">Login</button>
                            </li>
                            <li className='nav-item'>
                                <button className="nav-link btn btn-link">Cart</button>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* login modal */}
                <div class="modal fade" id='login' tabindex="-1" role="dialog" aria-labelledby="loginModel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="loginModalTitle">Log In</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail</label>
                                        <input className='form-control' id='email' type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input className='form-control' id='pass' type="password" />
                                    </div>
                                    <button className="btn btn-primary">Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* signup modal */}

                <div class="modal fade" id='signup' tabindex="-1" role="dialog" aria-labelledby="signupModel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="signupModalTitle">Log In</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Name</label>
                                        <input className='form-control' id='name' type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail</label>
                                        <input className='form-control' id='email' type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input className='form-control' id='pass' type="password" />
                                    </div>
                                    <button className="btn btn-primary">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

