import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
         redirectHome: false,
         users: Object.assign({
         username: '',
         password: '',
         email: '',
         pic_url: ''
         }, props.intinalValue)
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange(e) {
        const {name, value} = e.target;
        this.setState((prevState, props) => ({
            users:{
                ...prevState.users,
                [name]: value
            }
        }))
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.onSubmit(this.state.username);
        this.setState({
            username: '',
            password: '',
            email: '',
            pic_url: ''
        });
    }

    render() {
        const {id, username, email, password, pic_url } = this.state.users
        return (
            <form onSubmit={(e) => this.handleSubmit(e)} className={id ? 'edit' : 'create'}>
            {this.state.redirectHome && <Redirect to='/Register' />}
            {!id && <h1>Create Account</h1>}
            <label>
                <h3>User Name</h3>
                <textarea
                type='text'
                name='username'
                value={username}
                onChange={this.handleInputChange}
                />
                </label>
                <label>
                    <h3>Email</h3>
                    <textarea
                    type='text'
                    name='Email'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    />
                    </label>
                    <label>
                    <h3>Password</h3>
                    <textarea
                    type='text'
                    name='Password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    />
                    </label>
                    <label>
                    <h3>Pic Url</h3>
                    <textarea
                    type='text'
                    name='Pic URL'
                    value={this.state.pic_url}
                    onChange={this.handleInputChange}

                    />
                    </label>
                    <button type='submit'><Link to= '/login'> REGISTER </Link></button>
                    </form>
        )
    }
}
export default RegisterForm;
