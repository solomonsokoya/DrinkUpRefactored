import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

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
    console.log(name, value)
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
    console.log(this.props)
    const { drink_id, drink_name, ingredients, instructions, image_url } = this.props.drink;
    return(
      <form onSubmit={this.handleSubmit}>
        {this.state.redirectProfile && <Redirect to='/'/>}
        <label>
          <h3>Cocktail:</h3>
          <input
            type='text'
            name='drink_name'
            value={drink_name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <h3>Ingredients:</h3>
          <textarea
            name='ingredients'
            value={ingredients}
            rows='6'
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <h3>Instructions:</h3>
          <textarea
            name='instructions'
            value={instructions}
            rows='8'
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <h3>Url for Drink Image:</h3>
          <input
            type='url'
            name='image_url'
            value={image_url}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <img src={image_url} alt="" style={drinkImage}/>
        <br />
        <button type='submit'>SUBMIT</button>
        <br />
        <Link to='/'>CANCEL</Link>
      </form>
      )
  }
}
