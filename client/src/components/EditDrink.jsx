import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import strawberry from './cssImages/strawstrawberry.jpg'

const drinkImage = {
  width:"15%"
}
export default class EditDrink extends Component {
  constructor(props) {
    super(props);

  this.state = {
    redirectProfile: false,
    drink: Object.assign({
      drink_id:'',
      drink_name:'',
      ingredients:'',
      instructions:'',
      image_url:'',
      user_id:''
    }, props.initialValue)
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const {name, value} = e.target;
    console.log(name, value);
    this.setState((prevState, props) => ({
      drink: {
        ...prevState.drink,
        [name]: value
      }
    }))
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.drink);
    this.setState({
      redirectProfile: true
    })
  }

  render() {

    const { drink_name, ingredients, instructions, image_url } = this.state.drink;
    return(
      <div className='editFormCont'>
      <form onSubmit={this.handleSubmit}>
        {this.state.redirectProfile && <Redirect to='/'/>}
        <label>
        <div className='labels'>
          <h3>Cocktail:</h3>
        </div>
          <input className='inputs'
            type='text'
            name='drink_name'
            value={drink_name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
        <div className='labels'>
          <h3>Ingredients:</h3>
        </div>
          <textarea className='inputs'
            name='ingredients'
            value={ingredients}
            rows='6'
            onChange={this.handleInputChange}
          />
        </label>
        <label>
        <div className='labels'>
          <h3>Instructions:</h3>
        </div>
          <textarea className='inputs'
            name='instructions'
            value={instructions}
            rows='8'
            onChange={this.handleInputChange}
          />
        </label>
        <label>
        <div className='labels'>
          <h3>Url for Drink Image:</h3>
        </div>
          <input className='inputs'
            type='url'
            name='image_url'
            value={image_url}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <img src={image_url} alt="" style={drinkImage}/>
        <br />
        <div className='buttonCont'>
        <button type='submit' className='submitButton'>SUBMIT</button>
        <Link to='/' className='cancel'>CANCEL</Link>
        </div>
      </form>
      <div className='detailStrawberry'>
      <img src={strawberry} alt="" className='strawberryImg'/>
      </div>
      </div>
      )
  }
}
