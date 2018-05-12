import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';


class RegisterForm extends Component {
    constructor(props) {
        super(props)
            this.state = {
             username: '',
             password: '',
             email: '',
             pic_url: ''
             }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        };


    handleInputChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            username: '',
            password: '',
            email: '',
            pic_url: ''
        });
    }

    render() {
        return (
            <div className='registerCont'>
            <form onSubmit={this.handleSubmit}>
            <h1>Create Account</h1>

            <div className='registerLabelOne'>
            <label>
                <h3>User Name</h3>
                <input
                type='text'
                name='username'
                value={this.state.username}
                onChange={this.handleInputChange}
                />
                </label>
                </div>

                <div className='registerLabelTwo'>
                <label>
                    <h3>Email</h3>
                    <input
                    type='text'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    />
                    </label>
                    </div>

                    <div className='registerLabelThree'>
                    <label>
                    <h3>Password</h3>
                    <input
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    />
                    </label>
                    </div>

                    <div className='registerLabelFour'>
                    <label>
                    <h3>Pic URL</h3>
                    <input
                    type='text'
                    name='pic_url'
                    value={this.state.pic_url}
                    onChange={this.handleInputChange}
                    />
                    </label>
                    </div>

                    <div className='registerButton'>
                    <button type='submit'>REGISTER</button>
                    </div>

                    </form>
                    </div>
        )
    }
}
export default RegisterForm;
