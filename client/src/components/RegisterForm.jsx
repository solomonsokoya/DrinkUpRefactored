import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import empire from './cssImages/empirestate.jpg';


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
            <div>
            <h1> REGISTER </h1>
            </div>

            <form  className='regForm'onSubmit={this.handleSubmit}>

            <div className='registerImage'>
            <img src= {empire} />
            </div>

            <div className='registerLabelOne'>
            <label>
                <h3>User Name</h3>
                <input className='regInputOne'
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
                    <input className='regInputTwo'
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
                    <input className='regInputThree'
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
                    <input className='regInputFour'
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
